import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";

function CreateDealForm() {
  const formik = useFormik({
    initialValues: {
      discount: 0,
      category: null,
    },
    onSubmit: (values) => {
      console.log(values, "formik formattedValue");
    },
  });

  return (
    <Box
      component={"form"}
      onSubmit={formik.handleSubmit}
      className="space-y-6"
    >
      <Typography variant="h4" className="text-center text-gray-700">
        Create Deal
      </Typography>

      <TextField
        required
        type="number"
        fullWidth
        label="Discount"
        name="discount"
        onBlur={formik.handleBlur}
        value={formik.values.discount}
        onChange={formik.handleChange}
        helperText={formik.touched.discount && formik.errors.discount}
        error={formik.touched.discount && Boolean(formik.errors.discount)}
      />

      <FormControl
        required
        fullWidth
        error={formik.touched.category && Boolean(formik.errors.category)}
      >
        <InputLabel>Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="category"
          label="Category"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          {[1, 1, 11, 1].map((item, i) => (
            <MenuItem key={i} value={item}>
              {"Sizes"}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        type="submit"
        sx={{ py: "1rem", bgcolor: "teal", mt: "1rem" }}
        fullWidth
        variant="contained"
      >
        Create
      </Button>
    </Box>
  );
}

export default CreateDealForm;
