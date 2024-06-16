import { Box } from "@mui/material";
import Products from "./Products";

function Homepage(props) {
  const { productData } = props;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {productData.map((value,i) => (
          <Products product ={value}/>
        ))}
      </Box>
    </>
  );
}

export default Homepage;
