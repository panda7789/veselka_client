import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Col, Nav } from 'react-bootstrap';


export default function Menu() {
    return (
        <Col style={{ padding_tom: "5px" }}>
            <Nav variant="tabs">
                <LinkContainer to="/pages/index">
                    <Nav.Item as={Nav.Link}>
                        Domů
                    </Nav.Item>
                </LinkContainer>
                <LinkContainer to="/pages/aktuality">
                    <Nav.Item as={Nav.Link}>
                        Aktuality
                    </Nav.Item>
                </LinkContainer>
                <LinkContainer to="/pages/akce">
                    <Nav.Item as={Nav.Link}>
                        Plánované akce
                    </Nav.Item>
                </LinkContainer>
                <LinkContainer to="/pages/obsazeni">
                    <Nav.Item as={Nav.Link}>
                        Obsazení
                    </Nav.Item>
                </LinkContainer>
                <LinkContainer to="/pages/fotogalerie">
                    <Nav.Item as={Nav.Link}>
                        Fotogalerie
                    </Nav.Item>
                </LinkContainer>
                <LinkContainer to="/pages/kontakty">
                    <Nav.Item as={Nav.Link}>
                        Kontakty
                    </Nav.Item>
                </LinkContainer>
            </Nav>
        </Col >
    );
}