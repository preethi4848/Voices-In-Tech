
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsletterSection from "@/components/NewsletterSection";
import ResourcesSection from "@/components/ResourcesSection";
import StoriesSection from "@/components/StoriesSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <StoriesSection />
        <ResourcesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
