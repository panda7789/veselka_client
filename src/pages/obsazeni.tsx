import {
  Box,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Col, Card, Row, Accordion } from "react-bootstrap";

const data = [
  {
    title: "Zpěvy",
    names: ["Soňa Rifflerová", "Pavel Braun", "Markéta Tichá"],
    image: "/images/zpevy2.jpg",
  },
  {
    title: "Křídlovky",
    names: ["Pavel Braun", "Tomáš Braun", "Jiří Šimek", "Milan Novák"],
    image: "/images/kridlovky2.jpg",
    vertical: false
  },
  {
    title: "Baskřídlovky",
    names: ["Jaroslava Jašková", "Marian Laurin"],
    image: "/images/baskridlovky2.jpg",
  },
  {
    title: "Klarinety",
    names: ["Ladislav Mlčoch", "Eva Nejedlá", "Zdeněk Nejedlý"],
    image: "/images/klarinety.jpg",
  },
  { title: "Tuba", names: ["Radoslav Tichý"], image: '/images/tuba.jpg' },
  { title: "Bicí", names: ["František Nejedlý"], image: '/images/bici.jpg' },
  {
    title: "Doprovodná sekce",
    names: ["Lukáš Linhart", "Jaroslav Kvapil", "Pavel Kozák", "Stanislav Veselý"],
    image: '/images/doprovody.jpg'
  },
];

export default function Obsazeni() {
  return (
    <Grid container xs={12} ml={2} mr={2} pt={4}>
      {data.map((x, i) => {
        return (
          <CardCollapse
            title={x.title}
            names={x.names}
            image={x.image}
            index={i}
            vertical={x.vertical} />
        );
      })}
    </Grid>
  );
}

export interface Props {
  index: number;
  title: string;
  names: string[];
  image?: string;
  vertical?: boolean;
}
export function CardCollapse({ title, names, image, index, vertical = true }: Props) {
  const ImageReact = (
    <Grid item xs={6} textAlign='center' pl={vertical ? 0 : 6}>
      <img
        width={vertical ? "75%" : "100%"}
        src={`${image}`}
        srcSet={`${image}`}
        style={{ objectFit: "contain", maxWidth: (vertical ? '400px': undefined) }}
        alt={title}
        loading="lazy"
      />
    </Grid>
  );

  const TextReact = (
<Grid item xs={6} display='grid' justifyContent='center' alignItems='center'>
  <Box textAlign='center'>
    <Typography variant='h3' fontFamily={'Dancing Script'}>{title}</Typography>
    <Typography variant='body1'>{names.join(' | ')}</Typography>
  </Box>
</Grid>
  );
  if (index % 2 == 0) {
    return (<>{ TextReact } {ImageReact}</>);
  }
  return (<>{ ImageReact }{ TextReact }</>);
}
