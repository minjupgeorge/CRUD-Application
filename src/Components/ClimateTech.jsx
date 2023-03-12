import { Box, Typography, styled } from '@mui/material';



const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;



const ClimateTech = () => {
    
    return (
        
        <Header>
            <Typography variant="h3">Dream Job in Climatic Tech</Typography>
            <Typography variant="h6">Climate Tech refers to an array of technology solutions designed to address climate change and its environmental effects. 
            This can be done by reducing GHG emissions or adapting our systems to environmental changes.          
            </Typography>
              <Box
      sx={{
        alignItems: "stretch",
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/carbon.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "auto",
        maxWidth: "100%",
      }}
    ></Box>
        </Header>
    )
}

export default ClimateTech;