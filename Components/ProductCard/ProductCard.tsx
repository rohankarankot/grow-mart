import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';
import FormatWithINR from '../../utilities/formatWithINR';
import { ImageWrapper, ProductContainer, ProductName, ProductPrice } from './ProductCardStyles';

export default function ProductCard({ name, price, images }: any) {
    const formattedPrice = FormatWithINR(price)
    return (
        <ProductContainer >
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