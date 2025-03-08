
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
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    location: "Chapel Hill",
    popular: "Butter Chicken"
  },
  {
    id: 2,
    name: "South Thali",
    cuisine: "South Indian",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80",
    location: "Raleigh",
    popular: "Masala Dosa"
  },
  {
    id: 3,
    name: "Bombay Street Food",
    cuisine: "Street Food",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1625398407796-82280d47c547?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
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
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    weight: "10 lb",
    price: "$18.99"
  },
  {
    id: 2,
    name: "Masala Spice Set",
    category: "Spices",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1532336414046-cf8e0468821d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    weight: "12 oz",
    price: "$29.99"
  },
  {
    id: 3,
    name: "Ghee",
    category: "Dairy",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1629118159215-45bbb17a7a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
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
