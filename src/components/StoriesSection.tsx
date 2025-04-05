
import { useQuery } from "@tanstack/react-query";
import { fetchWeCodedArticles, fetchSheCodedArticles } from "../services/api";
import ArticleCard from "./ArticleCard";
import { Button } from "./ui/button";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

const StoriesSection = () => {
  const [activeTab, setActiveTab] = useState<"wecoded" | "shecoded">("wecoded");
  
  const { data: weCodedArticles, isLoading: weCodedLoading } = useQuery({
    queryKey: ['wecoded-articles'],
    queryFn: fetchWeCodedArticles,
  });
  
  const { data: sheCodedArticles, isLoading: sheCodedLoading } = useQuery({
    queryKey: ['shecoded-articles'],
    queryFn: fetchSheCodedArticles,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const renderSkeletons = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-80 bg-slate-100 animate-pulse rounded-lg shadow-sm"></div>
      ))}
    </div>
  );

  return (
    <section id="stories" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            Featured Stories
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-wecoded-purple/30 rounded-full"></span>
          </h2>
          <p className="text-muted-foreground">
            Explore powerful stories from our community
          </p>
        </div>
        
        <Tabs defaultValue="wecoded" className="w-full" onValueChange={(value) => setActiveTab(value as "wecoded" | "shecoded")}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/50 backdrop-blur-sm">
              <TabsTrigger 
                value="wecoded"
                className="data-[state=active]:bg-white data-[state=active]:text-wecoded-blue data-[state=active]:shadow-sm"
              >
                WeCoded
              </TabsTrigger>
              <TabsTrigger 
                value="shecoded"
                className="data-[state=active]:bg-white data-[state=active]:text-wecoded-purple data-[state=active]:shadow-sm"
              >
                SheCoded
              </TabsTrigger>
            </TabsList>
          </div>
          
          <AnimatePresence mode="wait">
            <TabsContent value="wecoded" className="mt-0">
              {weCodedLoading ? renderSkeletons() : (
                <>
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {weCodedArticles?.slice(0, 6).map((article, idx) => (
                      <motion.div key={article.id} variants={cardVariants}>
                        <ArticleCard article={article} />
                      </motion.div>
                    ))}
                  </motion.div>
                  {(weCodedArticles?.length || 0) > 6 && (
                    <motion.div 
                      className="mt-10 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Button variant="outline" className="group">
                        <a 
                          href="https://dev.to/t/wecoded" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          View More WeCoded Stories
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                            <path d="M7 7h10v10" />
                            <path d="M7 17L17 7" />
                          </svg>
                        </a>
                      </Button>
                    </motion.div>
                  )}
                </>
              )}
            </TabsContent>
            
            <TabsContent value="shecoded" className="mt-0">
              {sheCodedLoading ? renderSkeletons() : (
                <>
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {sheCodedArticles?.slice(0, 6).map((article, idx) => (
                      <motion.div key={article.id} variants={cardVariants}>
                        <ArticleCard article={article} />
                      </motion.div>
                    ))}
                  </motion.div>
                  {(sheCodedArticles?.length || 0) > 6 && (
                    <motion.div 
                      className="mt-10 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Button variant="outline" className="group">
                        <a 
                          href="https://dev.to/t/shecoded" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          View More SheCoded Stories
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                            <path d="M7 7h10v10" />
                            <path d="M7 17L17 7" />
                          </svg>
                        </a>
                      </Button>
                    </motion.div>
                  )}
                </>
              )}
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};

export default StoriesSection;
