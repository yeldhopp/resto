
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Magic of Kerala Spices",
    excerpt: "Explore the aromatic world of Kerala spices - from cardamom hills to black pepper vines, discover what makes Kerala the spice capital.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "November 15, 2024"
  },
  {
    id: 2,
    title: "Traditional Kerala Sadya",
    excerpt: "Learn about the elaborate vegetarian feast served on banana leaves - a culinary tradition that represents Kerala's rich heritage.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "October 28, 2024"
  },
  {
    id: 3,
    title: "Kerala's Coconut Culture",
    excerpt: "From coconut oil to coconut milk, discover how this versatile ingredient shapes Kerala cuisine and daily life.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "September 20, 2024"
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
                <Button variant="link" className="p-0 text-keralaGreen hover:text-keralaGreen/80 font-medium">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-keralaGold hover:bg-keralaGold/90 text-white">
            Explore All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
