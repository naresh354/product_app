import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ProductCard = ({ products }: any) => {

  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
    {products?.map((product: any) => (
      <Card key={product.id} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          width={345}
          height={150}
          sx={{ borderRadius: "10px", backgroundColor: "#8d8d8d" }}
          image={product?.image}
          alt={product?.name}
        />
  
        <CardContent>
       
          <Typography gutterBottom variant="h5" component="div">
            {product?.name}
          </Typography>
          <Typography sx={{ mb: 1, fontSize: "0.8rem", fontWeight: "700", color: "#8d8d8d" }} component="div">
            category: <span style={{ fontSize: "0.7rem", color: "green" }} >{product?.category}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product?.description}
          </Typography>
        </CardContent>
      </Card>
    ))}
  </Box>
  
  );
};

export default ProductCard;
