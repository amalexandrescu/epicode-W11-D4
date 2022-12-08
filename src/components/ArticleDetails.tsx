import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

interface ArticleObject {
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

const ArticleDetails = () => {
  const params = useParams();
  const idFromParams = params.id;

  const [singleArticle, SetSingleArticle] = useState<null | ArticleObject>(
    null
  );

  const fetchSingleArticle = async () => {
    try {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${idFromParams}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("single article", data);
        SetSingleArticle(data);
      } else {
        console.log("Sorry, an error occured while fetching the data.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleArticle();
  }, []);

  return (
    <div className="d-flex details-container">
      <div className="col-xs-12 col-md-6 my-auto">
        <img
          id="imageDetailsPage"
          src={singleArticle?.imageUrl}
          alt="article"
        />
      </div>
      <div className="col-xs-12 col-md-6 my-auto">
        <ListGroup className="text-left">
          <ListGroup.Item>
            <div className="font-weight-bold">Title: </div>
            {singleArticle?.title}{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="font-weight-bold">Summary: </div>
            {singleArticle?.summary}{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="font-weight-bold">ID:</div>
            {singleArticle?.id}
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="font-weight-bold">News site:</div>{" "}
            {singleArticle?.newsSite}
          </ListGroup.Item>
          {singleArticle?.publishedAt && (
            <ListGroup.Item>
              <div className="font-weight-bold">Published at:</div>
              {new Date(singleArticle?.publishedAt).toDateString()}
            </ListGroup.Item>
          )}
          <ListGroup.Item>
            <div className="font-weight-bold">Url: </div>
            {singleArticle?.url}
          </ListGroup.Item>
          {singleArticle?.updatedAt && (
            <ListGroup.Item>
              <div className="font-weight-bold">Updated at: </div>
              {new Date(singleArticle?.updatedAt).toDateString()}
            </ListGroup.Item>
          )}
        </ListGroup>
      </div>
    </div>
  );
};

export default ArticleDetails;
