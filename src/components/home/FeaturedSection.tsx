
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const restaurants = [
  {
    id: 1,
    name: "Spice Garden",
    cuisine: "North Indian",
    rating: 4.8,
    image: "/lovable-uploads/69dc4110-e9ff-4f46-bf00-f44a8da9dd3a.png",
    location: "Chapel Hill",
    popular: "Butter Chicken"
  },
  {
    id: 2,
    name: "South Thali",
    cuisine: "South Indian",
    rating: 4.7,
    image: "/lovable-uploads/4162f18d-6ea2-4687-abf2-4a99f248d0f4.png",
    location: "Raleigh",
    popular: "Masala Dosa"
  },
  {
    id: 3,
    name: "Bombay Street Food",
    cuisine: "Street Food",
    rating: 4.6,
    image: "/lovable-uploads/cbe59b8d-52d8-4749-99f3-15b12bb0b967.png",
    location: "Durham",
    popular: "Pav Bhaji"
  }
];

const groceries = [
  {
    id: 1,
    name: "Organic Basmati Rice",
    category: "Grains",
    rating: 4.9,
    image: "/lovable-uploads/8292a8fd-3ad6-4823-be1e-21f89392a3b8.png",
    weight: "10 lb",
    price: "$18.99"
  },
  {
    id: 2,
    name: "Masala Spice Set",
    category: "Spices",
    rating: 4.8,
    image: "/lovable-uploads/52a20f0a-5d94-40b7-91ea-5ab85d76a8df.png",
    weight: "12 oz",
    price: "$29.99"
  },
  {
    id: 3,
    name: "Homemade Ghee",
    category: "Dairy",
    rating: 4.7,
    image: "/lovable-uploads/a75ff3a4-0237-4398-a5bc-8df6713e0c1a.png",
    weight: "16 oz",
    price: "$12.99"
  }
];

const FeaturedSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Featured Selections</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Discover our most popular restaurants and grocery products
        </p>
        
        <Tabs defaultValue="restaurants" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
            <TabsTrigger value="groceries">Groceries</TabsTrigger>
          </TabsList>
          
          <TabsContent value="restaurants" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restaurants.map((restaurant) => (
                <Card key={restaurant.id} className="overflow-hidden card-hover">
                  <div className="relative h-48">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center shadow-md">
                      <Star className="h-4 w-4 text-cocinaYellow fill-cocinaYellow mr-1" />
                      <span className="font-medium">{restaurant.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{restaurant.name}</h3>
                      <Badge className="bg-cocinaOrange text-white">{restaurant.cuisine}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-1">{restaurant.location}</p>
                    <p className="mb-4">
                      <span className="font-medium">Popular:</span> {restaurant.popular}
                    </p>
                    <Button className="w-full bg-cocinaRed hover:bg-cocinaRed/90">
                      <a href="https://restaurants.cocinaindia.com" className="w-full">
                        Order Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="groceries" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groceries.map((grocery) => (
                <Card key={grocery.id} className="overflow-hidden card-hover">
                  <div className="relative h-48">
                    <img
                      src={grocery.image}
                      alt={grocery.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center shadow-md">
                      <Star className="h-4 w-4 text-cocinaYellow fill-cocinaYellow mr-1" />
                      <span className="font-medium">{grocery.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{grocery.name}</h3>
                      <Badge className="bg-cocinaGreen text-white">{grocery.category}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-1">{grocery.weight}</p>
                    <p className="mb-4 font-bold text-lg">{grocery.price}</p>
                    <Button className="w-full bg-cocinaOrange hover:bg-cocinaOrange/90">
                      <a href="https://groceries.cocinaindia.com" className="w-full">
                        Add to Cart
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedSection;
