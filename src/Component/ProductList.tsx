import { useState } from "react";
import ProductJson from "./ProductJson";
import ProductCard from "./ProductCard";
import { Button, TextField } from "@mui/material";
import AddProductModel from "./AddProductModel";

function ProductList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any>(ProductJson);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);
    // Filter products based on search query
    const filteredProducts = ProductJson.filter((product: any) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleAddProduct = (product: any) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
    handleClose();

    console.log(product, "product");
  };

  return (
    <div>
      <TextField
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search by product name"
        label="Search Product "
        size="small"
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleClickOpen} sx={{ ml: 2 }}>
        Add Product
      </Button>
      <ProductCard products={products} />

      <AddProductModel
        handleAddProduct={handleAddProduct}
        handleClose={handleClose}
        open={open}
      ></AddProductModel>
    </div>
  );
}

export default ProductList;
