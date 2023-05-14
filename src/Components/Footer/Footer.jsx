import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white mt-4 pt-4 bg-secondary">
      <Container>
        <Row>
          <Col md={6}>
            <h5>ShowBIZZ</h5>
            <p>
              Experience the Magic of Entertainment - Book Your Tickets with
              ShowBizz.
            </p>
          </Col>
          <Col md={3}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
              <li>
                <a href="#!">Send us Feedback</a>
              </li>
              <li>
                <a href="#!">Help</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Socials</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.instagram.com/_pushkar_28/">
                  <FaInstagram size={20} color="white" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/pushkar-khare-664839220/">
                  <FaLinkedinIn size={20} color="white" />
                </a>
              </li>
              <li>
                <a href="https://github.com/pushkar-2804">
                  <FaGithub size={20} color="white" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} ShowBIZZ. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
