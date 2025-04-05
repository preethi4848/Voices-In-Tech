
export interface Article {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  readable_publish_date: string;
  url: string;
  user: {
    name: string;
    profile_image: string;
  };
  tag_list: string[];
  public_reactions_count: number;
}
