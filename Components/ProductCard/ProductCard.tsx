import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';
import { ImageWrapper, ProductContainer, ProductName, ProductPrice } from './ProductCardStyles';
import FormatWithINR from '../../utilities/FormatWithINR';
import { useRouter } from 'next/router';

export default function ProductCard({ _id, name, price, images }: any) {
    const formattedPrice = FormatWithINR(price)
    const router = useRouter()

    return (
        <ProductContainer onClick={() => router.push(`/Product/${_id}`)} >
            <ImageWrapper src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdm6f8_7LODQAhjhmFZ9CBgl3pegBsI9gFYQ&usqp=CAU" alt="" />
            <Divider />
            <ProductName>
                <Typography >
                    {name}
                </Typography>
            </ProductName>
            <Divider />
            <ProductPrice>
                {formattedPrice}
            </ProductPrice>
        </ProductContainer>
    );
}