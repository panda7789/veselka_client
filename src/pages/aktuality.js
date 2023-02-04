import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { ArrowsAngleExpand, ArrowsAngleContract } from 'react-bootstrap-icons';
import htmlParse from 'html-react-parser';

var api_url = process.env.REACT_APP_API_URL;

export class Aktuality extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aktuality: []
        };
    }

    componentDidMount() {
        fetch(api_url + '/api/aktuality')
            .then(res => res.json())
            .then((data) => {
                this.setState({ aktuality: data.reverse() });
            })
            .catch(console.log)
    }

    render() {
        return (
            <>
                <Col sm={8}>
                    <div className="content">
                        <h3 className={"display-4"}>Aktuality</h3>
                        {
                            this.state.aktuality && this.state.aktuality.map(x => { return <Aktualita key={x.title} title={x.title} text={x.text} images={x.images} /> })
                        }
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="right">
                    <iframe
            title="facebook"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLo%25C5%25A1tick%25C3%25A1-Veselka-111782970262375%2Fline%2Cevents&width=340&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1606107826281502"
            id="facebook"
            style={{border:'none', overflow:'hidden', height: 'auto'}}
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media"
          ></iframe>
                    </div>
                </Col>
            </>
        )
    }
}

class Aktualita extends Component {
    render() {
        return (
            <Row>
                <Col sm={12} className={"article"}>
                    <div className="article-header">
                        <h3>{this.props.title}</h3>
                        <hr />
                    </div>
                    <div className="article-content">
                        <p>{htmlParse(this.props.text)}</p>
                    </div>
                    <div className="article-images">
                        <Images images={this.props.images} />
                    </div>
                </Col>
            </Row>
        )
    }
}

class Images extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            showMoreImagesButton: this.props.images.length > 3,
            expanded: false,
        }

        this.loadAllImages = this.loadAllImages.bind(this);
    }

    componentDidMount() {
        this.setState({ images: this.props.images.slice(0, 3) });
    }
    loadAllImages(){
        this.setState({
            expanded: !this.state.expanded,
            images: this.state.images.length > 3 ? this.props.images.slice(0, 3) : this.props.images
        });
        
    }
    render() {
        let images = this.state.images.map(img => {
            return (
                <a data-fancybox="gallery" href={img.url} key={img.url}>
                    <img loading="lazy" className={this.props.images.length > 1 ? "thumb" : "thumb-max mx-auto d-block"} src={img.urlThumbnail} alt={img.id} />
                </a>
            )
        });
        if (!images){
            return "";
        }
    images.push(this.state.showMoreImagesButton && <><br/><Button className={'expandGalleryButton'} onClick={this.loadAllImages} >{this.state.expanded ? (<>Méně obrázků <ArrowsAngleContract/></>)  : (<>Více obrázků <ArrowsAngleExpand/></>)}</Button></>);
        return images;
    }
}