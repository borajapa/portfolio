import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">João Henrique </span>
            and I'm from <span className="purple"> Brasília, Brazil.</span>
            <br /> I'm a student of a Computer Science, and I'm also a Lawyer.
            <br /> Today I'm a FullStack Developer at BB Seguridade.
            I started as a trainee at Coopersystem in the inovation area, and got hired to another client.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Just Do It"{" "}
          </p>
          <footer className="blockquote-footer">Nike</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
