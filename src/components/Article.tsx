import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { necessaryDataArticlesForDisplaying } from "../interfaces";

interface ArticleProps {
  article: necessaryDataArticlesForDisplaying;
}

const Article = ({ article }: ArticleProps) => {
  const navigate = useNavigate();

  return (
    <div className="col-xs-12 col-md-6 col-lg-3 mb-3">
      {article !== null && (
        <Card>
          <Card.Img variant="top" src={article.imageUrl} />
          <Card.Body className="bg-dark text-light">
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.summary}</Card.Text>
            <Button
              variant="info"
              onClick={() => {
                navigate(`/details/${article.id}`);
              }}
            >
              More Details
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Article;
