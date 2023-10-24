import React from "react";
import { Avatar } from "@mui/material";
import yashaImg from '../assets/yasha.png'

// const Circle = () => ({ position, width, height, left, top, borderRadius}) => {
const Circle = () => {
  return (
    <Avatar
    sx={{
        position: "absolute",
        width: 296,
        height: 296,
        left: 572,
        top: 40,
        borderRadius: '50%',
    }}
    >
      <img src={yashaImg} alt={yashaImg} />
    </Avatar>
    )
}

export default Circle