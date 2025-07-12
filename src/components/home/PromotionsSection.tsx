import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getNearestCity } from "@/utils/geolocation";

const promotions = [
  {
    id: 1,
    title: "Onam Festival Special",
    description: "Celebrate Onam with 25% off on traditional Kerala sadya meals and festive orders!",
    badge: "Limited Time",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://restaurants.naadanresto.com",
    buttonText: "Order Sadya",
    color: "bg-keralaGreen"
  },
  {
    id: 2,
    title: "Kerala Spice Collection",
    description: "Get authentic Kerala spices delivered monthly - cardamom, pepper, and more from God's Own Country!",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://spices.naadanresto.com",
    buttonText: "Subscribe Now",
    color: "bg-keralaGold"
  },
  {
    id: 3,
    title: "Free Delivery in Delhi",
    description: "Free delivery on Kerala spices and ingredients across Delhi NCR with code KERALA2024",
    badge: "New Customers",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://spices.naadanresto.com",
    buttonText: "Shop Now",
    color: "bg-keralaSpice"
  }
];

const PromotionsSection = () => {
  const [nearestCity, setNearestCity] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const city = await getNearestCity();
        setNearestCity(`${city.name}`);
      } catch (error) {
        console.error("Error fetching location:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocation();
  }, []);

  return (
    <section className="py-16 spice-pattern-overlay">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">
          {!isLoading && nearestCity ? 
            `Special Offers Near ${nearestCity}` : 
            "Special Offers"}
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Discover authentic Kerala flavors with our exclusive offers and seasonal promotions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <Card key={promo.id} className="overflow-hidden card-hover border-none shadow-md">
              <div className="relative h-48">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover"
                />
                <Badge className={`absolute top-3 right-3 ${promo.color} text-white`}>
                  {promo.badge}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                <p className="text-muted-foreground mb-4">{promo.description}</p>
                <Button className={`w-full ${promo.color} text-white hover:${promo.color}/90`}>
                  <a href={promo.link} className="w-full">
                    {promo.buttonText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;