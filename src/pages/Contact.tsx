import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send, Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import emailjs from '@emailjs/browser';

const projectTypes = [
  "AI Automation",
  "Web Development",
  "Tech Consulting",
  "MVP Development",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const serviceFromUrl = searchParams.get("service");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: serviceFromUrl || "",
    message: "",
  });

  // Initialize form with URL parameter
  useEffect(() => {
    if (serviceFromUrl && !formData.projectType) {
      setFormData((prev) => ({
        ...prev,
        projectType: serviceFromUrl,
      }));
    }
  }, [serviceFromUrl]);

  // EmailJS configuration
  const sanitize = (value?: string) => value?.trim() || '';
  const serviceId = sanitize(import.meta.env.VITE_EMAILJS_SERVICE_ID);
  const templateId = sanitize(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  const publicKey = sanitize(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  // Initialize EmailJS
  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey);
      console.log('EmailJS initialized');
    } else {
      console.error('EmailJS public key missing');
    }
  }, [publicKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate environment variables
    const missing = [];
    if (!serviceId) missing.push({ label: 'Service ID', key: 'VITE_EMAILJS_SERVICE_ID' });
    if (!templateId) missing.push({ label: 'Template ID', key: 'VITE_EMAILJS_TEMPLATE_ID' });
    if (!publicKey) missing.push({ label: 'Public Key', key: 'VITE_EMAILJS_PUBLIC_KEY' });

    if (missing.length > 0) {
      console.error('Missing EmailJS configuration:', missing);
      toast({
        title: 'Send failed',
        description: `Missing config: ${missing.map((m) => m.label).join(', ')}`,
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    console.log('Attempting to send email with:', {
      serviceId,
      templateId,
      publicKey: publicKey.substring(0, 5) + '...',
    });

    try {
      // Format timestamp
      const now = new Date();
      const formattedTime = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      // Template parameters matching EmailJS template structure
      const templateParams = {
        name: formData.name,
        email: formData.email,
        service: formData.projectType || 'Not specified',
        message: formData.message,
        time: formattedTime,
      };

      console.log('Sending email with params:', templateParams);

      // Send email via EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log('Email sent successfully:', response);

      console.log('Email sent successfully:', response);

      toast({
        title: "Message sent",
        description: "We typically respond within 24 business hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
      });
    } catch (error: any) {
      console.error('EmailJS send error:', error);
      console.error('Error details:', {
        status: error?.status,
        text: error?.text,
        message: error?.message,
      });
      
      const errorMessage = error?.text || error?.message || 'Could not send your message. Please try again.';
      
      toast({
        title: 'Send failed',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 lg:py-32">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 xl:gap-32">
            {/* Left Content */}
            <div>
              <p className="text-primary font-medium mb-3 md:mb-4 tracking-wide text-sm md:text-base">CONTACT</p>
              <h1 className="mb-6 md:mb-8">
                Let's Build Something Efficient.
              </h1>
              <p className="text-base md:text-lg text-grey-soft leading-relaxed mb-8 md:mb-12">
                Ready to automate your operations or build your next big idea? Reach out today.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="p-4 md:p-6 lg:p-8 bg-card border border-border rounded-lg">
                  <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">What to Expect</h3>
                  <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-grey-soft">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Response within 24 hours
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      No sales pressure
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Honest assessment of your needs
                    </li>
                  </ul>
                </div>

                <div className="p-4 md:p-6 lg:p-8 bg-card border border-border rounded-lg">
                  <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contact Details</h3>
                  <div className="space-y-3 md:space-y-4 text-sm md:text-base text-grey-soft">
                    <p>
                      <strong className="text-foreground block mb-1">Email:</strong>
                      hello@coreveil.com
                    </p>
                    <p>
                      <strong className="text-foreground block mb-1">Office Hours:</strong>
                      Monday – Friday, 9:00 AM – 6:00 PM
                    </p>
                    <div>
                      <strong className="text-foreground block mb-2 md:mb-3">Social Media:</strong>
                      <div className="flex flex-wrap gap-3 md:gap-4">
                        <a 
                          href="https://www.linkedin.com/company/coreveil/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 h-12 px-4 text-primary hover:text-accent transition-colors hover:bg-card rounded-lg border border-border"
                        >
                          <Linkedin className="w-5 h-5" />
                          <span className="text-sm md:text-base">LinkedIn</span>
                        </a>
                        <a 
                          href="https://x.com/coreveilagency?s=11" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 h-12 px-4 text-primary hover:text-accent transition-colors hover:bg-card rounded-lg border border-border"
                        >
                          <Twitter className="w-5 h-5" />
                          <span className="text-sm md:text-base">Twitter</span>
                        </a>
                        <a 
                          href="https://www.instagram.com/core.veil?igsh=MThzcGs2M3Bkamx3Mg%3D%3D&utm_source=qr" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 h-12 px-4 text-primary hover:text-accent transition-colors hover:bg-card rounded-lg border border-border"
                        >
                          <Instagram className="w-5 h-5" />
                          <span className="text-sm md:text-base">Instagram</span>
                        </a>
                        <a 
                          href="https://wa.me/message/OVPH6OOZQNIOB1" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 h-12 px-4 text-primary hover:text-accent transition-colors hover:bg-card rounded-lg border border-border"
                        >
                          <MessageCircle className="w-5 h-5" />
                          <span className="text-sm md:text-base">WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-grey-muted">
                  We typically respond to all inquiries within 24 business hours. Let's discuss how we can scale your business through modern technology.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-1.5 md:space-y-2">
                    <Label htmlFor="name" className="text-sm md:text-base">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-card border-border focus:border-primary h-11 md:h-12 text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <Label htmlFor="email" className="text-sm md:text-base">Company Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-card border-border focus:border-primary h-11 md:h-12 text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="company" className="text-sm md:text-base">Company (optional)</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-card border-border focus:border-primary h-11 md:h-12 text-sm md:text-base"
                  />
                </div>

                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="projectType" className="text-sm md:text-base">Service of Interest</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger className="bg-card border-border h-11 md:h-12 text-sm md:text-base">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type} className="text-sm md:text-base">
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="message" className="text-sm md:text-base">Tell us about your project/challenges</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                    className="bg-card border-border resize-none focus:border-primary text-sm md:text-base"
                    placeholder="What challenges are you facing? What processes need improvement?"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full h-12 md:h-13 text-sm md:text-base font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
