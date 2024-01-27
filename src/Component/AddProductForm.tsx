import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Box,
  Card,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const ProductForm = ({ onSubmit }: any) => {
  const [category, setCategory] = useState("");

  const handleChange = (event: any, setFieldValue: any) => {
    const { value } = event.target;
    setCategory(value as string);
    setFieldValue("category", value); // Update the form field value
  };

  const initialValues = {
    name: "",
    category: category,
    image: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    category: Yup.string().required("Category is required"),
    image: Yup.string().url("Invalid URL").required("Image URL is required"),
    description: Yup.string().required("Description is required"),
  });

  console.log(category, "category");

  return (
    <Box sx={{ width: "350px", p: 3 }}>
      <Card sx={{ p: 2 }}>
        <Typography
          sx={{ textAlign: "center", fontSize: "1.2rem", fontWeight: 700 }}
        >
          {" "}
          Add Product{" "}
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            setCategory("")
            resetForm();
          }}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <div style={{ marginTop: "20px" }}>
                <Field
                  as={TextField}
                  name="name"
                  size="small"
                  style={{ width: "100%" }}
                  label="Product Name"
                  helperText={
                    <span
                      style={{
                        color: touched.name && errors.name ? "red" : "inherit",
                      }}
                    >
                      {touched.name && errors.name}
                    </span>
                  }
                />
              </div>
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel sx={{ mt: -1 }} id="demo-simple-select-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Age"
                  size="small"
                  name="category"
                  onChange={(event) => handleChange(event, setFieldValue)}
                >
                  <MenuItem value={"Fruits"}>Fruits</MenuItem>
                  <MenuItem value={"Vegetables"}>Vegetables</MenuItem>
                </Select>
                {touched.category && errors.category && (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.category}
                  </FormHelperText>
                )}
              </FormControl>
              <div style={{ marginTop: "20px" }}>
                <Field
                  as={TextField}
                  name="image"
                  style={{ width: "100%" }}
                  size="small"
                  label="Image URL"
                  helperText={
                    <span
                      style={{
                        color:
                          touched.image && errors.image ? "red" : "inherit",
                      }}
                    >
                      {touched.image && errors.image}
                    </span>
                  }
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <Field
                  as={TextField}
                  name="description"
                  label="Description"
                  style={{ width: "100%" }}
                  multiline
                  size="small"
                  rows={4}
                  helperText={
                    <span
                      style={{
                        color:
                          touched.description && errors.description
                            ? "red"
                            : "inherit",
                      }}
                    >
                      {touched.description && errors.description}
                    </span>
                  }
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                style={{ width: "100%", marginTop: "10px" }}
              >
                Add Product
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </Box>
  );
};

export default ProductForm;
