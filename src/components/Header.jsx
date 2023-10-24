import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
// import headerImg from '../assets/yasha.jpg'

const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '80vh',
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
                {/* <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    // position: 'absolute',
                    fontWeight: 700,
                    // color: '#fff',
                    color: '#000000',
                    width: 554
                }}
                >
                    ЗВАНЫЙ УЖИН 
                </Typography> */}

                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    // position: 'absolute',
                    fontWeight: 700,
                    // color: '#fff',
                    color: '#000000',
                    width: 554,
                    display: 'flex',
                    justifyContent: 'space-between',
                    whiteSpace: 'nowrap',
                }}
                >
                <span style={{ marginRight: '400px' }}>ЗВАНЫЙ УЖИН</span>
                <span style={{ marginLeft: '400px' }}> У ЯШКИ</span>
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
                    Когда твой ужин на респекте
                </Typography>

                <Box>
                    <Button 
                    component={Link} 
                    to={'/about'}
                    variant='contained'
                    sx={{
                        mr: 2,
                        px: 4, 
                        py: 1,
                        fontSize: '0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 5,
                        borderColor: '#FF71D7',
                        color: '#fff',
                        backgroundColor: '#FD8DDC',
                        "&&:hover": {
                            backgroundColor: "#C0D731"
                        },
                        "&&:focus": {
                            backgroundColor: "#398EF5"
                        }
                    }}
                    >
                        купуем
                    </Button>
                    {/* <Button 
                    component={Link} 
                    to={'/about'}
                    variant='outlined'
                    sx={{
                        px: 4, 
                        py: 1,
                        fontSize:'0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        color: '#fff',
                        backgroundColor: 'transparent',
                        borderColor: '#fff',
                        "&&:hover": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        },
                        "&&:focus": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        }
                    }}
                    >
                        за всю эту хурму
                    </Button> */}
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