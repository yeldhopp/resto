
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cocinaRed">About Cocina India</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-muted p-8 rounded-lg mb-8">
              <p className="text-xl italic text-center">
                "Connecting North Carolina to the authentic flavors and culinary traditions of India."
              </p>
            </div>
            
            <p className="mb-6">
              Founded in 2023, Cocina India is a North Carolina corporation dedicated to bringing the rich and diverse culinary heritage of India to food enthusiasts across the state. Our platform serves as a gateway to authentic Indian cuisine, connecting customers with top-rated restaurants and premium grocery products.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-cocinaOrange">Our Mission</h2>
            <Separator className="mb-6 bg-cocinaOrange/30" />
            <p className="mb-6">
              At Cocina India, our mission is to create a seamless connection between customers and authentic Indian culinary experiences. We strive to make ordering delicious Indian food and sourcing high-quality Indian groceries more accessible, convenient, and enjoyable for everyone.
            </p>
            
            <div 
              className="my-10 h-64 rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1615868167509-210f5459683d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-cocinaOrange">Our Values</h2>
            <Separator className="mb-6 bg-cocinaOrange/30" />
            <ul className="space-y-4 mb-6">
              <li>
                <strong>Authenticity:</strong> We are committed to promoting genuine Indian flavors and traditional cooking methods. We carefully select restaurants and products that showcase the diverse regional cuisines of India.
              </li>
              <li>
                <strong>Quality:</strong> We maintain stringent quality standards for all restaurants and products on our platform, ensuring that customers receive the finest Indian culinary experiences.
              </li>
              <li>
                <strong>Community:</strong> We actively support local Indian restaurants and grocery stores, helping them reach a wider audience while preserving their cultural heritage.
              </li>
              <li>
                <strong>Innovation:</strong> We constantly seek innovative ways to enhance the customer experience, making it easier and more enjoyable to explore Indian cuisine.
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-cocinaOrange">Our Story</h2>
            <Separator className="mb-6 bg-cocinaOrange/30" />
            <p className="mb-6">
              Cocina India was born from a passion for Indian cuisine and a desire to make it more accessible to food lovers across North Carolina. Our founders, having experienced the rich diversity of Indian food, recognized the need for a platform that could bridge the gap between authentic Indian culinary experiences and local communities.
            </p>
            <p className="mb-6">
              Since our inception in 2023, we have been working tirelessly to build relationships with the best Indian restaurants and grocery suppliers in North Carolina. Our platform has evolved into a comprehensive culinary hub that not only facilitates food and grocery ordering but also educates and inspires through our blog content.
            </p>
            <p className="mb-6">
              Today, Cocina India stands as a testament to our commitment to celebrating and sharing the vibrant flavors and traditions of Indian cuisine with everyone in North Carolina.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
