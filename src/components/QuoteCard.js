import React, { useContext } from "react";

import { Row, Col, Button, Card } from "react-bootstrap";

import { Twitter, Linkedin } from "react-bootstrap-icons";
import { ColorContext } from "../contexts/ColorContext";

const QuoteCard = (props) => {
  const { color } = useContext(ColorContext);
  return (
    <Card id="quote-box">
      <Card.Body>
        <Card.Text id="text" className="text-center">
          " {props.quote.text}
        </Card.Text>
        <Card.Text id="author" className="text-right">
          - {props.quote.author}
        </Card.Text>
        <Row className="align-items-center">
          <Col>
            <a
              className="btn"
              id="tweet-quote"
              style={{ backgroundColor: color }}
              href="twitter.com/intent/tweet"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="icon" />
            </a>
            <a
              className="btn ml-2"
              style={{ backgroundColor: color }}
              href="https://www.linkedin.com/in/daniel-floyd-ut/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="icon" />
            </a>
          </Col>
          <Col className="text-right">
            <Button
              id="new-quote"
              style={{ backgroundColor: color }}
              onClick={props.setNewQuote}
            >
              New Quote
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default QuoteCard;
