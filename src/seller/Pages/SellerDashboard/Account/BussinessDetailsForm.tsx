import { Button, Grid2, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

import * as YUP from "yup";

const validationSchema = YUP.object().shape({
  businessName: YUP.string().required("Business name is empty"),
  GSTIN: YUP.string().required("GSTIN is Required").matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, "Invalid GSTIN") 
});

function BussinessDetailsForm() {
  const formik = useFormik({
    initialValues: {
      businessName:"",
      GSTIN:""
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
      Business Details
      </p>
      <form onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={1}>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Business/Brand Name"
              name="businessName"
              value={formik.values.businessName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.businessName && formik.errors.businessName}
              error={
                formik.touched.businessName && Boolean(formik.errors.businessName)
              }
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="GSTIN"
              name="GSTIN"
              onBlur={formik.handleBlur}
              value={formik.values.GSTIN}
              onChange={formik.handleChange}
              helperText={formik.touched.GSTIN && formik.errors.GSTIN}
              error={formik.touched.GSTIN && Boolean(formik.errors.GSTIN)}
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

export default BussinessDetailsForm;
