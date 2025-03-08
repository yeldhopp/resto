
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here we'd normally send this to a backend
    console.log("Newsletter signup:", email);
    
    // Clear form and show success toast
    setEmail("");
    toast.success("Thank you for subscribing to our newsletter!");
  };

  return (
    <section className="py-16 bg-cocinaRed text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Culinary Journey</h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to our newsletter for exclusive recipes, special offers, and updates on new restaurants and products.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/20 border-white/20 placeholder:text-white/70 text-white"
            />
            <Button type="submit" className="bg-white text-cocinaRed hover:bg-white/90 whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm mt-4 opacity-70">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
