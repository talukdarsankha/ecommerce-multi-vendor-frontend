
import { useFormik } from "formik";
import React from "react";
import { Button, Grid2, TextField } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

import * as Yup from "yup";
import { Dayjs } from "dayjs";



const validationSchema = Yup.object().shape({
  code: Yup.string().required("Code is required"),
  discountedPercent: Yup.number().required("Discount percentage is required").min(0, "Discount percentage cannot be negative"),
  validityStartDate: Yup.date().nullable().required("Start date is required"),
  validityEndDate: Yup.date().nullable().required("End date is required"),
  minimumOrderValue: Yup.number().required("Minimum order value is required") .min(0, "Minimum order value cannot be negative"),
});



interface CouponFormValues {
  code: string;
  discountedPercent: number;
  validityStartDate: Dayjs | null; // here we need to install dayjs npm i dayjs
  validityEndDate: Dayjs | null;
  minimumOrderValue: number;
}

function AddNewCouponForm() {
  const formik = useFormik<CouponFormValues>({
    initialValues: {
      code: "",
      discountedPercent: 0,
      validityStartDate: null,
      validityEndDate: null,
      minimumOrderValue: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formattedValue = {
        ...values,
        validityStartDate: values.validityStartDate ? values.validityStartDate.toISOString() : null,
        validityEndDate: values.validityEndDate ? values.validityEndDate.toISOString() : null,
      };

      console.log(formattedValue, "formik formattedValue");
    },
  });

  return (
    <div>
      <h1 className="text-center font-bold text-2xl text-gray-700 pb-10">Craete New Coupon</h1>
      <form onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, md:4 }}>
            <TextField
             required
              fullWidth
              label="Coupon CODE"
              name="code"
              onBlur={formik.handleBlur}
              value={formik.values.code}
              onChange={formik.handleChange}
              helperText={formik.touched.code && formik.errors.code}
              error={formik.touched.code && Boolean(formik.errors.code)}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md:4  }}>
            <TextField
              fullWidth
              required
              type="number"
              label="Discounted Percent"
              name="discountedPercent"
              onBlur={formik.handleBlur}
              value={formik.values.discountedPercent}
              onChange={formik.handleChange}
              helperText={formik.touched.discountedPercent && formik.errors.discountedPercent}
              error={formik.touched.discountedPercent && Boolean(formik.errors.discountedPercent)}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md:4  }}>
            <TextField
              required
              type="number"
              fullWidth
              label="Minimum Order Value"
              name="minimumOrderValue"
              onBlur={formik.handleBlur}
              value={formik.values.minimumOrderValue}
              onChange={formik.handleChange}
              helperText={formik.touched.minimumOrderValue && formik.errors.minimumOrderValue}
              error={formik.touched.minimumOrderValue && Boolean(formik.errors.minimumOrderValue)}
            />
          </Grid2>

          <Grid2 size={{ xs: 12,md:6 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ width: "100%" }}
              label="Start Date"
              value={formik.values.validityStartDate}
              onChange={(newValue) => {
                formik.setFieldValue("validityStartDate", newValue);
              }} />
            </LocalizationProvider>
          </Grid2>

          <Grid2 size={{ xs: 12,md:6 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ width: "100%" }}
              label="End Date"
              value={formik.values.validityEndDate}
              onChange={(newValue) => {
                formik.setFieldValue("validityEndDate", newValue);
              }}  
                      
                 />
            </LocalizationProvider>
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <Button
              type="submit"
              sx={{ py: "1rem", bgcolor: "teal", mt: "1rem" }}
              fullWidth
              variant="contained"
            >
              Add Coupon
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </div>
  );
}

export default AddNewCouponForm;
