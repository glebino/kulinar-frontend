import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
// import headerImg from '../assets/yasha.jpg'

const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '30vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(20),
        // cor de fundo
        backgroundColor: '#E0FF9E',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText 
            component='section'
            >
                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    // position: 'absolute',
                    fontWeight: 700,
                    // color: '#fff',
                    color: '#000000',
                    height: 1,
                    width: 554,
                    display: 'flex',
                    justifyContent: 'space-between',
                    whiteSpace: 'nowrap',
                }}
                >
                <span style={{ marginRight: '10px', zIndex: 2 }}>ЗВАНЫЙ УЖИН</span>
                <span style={{ marginRight: '1000px', zIndex: 1 }}> У ЯШКИ</span>
                </Typography>
                
                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#fff',
                }}
                >
                    {/* Когда твой ужин на респекте */}
                </Typography>

                <Box>
                    <Button 
                    component={Link} 
                    to={'/about'}
                    variant='contained'
                    sx={{
                        ml: 117,
                        px: 20, 
                        py: 4,
                        fontSize: '2.0rem',
                        whiteSpace: 'nowrap',
                        "&&:first-letter": {
                            textTransform: 'uppercase', // Capitalize the first letter of the first word
                        },
                        // textTransform: 'capitalize',
                        // textTransform: 'lowercase',
                        textTransform: 'none',
                        borderRadius: 5,
                        borderColor: '#FF71D7',
                        color: '#fff',
                        backgroundColor: '#FD8DDC',
                        "&&:hover": {
                            backgroundColor: "#C0D731"
                        },
                        "&&:focus": {
                            backgroundColor: "#398EF5"
                        },
                    }}
                    >
                        Хочу на ужин
                    </Button>
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                {/* <img
                src={headerImg}
                alt="headerImg"
                style={{ 
                    width: "100%", 
                    marginBottom: -15,
                }}
                /> */}
            </Box>

        </CustomBox>
    )
}

export default Header