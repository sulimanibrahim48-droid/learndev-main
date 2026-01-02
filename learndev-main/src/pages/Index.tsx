import { Code2, Palette, Zap, Server, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import VideoCarousel from "@/components/VideoCarousel";
import ScrollReveal from "@/components/ScrollReveal";
import { carouselVideos } from "@/data/tutorials";

const categories = [
  {
    title: "HTML",
    description: "Structure of the web",
    icon: <Code2 className="w-6 h-6" />,
    link: "/html",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "CSS",
    description: "Styling & Design",
    icon: <Palette className="w-6 h-6" />,
    link: "/css",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "JavaScript",
    description: "Interactive functionality",
    icon: <Zap className="w-6 h-6" />,
    link: "/javascript",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Python",
    description: "Versatile programming",
    icon: <Server className="w-6 h-6" />,
    link: "/python",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Django",
    description: "Web framework",
    icon: <Server className="w-6 h-6" />,
    link: "/django",
    color: "from-emerald-500 to-green-600"
  },
  {
    title: "Azure",
    description: "Cloud Computing",
    icon: <Cloud className="w-6 h-6" />,
    link: "/az900",
    color: "from-blue-600 to-indigo-600"
  }
];

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section with Carousel */}
        <section id="hero" className="pt-8 pb-16 px-4">
          <div className="container mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-8">
                <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
                  Learn to Program <span className="text-gradient">with AI</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Master web development, cloud computing, and backend programming with curated video tutorials
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="scale" delay={200}>
              <VideoCarousel videos={carouselVideos} />
            </ScrollReveal>
          </div>
        </section>

        {/* Categories Grid */}
        <section id="topics" className="py-16 px-4">
          <div className="container mx-auto">
            <ScrollReveal animation="fade-up">
              <h2 className="font-display text-3xl font-bold text-center mb-12">
                Explore <span className="text-gradient">Topics</span>
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <ScrollReveal
                  key={category.title}
                  animation={index % 2 === 0 ? "fade-left" : "fade-right"}
                  delay={index * 100}
                >
                  <Link to={category.link} className="group block">
                    <div className="relative p-6 rounded-2xl bg-card border border-border/50 overflow-hidden card-hover h-full">
                      {/* Gradient Background */}
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${category.color}`}
                      />
                      <div className="relative z-10">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                        >
                          {category.icon}
                        </div>
                        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-border/50">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal animation="fade-up">
              <p className="text-muted-foreground">
                © 2024 DevLearn. All tutorials sourced from YouTube creators.
              </p>
            </ScrollReveal>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Index;
