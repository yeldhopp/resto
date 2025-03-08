
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const WhyCocina = () => {
  const advantages = [
    {
      id: 1,
      title: "All-in-One Platform",
      description: "Order from multiple restaurants and grocery stores in one place, saving time and simplifying the process."
    },
    {
      id: 2,
      title: "Authentic Indian Cuisine",
      description: "Carefully curated selection of restaurants and products that offer genuine flavors and traditional recipes."
    },
    {
      id: 3,
      title: "Convenient Delivery",
      description: "Reliable and timely delivery service ensuring your food arrives hot and your groceries fresh."
    },
    {
      id: 4,
      title: "Supporting Local Businesses",
      description: "By ordering through Cocina India, you're helping local Indian restaurants and grocery stores thrive."
    },
    {
      id: 5,
      title: "Exclusive Offers",
      description: "Access to special promotions, discounts, and loyalty rewards not available elsewhere."
    },
    {
      id: 6,
      title: "Culinary Education",
      description: "Resources to learn about Indian cooking techniques, spices, and regional cuisines through our blog and newsletters."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cocinaRed">Why Choose Cocina India?</h1>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl mb-6">
              Cocina India offers a unique and comprehensive experience for anyone looking to enjoy authentic Indian cuisine or source high-quality Indian groceries in North Carolina.
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
          
          <h2 className="text-2xl font-bold mb-8 text-cocinaOrange">Our Advantages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {advantages.map((advantage) => (
              <Card key={advantage.id} className="border-l-4 border-l-cocinaOrange card-hover">
                <CardContent className="flex gap-4 p-6">
                  <CheckCircle className="h-6 w-6 text-cocinaGreen flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">The Cocina India Difference</h2>
            <p className="text-center mb-6">
              What truly sets us apart is our deep understanding of and passion for Indian cuisine. We're not just a delivery service – we're a culinary companion dedicated to bringing the authentic flavors of India to your doorstep.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://restaurants.cocinaindia.com" 
                className="px-6 py-3 bg-cocinaRed text-white rounded-md hover:bg-cocinaRed/90 transition-colors"
              >
                Explore Restaurants
              </a>
              <a 
                href="https://groceries.cocinaindia.com" 
                className="px-6 py-3 bg-cocinaOrange text-white rounded-md hover:bg-cocinaOrange/90 transition-colors"
              >
                Shop Groceries
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WhyCocina;
