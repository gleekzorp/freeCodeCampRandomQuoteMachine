import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { ColorContext } from "../contexts/ColorContext";

import { listOfQuotes } from "../data/quotes";
import { randomQuote } from "../helpers/randomizer";

import QuoteCard from "./QuoteCard";

const QuoteContainer = () => {
  const { setRandomHex } = useContext(ColorContext);
  const [quote, setQuote] = useState({});
  useEffect(() => {
    setQuote(randomQuote(listOfQuotes));
  }, []);

  const setNewQuote = () => {
    setQuote(randomQuote(listOfQuotes));
    setRandomHex();
  };
  return (
    <Container className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
      <Row>
        <Col>
          <QuoteCard quote={quote} setNewQuote={setNewQuote} />
        </Col>
      </Row>
      <Row>
        <a
          className="created-by-link mt-4"
          href="https://github.com/gleekzorp"
          target="_blank"
          rel="noreferrer"
        >
          By Gleek
        </a>
      </Row>
    </Container>
  );
  // return (
  //   <Container className="h-100 w-100">
  //     <Row className="h-100 justify-content-center align-items-center">
  //       <Col xl={6} lg={6}>
  //         <QuoteCard quote={quote} setNewQuote={setNewQuote} />
  //       </Col>
  //     </Row>
  //   </Container>
  // );
};

export default QuoteContainer;
