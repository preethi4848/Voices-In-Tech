
import { Article } from "../types/article";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <a 
      href={article.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block h-full group"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        {article.cover_image && (
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={article.cover_image} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        
        <CardHeader className="pb-2">
          <h3 className="font-semibold line-clamp-2 group-hover:text-wecoded-blue transition-colors">
            {article.title}
          </h3>
        </CardHeader>
        
        <CardContent className="pb-2">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {article.description}
          </p>
        </CardContent>
        
        <CardFooter className="flex items-center gap-2 pt-0">
          <div className="flex items-center gap-2">
            <img 
              src={article.user.profile_image} 
              alt={article.user.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs text-muted-foreground">{article.user.name}</span>
          </div>
          <div className="flex-1"></div>
          <span className="text-xs text-muted-foreground">{article.readable_publish_date}</span>
        </CardFooter>
      </Card>
    </a>
  );
};

export default ArticleCard;
