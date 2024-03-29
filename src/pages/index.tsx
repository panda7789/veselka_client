import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import { CarouselItem, MyCarousel } from "components/carousel";

var api_url = process.env.REACT_APP_API_URL;

async function getRandomImageUrl():Promise<string> {
  const response = await fetch(api_url + '/api/images/random');
  return (await response.json()).url;    
}


export default function Index() {
  const [firstCorouselItem, setFirstCorouselItem] = useState<any>(null);
  const [corouselItems, setCorouselItems] = useState<CarouselItem[] | undefined>();
  useEffect(() => {
    fetch(api_url + '/api/aktuality/latest')
      .then(res => res.json())
      .then(async (firstCorouselItem) => {
        setCorouselItems([{
          name: firstCorouselItem?.title,
          description: firstCorouselItem?.text.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, ''),
          image: firstCorouselItem?.images?.length ? firstCorouselItem?.images[0].url : undefined,
          linkTo: '/pages/aktuality'
        },
        {
          image: await getRandomImageUrl()
        },
        {
          image: await getRandomImageUrl()
        },
        {
          image: await getRandomImageUrl()
        },
        {
          image: await getRandomImageUrl()
        }]);
      })
      .catch(console.log)
  }, []);

  return (
    <>
      <Col sm={8} lg={8}>
        <div className="content">
          {corouselItems && (
            <MyCarousel items={corouselItems} />
          )}
          <h1 className="display-4">O kapele</h1>
          <p>
            Loštická Veselka hraje k tanci i k poslechu při různorodých
            příležitostech jako např. festivaly dechových hudeb, výročí
            hasičských sborů, obcí, hudební a taneční odpoledne pro příznivce
            dechové hudby, Vánoční a jiné koncerty.
          </p>
          <p>
            Každoročně je tato dechová kapela pořadatelem festivalu dechových
            hudeb v Lošticích s názvem Pod Loštickým nebem,který se koná v druhé
            polovině měsíce června. Pro tento festival je také typický
            tvarůžkový stánek s těmi nejvoňavějšími pochutinami, připravených z
            místního tradičního sýra, tvarůžků.
          </p>
          <p>
            Na podzim kapela každý rok hostí nové autory při příležitosti
            Autorského koncertu. Tento koncert je věnován vždy dvěma autorům,
            jejichž skladeb se ujme domácí kapela Loštická Veselka a hostující
            kapela, vybraná pro daný ročník. Každá tato kapela divákům představí
            několik skladeb z autorovy dílny a moderátoři seznámí publikum s
            jeho životem.
          </p>
          <p>
            Loštická Veselka má za sebou již 14. ročník a za tu dobu na svém
            domácím jevišti přivítala již desítky autorů. Mezi nimi například
            Jiří Helán, Jiří Tesařík, Josef Žid, Jan Slabák, Milan Baginský,
            Josef Vejvoda, Miloslav Procházka, Miloň Čepelka a další.
          </p>
          <p>
            Tradicí se taktéž stalo takzvané přátelské koledování. Při těchto
            vánočních pochůzkách kapela navštěvuje své příznivce a bývalé členy,
            kterým za zvuku koled zpříjemňuje Vánoční čas.
          </p>
          <a
            data-fancybox="gallery"
            href="https://losticka-veselka.s3.eu-central-1.amazonaws.com/1.jpg"
          >
            <img
              className="thumb"
              src="https://losticka-veselka.s3.eu-central-1.amazonaws.com/1_tn.jpg"
              alt="veselka"
            />
          </a>
          <a
            data-fancybox="gallery"
            href="https://losticka-veselka.s3.eu-central-1.amazonaws.com/2.jpg"
          >
            <img
              className="thumb"
              src="https://losticka-veselka.s3.eu-central-1.amazonaws.com/2_tn.jpg"
              alt="veselka"
            />
          </a>
          <a
            data-fancybox="gallery"
            href="https://losticka-veselka.s3.eu-central-1.amazonaws.com/3.jpg"
          >
            <img
              className="thumb"
              src="https://losticka-veselka.s3.eu-central-1.amazonaws.com/3_tn.jpg"
              alt="veselka"
            />
          </a>
          <a
            data-fancybox="gallery"
            href="https://losticka-veselka.s3.eu-central-1.amazonaws.com/4.jpg"
          >
            <img
              className="thumb"
              src="https://losticka-veselka.s3.eu-central-1.amazonaws.com/4_tn.jpg"
              alt="veselka"
            />
          </a>
          <a
            data-fancybox="gallery"
            href="https://losticka-veselka.s3.eu-central-1.amazonaws.com/5.jpg"
          >
            <img
              className="thumb"
              src="https://losticka-veselka.s3.eu-central-1.amazonaws.com/5_tn.jpg"
              alt="veselka"
            />
          </a>
          <a
            data-fancybox="gallery"
            href="https://losticka-veselka.s3.eu-central-1.amazonaws.com/6.jpg"
          >
            <img
              className="thumb"
              src="https://losticka-veselka.s3.eu-central-1.amazonaws.com/6_tn.jpg"
              alt="veselka"
            />
          </a>
        </div>
      </Col>
      <Col sm={8} lg={4}>
        <div className="right">
          <iframe
            title="facebook"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLo%25C5%25A1tick%25C3%25A1-Veselka-111782970262375%2Fline%2Cevents&width=340&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1606107826281502"
            id="facebook"
            style={{ border: "none", overflow: "hidden", height: "auto" }}
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media"
          ></iframe>
          <iframe
            title="mapy.cz"
            src="https://api.mapy.cz/frame?params=%7B%22x%22%3A16.92342947434821%2C%22y%22%3A49.769538865610365%2C%22base%22%3A%221%22%2C%22layers%22%3A%5B%5D%2C%22zoom%22%3A11%2C%22url%22%3A%22https%3A%2F%2Fen.mapy.cz%2Fs%2Fmonujozero%22%2C%22mark%22%3A%7B%22x%22%3A%2216.92892263841069%22%2C%22y%22%3A%2249.74469765746639%22%2C%22title%22%3A%22Lo%C5%A1tice%22%7D%2C%22overview%22%3Atrue%7D&amp;width=300&amp;height=270&amp;lang=en"
            id="mapka"
            style={{ border: "none" }}
            frameBorder="0"
          ></iframe>
        </div>
      </Col>
    </>
  );
}
