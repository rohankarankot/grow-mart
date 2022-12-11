
const FormatWithINR = (price: number) => {
    return (
        price?.toLocaleString('en-US', {
            style: 'currency',
            currency: 'INR',
        }).slice(0, -3)
    )
}

export default FormatWithINR
