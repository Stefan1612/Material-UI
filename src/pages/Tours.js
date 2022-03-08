import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageCollage from "../Components/ImageCollage";
import CustomizedAccordions from "../Components/Accordion";
import SimpleBottomNavigation from "../Components/BottomNavigation";

const Tours = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://cdn.pixabay.com/photo/2019/10/21/00/16/coffee-4564897_960_720.jpg"
          alt="Coffee"
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <Typography variant="h6" component="h4" marginTop={3}>
          About the Tour
        </Typography>
      </Box>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Some random text Some random text Some random text Some random text
          Some random text Some random text Some random text Some random text
          Some random text Some random text Some random text Some random text
          Some random text Some random text Some random text Some random text
          Some random text Some random text Some random text Some random text
          Some random text Some random text Some random text Some random text
          Some random text Some random text Some random text Some random text
          Some random text Some random text Some random text Some random text
          Some random text Some random text Some random text Some random text
          Some random text Some random text Some random text Some random text
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          Frequently asked questions
        </Typography>
      </Box>
      <Box>
        <CustomizedAccordions />
      </Box>
      <SimpleBottomNavigation />
    </Container>
  );
};

export default Tours;
