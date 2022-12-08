export interface FetchedArticle {
  events: any[];
  featured: boolean;
  id: number;
  imageUrl: string;
  launches: any[];
  newsSite: string;
  publishedAt: Date;
  summary: string;
  title: string;
  updatedAt: Date;
  url: string;
}

export interface necessaryDataArticlesForDisplaying {
  id: number;
  imageUrl: string;
  summary: string;
  title: string;
}
