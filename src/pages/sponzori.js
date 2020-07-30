import React from "react";
import { Col, Image } from 'react-bootstrap';

export default function Sponzori() {
  return (
    <>
    <Col sm={12} lg={12}>
      <div className="content">
          <h1 className="display-4">Sponzoři kapely</h1>
          <p classname="lead">Zde jsou uvedeni všichni sponzoři, kteří nás podporují, ať už finančním darem, tak darem věcným. Všem moc děkujeme.</p>
          <Image src={"/sponzori.jpg"} fluid />
        </div> 
    </Col>
    </>
  );
}
