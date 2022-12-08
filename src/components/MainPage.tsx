import { useEffect, useState } from "react";
import {
  FetchedArticle,
  necessaryDataArticlesForDisplaying,
} from "../interfaces";
import Article from "./Article";

import { Row } from "react-bootstrap";

const MainPage = () => {
  // const [fetchedArticles, SetFetchedArticles] = useState<FetchedArticle[]>([]);
  const [fetchedArticles, SetFetchedArticles] = useState<
    necessaryDataArticlesForDisplaying[]
  >([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        SetFetchedArticles(data);
      } else {
        console.log("An error occured while fetching the data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      {fetchedArticles.map((article) => {
        return <Article key={article.id} article={article} />;
      })}
    </>
  );
};

export default MainPage;
