import { Typography } from '@mui/material'
import React from 'react'

const Paragraph = ({ position, width, text, maxWidth, mx, textAlign }) => {
  return (
    <Typography
    sx={{
      // text = text,
      position: position,
      maxWidth: maxWidth,
      width: width,
      height: '440px',
      left: '80px',
      top: '1161px',
      mx: mx,
      textAlign: textAlign,
      py: 3,
      // color: '#7b7b7b',
      color: '#000000',
      fontSize:'46px',
      fontWeight: '400',

      fontFamily: 'Work Sans'
      // font-family: 'Work Sans'
    }}
    >
        {text}
    </Typography>
  )
}

export default Paragraph