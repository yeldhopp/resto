
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here we'd normally send this to a backend
    console.log("Contact form submission:", formData);
    
    // Clear form and show success toast
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    toast.success("Thank you for your message! We'll respond shortly.");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cocinaRed text-center">Contact Us</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions, feedback, or business inquiries, our team is here to help.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="card-hover">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="bg-cocinaRed/10 p-4 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-cocinaRed" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-2">For general inquiries:</p>
                <a href="mailto:info@cocinaindia.com" className="text-cocinaRed hover:underline">
                  info@cocinaindia.com
                </a>
                <p className="text-muted-foreground mt-2 mb-2">For business partnerships:</p>
                <a href="mailto:partners@cocinaindia.com" className="text-cocinaRed hover:underline">
                  partners@cocinaindia.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="bg-cocinaOrange/10 p-4 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-cocinaOrange" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-2">Customer Support:</p>
                <a href="tel:+18887778639" className="text-cocinaOrange hover:underline">
                  (888) 777-8639
                </a>
                <p className="text-muted-foreground mt-2 mb-2">Hours of Operation:</p>
                <p>Online Support: 24/7</p>
                <p>Office Hours: Monday-Friday, 10am-5pm EST</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="bg-cocinaGreen/10 p-4 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-cocinaGreen" />
                </div>
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-muted-foreground mb-2">Corporate Office:</p>
                <address className="not-italic">
                  226 Woodrow St<br />
                  Reidsville, NC 27320
                </address>
                <p className="text-muted-foreground mt-2">
                  By appointment only
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your message regarding?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-cocinaRed hover:bg-cocinaRed/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <p className="mb-4">
              Follow us on social media for updates, promotions, and culinary inspiration.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-cocinaRed hover:text-cocinaRed/80">Facebook</a>
              <a href="#" className="text-cocinaOrange hover:text-cocinaOrange/80">Instagram</a>
              <a href="#" className="text-cocinaGreen hover:text-cocinaGreen/80">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
