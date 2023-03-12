import { Box, Typography, Grid } from '@mui/material';


const ClimateTech = () => {
    
    return (               
            <Box
      style={{
        margin: "60px 0 0px",
       backgroundImage: `url('${process.env.PUBLIC_URL}/assets/global.jpg')`,
       backgroundSize: "cover",
       backgroundPosition: "center",
       height: "100vh", 
          
      }}
    >
     <Grid item md={5} lg={6} sx={{ my: 5, mx: 3 }}>
    <Typography 
            variant="h3">Dream Job in Climatic Tech</Typography>
    </Grid>
    <Grid item xs={6} md={4}>
            <Typography variant="h6" margin="20px">Climate technology is a growing industry that is creating new inventions to help stop or slow down the impact of climate change and to control the irreversible damage that’s already been done. 
            There is a huge opportunity for qualified tech professionals to use their skills to contribute to the fight against climate change. 
            Working for a tech company can be one of the best experiences you will have during your career. Not only will you get the opportunity to work on exciting projects that are the cutting edge of technological advancements, 
            you will get to work alongside some of the brightest people in tech.       
            </Typography>
    </Grid>
    <Grid item xs={6} md={4}>
        <Typography variant="h5" margin="20px">
        "I'm interested in a career in climatic technology because I want to use my skills and knowledge to make other people's jobs easier and more productive.
         I believe IT support technicians are important team members for any organization because they combine technical knowledge with interpersonal skills"
        </Typography>
    </Grid>
    <Grid item xs={6} md={4}>
    <Typography variant="h6" margin="20px">
    Technology professionals can also be instrumental in easing climate change by providing cleaner alternative solutions. Previous technological advances contributed to the problem by emitting greenhouse gases into the atmosphere. As a society, we’ve learned a lot over the past many years about effective methods for helping to eliminate carbon emissions. 
    For example, electric cars, solar panels and windmills are already making their mark on renewable energy.
    There is still more to do, which is why technology professionals play a critical role in helping us achieve a more sustainable world. 
    Professionals can help decrease the impact of climate change by creating innovative new technologies, or by advancing existing ones. 
    </Typography>
    </Grid>
    </Box>
              

        
    )
}

export default ClimateTech;