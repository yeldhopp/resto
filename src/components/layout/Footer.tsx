
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    
    // Here we'd normally send this to a backend
    console.log("Newsletter signup:", email);
    
    // Clear form and show success toast
    form.reset();
    toast.success("Thank you for subscribing to our newsletter!");
  };
  
  return (
    <footer className="bg-cocinaDarkBrown text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Cocina India</h3>
            <p className="text-gray-300 mb-4">
              North Carolina's premier gateway to authentic Indian cuisine and groceries.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/why-cocina" className="text-gray-300 hover:text-white transition-colors">Why Cocina India?</Link></li>
              <li><Link to="/culinary-culture" className="text-gray-300 hover:text-white transition-colors">Indian Culinary Culture</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="https://restaurants.cocinaindia.com" className="text-gray-300 hover:text-white transition-colors">Food Ordering</a></li>
              <li><a href="https://groceries.cocinaindia.com" className="text-gray-300 hover:text-white transition-colors">Grocery Delivery</a></li>
              <li><Link to="/culinary-culture" className="text-gray-300 hover:text-white transition-colors">Culinary Resources</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to receive updates, special offers, and culinary insights.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input 
                type="email" 
                name="email"
                placeholder="Your email address" 
                required 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button type="submit" className="w-full bg-cocinaOrange hover:bg-cocinaOrange/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Cocina India. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
