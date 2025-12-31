import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";
import { Send, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const GetStarted = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const serviceFromUrl = searchParams.get("service");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: serviceFromUrl || "",
    project: "",
  });

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

    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.project.trim()) {
      toast({
        title: 'Please fill all fields',
        description: 'Name, email, and project details are required.',
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
        service: formData.service || 'Not specified',
        message: formData.project,
        time: formattedTime,
      };

      console.log('Sending email with params:', templateParams);

      // Send email via EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log('Email sent successfully:', response);

      toast({
        title: "Message sent",
        description: "We typically respond within 24 business hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        service: serviceFromUrl || "",
        project: "",
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
      <section className="py-12 md:py-24 lg:py-32">
        <div className="section-container">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-6 md:mb-8 h-10 px-3 hover:bg-card rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm md:text-base">Back to Services</span>
          </Link>

          <div className="max-w-2xl mx-auto">
            <div className="mb-8 md:mb-12" data-aos="fade-up">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Let's get started
              </h1>
              {serviceFromUrl && (
                <p className="text-base md:text-lg lg:text-xl text-grey-soft">
                  Tell us more about your interest in <span className="text-primary font-semibold">{serviceFromUrl}</span>
                </p>
              )}
            </div>

            <div 
              className="bg-card border border-border rounded-lg p-6 md:p-8 lg:p-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                {/* Name */}
                <div className="space-y-2 md:space-y-3">
                  <Label htmlFor="name" className="text-sm md:text-base font-semibold">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-11 md:h-12 px-4 bg-background border border-border rounded-lg text-sm md:text-base"
                    required
                  />
                </div>

                {/* Company Email */}
                <div className="space-y-2 md:space-y-3">
                  <Label htmlFor="email" className="text-sm md:text-base font-semibold">
                    Company Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-11 md:h-12 px-4 bg-background border border-border rounded-lg text-sm md:text-base"
                    required
                  />
                </div>

                {/* Service of Interest - Auto-filled but displayed */}
                {serviceFromUrl && (
                  <div className="space-y-2 md:space-y-3">
                    <Label className="text-sm md:text-base font-semibold">
                      Service of Interest
                    </Label>
                    <div className="h-11 md:h-12 px-4 bg-background border border-border rounded-lg flex items-center">
                      <span className="text-foreground font-medium text-sm md:text-base">{formData.service}</span>
                    </div>
                  </div>
                )}

                {/* Project Details */}
                <div className="space-y-2 md:space-y-3">
                  <Label htmlFor="project" className="text-sm md:text-base font-semibold">
                    Tell us about your project/challenges <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="project"
                    placeholder="Describe your project, challenges, or what you're looking to build..."
                    value={formData.project}
                    onChange={(e) =>
                      setFormData({ ...formData, project: e.target.value })
                    }
                    className="min-h-28 md:min-h-32 px-4 py-3 bg-background border border-border rounded-lg resize-none text-sm md:text-base"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full h-11 md:h-12 text-sm md:text-base font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <p className="text-xs md:text-sm text-grey-soft text-center mt-6 md:mt-8">
                We typically respond within 24 business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetStarted;
