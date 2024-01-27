import { useState } from "react";
import ProductJson from "./ProductJson";
import ProductCard from "./ProductCard";
import { TextField } from "@mui/material";

function ProductList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any>(ProductJson);


  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);
    // Filter products based on search query
    const filteredProducts = ProductJson.filter((product: any) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filteredProducts);
  };


  return (
    <div>
      <TextField
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search by product name"
        label="Product Name"
        size="small"
        sx={{ mb: 2 }}
      />
      <ProductCard products={products} />
    </div>
  );
}

export default ProductList;
