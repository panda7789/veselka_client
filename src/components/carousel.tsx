import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

export interface CarouselItem {
  name?: string;
  description?: string;
  image: string;
  linkTo?: string;
}

export interface Props {
  items: CarouselItem[];
}

export function MyCarousel({ items }: Props) {
  return (
    <Carousel navButtonsAlwaysVisible>
      {items.map((item, i) => (
        <Card key={item.image} elevation={0} sx={{ position: 'relative' }}>
          <a href={item.linkTo ?? undefined} style={{ textDecoration: "none" }}>
            <CardActionArea style={{ height: "380px" }}>
              <CardMedia
                component="img"
                height="380px"
                image={item.image}
                style={{ objectFit: "contain" }}
                alt="green iguana"
              />
              {item.name && item.description && (
                <CardContent sx={{position: 'absolute', bottom: 0, padding: '8px', paddingLeft: '10%', width: '100%', backgroundColor: '#ffffffAA', color: 'black !important'}}>
                  <h1 style={{fontFamily: 'Dancing Script'}}>{item?.name}</h1>
                  <p style={{textOverflow: 'ellipsis'}}>{item?.description}</p>
                </CardContent>
              )}
            </CardActionArea>
          </a>
        </Card>
      ))}
    </Carousel>
  );
}
