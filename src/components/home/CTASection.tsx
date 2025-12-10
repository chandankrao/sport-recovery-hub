import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center glass rounded-2xl p-10 md:p-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your{" "}
            <span className="text-gradient-primary">Recovery Journey?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join thousands of athletes who have successfully recovered and
            improved their performance with SportRecover.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard">
              <Button variant="hero">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/coaches">
              <Button variant="hero-outline">Find a Coach</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
