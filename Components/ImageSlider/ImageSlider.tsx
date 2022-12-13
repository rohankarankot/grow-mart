import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import data from "../../JSON/SliderImageData.json"
const SliderImages = data?.data;
export default function ImageSlider() {
    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <ArrowForwardIosIcon className={className}
                style={{ ...style, display: "block", color: "gray" }}
                onClick={onClick} />
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (

            <ArrowBackIosNewIcon className={className}
                style={{ ...style, display: "block", color: "gray" }}
                onClick={onClick} />
        );
    }
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Box sx={{ paddingX: "10%" }}>
            <Slider {...settings} >
                {SliderImages.map((img: any, idx: any) => {
                    return <Box key={idx} sx={{ padding: "20px" }}><img width={"350px"} height="200px" src={img?.img} alt="" /></Box>
                })}
            </Slider>
        </Box>
    );
}