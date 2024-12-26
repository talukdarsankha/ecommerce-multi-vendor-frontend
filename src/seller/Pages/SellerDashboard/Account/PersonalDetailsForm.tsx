import { Button, Grid2, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

import * as YUP from "yup";

const validationSchema = YUP.object().shape({
  sellerName: YUP.string().required("Seller Name is Required"),
  mobile: YUP.string().required("Mobile No. is Required").matches(/^[7-9][0-9]{9}$/, "Invalid mobile number"),

});

function PersonalDetailsForm() {
  const formik = useFormik({
    initialValues: {
      sellerName: "",
      mobile: "",
    },
    enableReinitialize: true, // Ensure form reinitializes when findUser updates
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values, "formik details");
    }, 
  });

  return (
    <div>
      <p className="text-2xl font-bold text-center pb-5 opacity-60">
        Personal Details
      </p>
      <form onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={1}>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Seller Name"
              name="sellerName"
              value={formik.values.sellerName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.sellerName && formik.errors.sellerName}
              error={
                formik.touched.sellerName && Boolean(formik.errors.sellerName)
              }
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Contact No"
              name="mobile"
              onBlur={formik.handleBlur}
              value={formik.values.mobile}
              onChange={formik.handleChange}
              helperText={formik.touched.mobile && formik.errors.mobile}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <Button
              type="submit"
              sx={{ py: "1rem", bgcolor: "teal", mt: "1rem" }}
              fullWidth
              variant="contained"
            >
              Update
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </div>
  );
}

export default PersonalDetailsForm;
