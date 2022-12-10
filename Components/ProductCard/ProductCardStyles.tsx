import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";

export const ProductContainer = styled(Card)(({ }) => ({
    maxWidth: 400, minHeight: "240px", cursor: "pointer"
}))

export const ProductName = styled(Box)(({ }) => ({
    padding: " 0px 10px", minHeight: "60px", display: "flex", alignItems: "center"
}))

export const ProductPrice = styled(Box)(({ }) => ({
    display: "flex", justifyContent: "center", padding: 2
}))

export const ImageWrapper = styled('img')(({ theme }) => ({
    maxHeight: "400px", objectFit: "scale-down"
}))