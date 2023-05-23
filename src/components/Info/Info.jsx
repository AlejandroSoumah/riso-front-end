import React from "react"
import { serviceData } from "../../utils/products"
import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";
const AboutUs = () => {
  return (
    <section  className='box' >
    <Container>
    <Row>
    <div>
    <h2 style= {{ marginBottom: '20px' }}><strong>What is RISO?</strong></h2>
      <p style={{ fontSize: '18px' }}>Riso is a decentralized, blockchain-based commodities exchange platform that aims to address the lack of transparency and trust in traditional commodity trading while also lowering the barriers to entry for producers and consumers to enter the market. Unlike traditional commodity exchanges, Riso provides complete transparency by storing its entire market history on a public blockchain, enabling clients to trust only the mathematics which govern its functions. It removes trading minimums, allowing for more complex market interactions, forming economic sub-groups that distinguish themselves from macro trends. Riso also provides an open-ended financial model for contracts that can be tuned to the producer’s financial needs instead of restricting them to futures and options. Riso further reduces transaction costs and enhances trust in the market by eliminating intermediaries and enabling buyers and sellers to transact directly, with the paper trail to take legal action in case of problems. Riso provides an ecosystem where businesses around the world can cooperate and drive forward a more efficient global economy.</p>
    </div>
    </Row>
    </Container>
    </section>
  );
};

export default AboutUs;