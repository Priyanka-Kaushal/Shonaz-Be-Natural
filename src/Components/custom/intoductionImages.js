import React from 'react'

const intoductionImages = () => {
  return (
    <div>
       <Box
        sx={{
          position: "relative",
          width: { xs: "80%", sm: "30%" }, // Adjust width for smaller screens
          height: "400px",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: "400px",
            width: "80%",
            objectFit: "cover",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: 1,
            borderRadius: "8px",
          }}
          image={BannerImage}
          alt="Product Image"
        />
        <CardMedia
          component="img"
          sx={{
            height: "300px",
            width: "50%",
            position: "absolute",
            top: "50px",
            left: "-210px",
            zIndex: 2,
            borderRadius: "8px",
            border: "3px solid white",
          }}
          image={BannerImage}
          alt="Product Image"
        />
      </Box>
    </div>
  )
}

export default intoductionImages
