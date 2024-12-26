import { Button, Grid2, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

import * as YUP from "yup";

const validationSchema = YUP.object().shape({
  accountNumber: YUP.string().required("Account Number is Required").matches(/^\d{9,18}$/, "Invalid Account Number"),
  ifscCode: YUP.string().required("IFSC Code is Required").matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC Code (e.g., SBIN0123456)" ),
  accountHolderName: YUP.string().required("Account Holder Name is Required"),
});

function BankDetailsForm() {
  const formik = useFormik({
    initialValues: {
      accountNumber:"",
      ifscCode:"",
      accountHolderName:""
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
        Bank Details
      </p>
      <form onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={1}>
          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="Account Number"
              name="accountNumber"
              value={formik.values.accountNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.accountNumber && formik.errors.accountNumber}
              error={formik.touched.accountNumber && Boolean(formik.errors.accountNumber)}
            />
          </Grid2>

          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="IFSC CODE"
              name="ifscCode"
              onBlur={formik.handleBlur}
              value={formik.values.ifscCode}
              onChange={formik.handleChange}
              helperText={formik.touched.ifscCode && formik.errors.ifscCode}
              error={formik.touched.ifscCode && Boolean(formik.errors.ifscCode)}
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Account Holder Name"
              name="accountHolderName"
              onBlur={formik.handleBlur}
              value={formik.values.accountHolderName}
              onChange={formik.handleChange}
              helperText={formik.touched.accountHolderName && formik.errors.accountHolderName}
              error={formik.touched.accountHolderName && Boolean(formik.errors.accountHolderName)}
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

export default BankDetailsForm;
