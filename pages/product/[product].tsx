import { Button, ButtonGroup, CircularProgress, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import ImageSlider from '../../Components/ImageSlider/ImageSlider'
import useFetch from '../../utilities/useFetch'
import Navbar from '../../Components/Navbar/Navbar'
import { Box } from '@mui/system'
import FormatWithINR from '../../utilities/FormatWithINR'

const Product = () => {
    const router = useRouter()
    const { product } = router.query
    const { data, error, loading } = useFetch(`https://mern-ecomm-backend.onrender.com/api/v1/product/${product}`)

    console.log('router', product, data, loading, error)
    const formattedPrice = FormatWithINR(data?.product?.price)

    return (
        <>
            <Navbar />
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}>
                    <ImageSlider />
                </Grid>
                <Grid item xs={12} md={6}>
                    {loading ? <><CircularProgress /></> :
                        <>
                            <Box sx={{ padding: "5%" }}>
                                <Typography sx={{ padding: "1%" }} variant='h3'>{data?.product?.name}</Typography>
                                <Typography sx={{ color: "text.secondary", padding: "1%" }} variant='h4'>{data?.product?.description}</Typography>
                                <Typography sx={{ padding: "1%" }} variant='h5'>{formattedPrice}</Typography>
                                <Box>
                                    <ButtonGroup variant="outlined">
                                        <Button>+</Button>
                                        <Button>1</Button>
                                        <Button>-</Button>
                                    </ButtonGroup>
                                    <Button variant='contained'>Buy now</Button>
                                </Box>
                            </Box>
                        </>}
                </Grid>
            </Grid>
        </>
    )
}

export default Product
