import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-keralaGreen">About Kerala Restaurant</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-muted p-8 rounded-lg mb-8">
              <p className="text-xl italic text-center">
                "Connecting Kerala restaurants worldwide to bring the authentic taste of God's Own Country to every corner of the globe."
              </p>
            </div>
            
            <p className="mb-6">
              Founded in 2024, Kerala Restaurant (naadanresto.com) is a pioneering platform dedicated to connecting Kerala restaurants outside Kerala state with food enthusiasts worldwide. Our mission is to preserve and promote the rich culinary heritage of Kerala while making authentic Kerala cuisine accessible to the global diaspora and food lovers everywhere.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-keralaGold">Our Mission</h2>
            <Separator className="mb-6 bg-keralaGold/30" />
            <p className="mb-6">
              At Kerala Restaurant, our mission is to create a global network of authentic Kerala restaurants and spice suppliers. We strive to preserve traditional recipes, support Kerala restaurant owners worldwide, and make the distinctive flavors of Kerala cuisine accessible to everyone, whether they're in Mumbai, Dubai, London, or New York.
            </p>
            
            <div 
              className="my-10 h-64 rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-keralaGold">Our Values</h2>
            <Separator className="mb-6 bg-keralaGold/30" />
            <ul className="space-y-4 mb-6">
              <li>
                <strong>Authenticity:</strong> We are committed to preserving the genuine flavors and traditional cooking methods of Kerala. Every restaurant and spice supplier on our platform is carefully vetted to ensure they maintain authentic Kerala culinary standards.
              </li>
              <li>
                <strong>Heritage:</strong> We celebrate and preserve the rich culinary heritage of Kerala, from traditional sadya meals to coastal seafood specialties, ensuring these traditions continue for future generations.
              </li>
              <li>
                <strong>Community:</strong> We actively support Kerala restaurant owners and spice suppliers worldwide, helping them reach customers who appreciate authentic Kerala cuisine while building a global Kerala food community.
              </li>
              <li>
                <strong>Quality:</strong> We maintain the highest standards for all restaurants and products on our platform, ensuring customers receive the finest Kerala culinary experiences wherever they are.
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-keralaGold">Our Story</h2>
            <Separator className="mb-6 bg-keralaGold/30" />
            <p className="mb-6">
              Kerala Restaurant was born from the recognition that Kerala's unique culinary traditions needed a dedicated platform to reach the global community. With millions of Keralites living outside their home state and countless food enthusiasts worldwide eager to experience authentic Kerala flavors, we saw the need for a specialized network.
            </p>
            <p className="mb-6">
              Our platform connects traditional Kerala restaurants in major cities across India and internationally, from the bustling streets of Mumbai and Bangalore to the multicultural neighborhoods of Dubai, London, and beyond. We also partner with authentic spice suppliers who source directly from Kerala's spice gardens and coconut groves.
            </p>
            <p className="mb-6">
              Today, Kerala Restaurant stands as the premier destination for authentic Kerala cuisine worldwide, supporting restaurant owners, delighting customers, and preserving the culinary legacy of God's Own Country for generations to come.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-keralaGold">What Makes Kerala Cuisine Special</h2>
            <Separator className="mb-6 bg-keralaGold/30" />
            <p className="mb-6">
              Kerala cuisine is distinguished by its generous use of coconut, aromatic spices, and fresh seafood. From the elaborate vegetarian sadya served on banana leaves to the fiery fish curries of the coast, Kerala food represents a perfect balance of flavors, nutrition, and tradition.
            </p>
            <p>
              Our platform celebrates this diversity, featuring everything from traditional breakfast items like appam and puttu to festive specialties like payasam and elaborate non-vegetarian dishes that showcase Kerala's coastal and backwater influences.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;