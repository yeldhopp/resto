
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Indian Spices",
    excerpt: "Discover the essential spices that form the foundation of Indian cuisine and how to use them in your cooking.",
    image: "/lovable-uploads/4342408a-5b87-43a1-85f2-3f25e9c16c74.png",
    date: "August 12, 2023"
  },
  {
    id: 2,
    title: "Regional Cuisines of India",
    excerpt: "From the creamy curries of Punjab to the coconut-infused dishes of Kerala, explore India's diverse regional cuisines.",
    image: "/lovable-uploads/f1f2a376-8f48-4616-8eb2-e13406ec614b.png",
    date: "July 28, 2023"
  },
  {
    id: 3,
    title: "The Health Benefits of Turmeric",
    excerpt: "This golden spice has been used in Ayurvedic medicine for thousands of years. Learn about its powerful health benefits.",
    image: "/lovable-uploads/451a4da1-e1ee-4b8d-b427-41e32c9ccb7b.png",
    date: "June 15, 2023"
  }
];

const BlogSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Culinary Insights</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Explore our blog for recipes, cooking tips, and stories about Indian culinary traditions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden card-hover">
              <div className="h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <Button variant="link" className="p-0 text-cocinaRed hover:text-cocinaRed/80 font-medium">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-cocinaOrange hover:bg-cocinaOrange/90 text-white">
            Explore All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
