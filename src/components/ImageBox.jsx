import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import cakeImg from '../gallery/cake.jpg'
import danImg from '../gallery/dan.jpg'
import buterImg from '../gallery/buter.jpg'
import kolacici from '../gallery/kolacici.jpg'

const itemData = [
    {
        img: cakeImg,
        title: 'Dinner',
    },
    {
        img: buterImg,
        title: 'Breakfast',
    },
    {
        img: danImg,
        title: 'Guest',
    },
    {
        img: kolacici,
        title: 'Cookies',
    },
];

const ImageBox = () => {
    return (
    <ImageList
      sx={{ width: 2000, height: 1800 }}
      variant="quilted"
      // variant="woven"
      cols={5}
      rowHeight={484}
      
    > 
    
    {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            style={{ borderRadius: 60 }}
            loading="lazy"
          />
        </ImageListItem>
      ))}

</ImageList>
    )
}

export default ImageBox