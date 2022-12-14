import Head from 'next/head'
import Navbar from '../Components/Navbar/Navbar'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ProductCard from '../Components/ProductCard/ProductCard'
import useFetch from '../utilities/useFetch';
import FilterComponent from '../Components/FilterComponent/FilterComponent';
import ImageSlider from '../Components/ImageSlider/ImageSlider';

export default function Home() {
  const { data, error, loading } = useFetch("https://mern-ecomm-backend.onrender.com/api/v1/products")
  return (
    <>
      <Head>
        <title>Plastic Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <ImageSlider />
      <FilterComponent />
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid justifyContent="center"
          container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {data?.allProducts.map((product: any, index: number) => (
            <Grid xs={2} sm={4} md={2} key={index}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}
