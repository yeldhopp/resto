import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const WhyKerala = () => {
  const advantages = [
    {
      id: 1,
      title: "Global Kerala Restaurant Network",
      description: "Access authentic Kerala restaurants worldwide - from Mumbai to Dubai, London to New York, connecting you to genuine Kerala flavors anywhere."
    },
    {
      id: 2,
      title: "Authentic Kerala Cuisine",
      description: "Every restaurant is carefully vetted to ensure traditional recipes, authentic ingredients, and genuine Kerala cooking methods are maintained."
    },
    {
      id: 3,
      title: "Traditional Spices & Ingredients",
      description: "Source authentic Kerala spices directly from spice gardens and coconut groves, ensuring the freshest and most aromatic ingredients."
    },
    {
      id: 4,
      title: "Supporting Kerala Heritage",
      description: "By choosing Kerala Restaurant, you're helping preserve traditional recipes and supporting Kerala restaurant owners worldwide."
    },
    {
      id: 5,
      title: "Specialized Kerala Focus",
      description: "Unlike generic food platforms, we specialize exclusively in Kerala cuisine, ensuring deep expertise and authentic experiences."
    },
    {
      id: 6,
      title: "Cultural Connection",
      description: "Connect with Kerala's rich culinary heritage through our curated content, traditional recipes, and cultural insights."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-keralaGreen">Why Choose Kerala Restaurant?</h1>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl mb-6">
              Kerala Restaurant offers the world's most comprehensive platform for authentic Kerala cuisine, connecting traditional restaurants and spice suppliers with food lovers globally.
            </p>
            
            <div 
              className="my-10 h-64 rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
          
          <h2 className="text-2xl font-bold mb-8 text-keralaGold">Our Unique Advantages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {advantages.map((advantage) => (
              <Card key={advantage.id} className="border-l-4 border-l-keralaGold card-hover">
                <CardContent className="flex gap-4 p-6">
                  <CheckCircle className="h-6 w-6 text-keralaGreen flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">The Kerala Restaurant Difference</h2>
            <p className="text-center mb-6">
              What sets us apart is our exclusive focus on Kerala cuisine and our deep understanding of its traditions. We're not just a food delivery platform – we're cultural ambassadors bringing the authentic taste of God's Own Country to the world.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://restaurants.naadanresto.com" 
                className="px-6 py-3 bg-keralaGreen text-white rounded-md hover:bg-keralaGreen/90 transition-colors"
              >
                Find Restaurants
              </a>
              <a 
                href="https://spices.naadanresto.com" 
                className="px-6 py-3 bg-keralaGold text-white rounded-md hover:bg-keralaGold/90 transition-colors"
              >
                Buy Kerala Spices
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WhyKerala;