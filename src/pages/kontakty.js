import React, { Component } from 'react';
import { Col, Card } from 'react-bootstrap';

export class Kontakty extends Component {
    render() {
        return (
            <>
            <Col sm={8}>
                <div className="content">
                <h3 class={"display-4"}>Kontakty</h3>
                <br></br>
                <h3>Loštická Veselka z.s.</h3>
                <br></br>
                <Card style={{maxWidth: "540px"}}>
                    <Card.Body>
                        <Card.Title>Markéta Tichá - manager</Card.Title>
                        <Card.Text>
                            Email: losticka.veselka@seznam.cz<br />
                            Mobil: 720 974 169
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                <Card style={{maxWidth: "540px"}}>
                    <Card.Body>
                        <Card.Title>Stanislav Veselý</Card.Title>
                        <Card.Text>
                            Loštice, Palackého 274<br />
                            789 83<br /><br />
                            Email: piskalek@volny.cz <br />
                            Telefon: 583 445 532 <br />
                            Mobil: 602 544 253
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            </Col>
            <Col sm={4}>
                <div className="right">
                    <iframe title="facebook" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLo%25C5%25A1tick%25C3%25A1-Veselka-111782970262375%2F&tabs=timeline%2Cevents&width=350&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1606107826281502" id="facebook" style={{border: 'none', overflow: 'hidden', scrolling: 'no', frameBorder: '0', allowTransparency: 'true', allow: 'encrypted-media'}}/>
                    <iframe title="mapy.cz" src="https://api.mapy.cz/frame?params=%7B%22x%22%3A16.92342947434821%2C%22y%22%3A49.769538865610365%2C%22base%22%3A%221%22%2C%22layers%22%3A%5B%5D%2C%22zoom%22%3A11%2C%22url%22%3A%22https%3A%2F%2Fen.mapy.cz%2Fs%2Fmonujozero%22%2C%22mark%22%3A%7B%22x%22%3A%2216.92892263841069%22%2C%22y%22%3A%2249.74469765746639%22%2C%22title%22%3A%22Lo%C5%A1tice%22%7D%2C%22overview%22%3Atrue%7D&amp;width=300&amp;height=270&amp;lang=en" id="mapka" style={{border: 'none'}} frameBorder="0"></iframe>
                </div>
            </Col>
            </>
        )
    }
}