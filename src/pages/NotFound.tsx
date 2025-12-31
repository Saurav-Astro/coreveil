import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Background gradient effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="section-container text-center">
          {/* 404 Large Text */}
          <div className="relative mb-8" data-aos="fade-up">
            <h1 className="text-[180px] md:text-[280px] font-bold leading-none bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent opacity-20 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl md:text-6xl font-bold text-foreground">
                Page Not Found
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xl text-grey-soft mb-4">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-base text-grey-soft/80">
              Don't worry, even the best explorers get lost sometimes. Let's get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" data-aos="fade-up" data-aos-delay="200">
            <Button variant="hero" size="lg" asChild>
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services" className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="card-hover border border-border rounded-xl p-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/" className="text-grey-soft hover:text-primary transition-colors flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Home
              </Link>
              <Link to="/services" className="text-grey-soft hover:text-primary transition-colors flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Services
              </Link>
              <Link to="/about" className="text-grey-soft hover:text-primary transition-colors flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                About
              </Link>
              <Link to="/contact" className="text-grey-soft hover:text-primary transition-colors flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Contact
              </Link>
            </div>
          </div>

          {/* Help Text */}
          <p className="text-sm text-grey-soft/60 mt-12" data-aos="fade-up" data-aos-delay="400">
            Need assistance? <Link to="/contact" className="text-primary hover:text-accent underline">Contact our team</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
