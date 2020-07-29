import React, { Component } from 'react';
import { Card, Button, Col } from "react-bootstrap";

var api_url = process.env.REACT_APP_API_URL;

export class Fotogalerie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            offset: 0,
            limit: 9
        };
        this.getImages = this.getImages.bind(this);
        this.loadNext = this.loadNext.bind(this);
        this.loadImages = this.loadImages.bind(this);
    }

    componentDidMount() {
        var params = "";
        params += this.state.offset > 0 ? "?offset=" + this.state.offset + "&": "?";
        params += this.state.limit > 0 ? "limit=" + this.state.limit : "";
        fetch(api_url + '/api/images/for-gallery' + params)
            .then(res => res.json())
            .then((data) => {
                this.setState({ images: data });
            })
            .catch(console.log)
        this.setState({ offset: this.state.offset + this.state.limit });
    }

    getImages = (offset = null, limit = null, callback) => {
        var params = "";
        params += offset > 0 ? "?offset=" + offset + "&" : "?";
        params += limit > 0 ? "limit=" + limit : "";
        fetch(api_url + '/api/images' + params + "?justGallery")
            .then(res => res.json())
            .then((data) => {
                callback(data);
            })
            .catch(console.log)
    }

    loadImages() {
        this.getImages(this.state.offset, this.state.limit, res => {
            this.setState({ images: this.state.images.concat(res) });
        });
    }

    loadNext() {
        this.setState({ offset: this.state.offset + this.state.limit });
        this.loadImages();
    }

    render() {
        return (
            <Col sm={12}>
                <div className="content">
                    <h3 className={"display-4"}>Foto-galerie</h3>
                    <br></br>
                    {
                        this.state.images.map(imageURI =>
                            (
                                <Card bg='Primary' style={{ display: 'inline-block', width: '20rem' }}>
                                    <Card.Body>
                                        <a data-fancybox="gallery" href={imageURI.url} key={imageURI.url}>                
                                            <Card.Img variant="bottom" src={imageURI.urlThumbnail} />
                                        </a>
                                    </Card.Body>
                                </Card>
                            )
                        )
                    }
                    <Button variant="success" size="sm" onClick={this.loadNext} block>
                        Načíst další
                    </Button>
                </div>
            </Col>
        );
    }
}