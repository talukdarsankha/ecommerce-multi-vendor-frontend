import { AddPhotoAlternate, Close } from '@mui/icons-material';
import { Button, CircularProgress, FormControl, Grid2, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react'


import * as YUP from "yup";
import { uploadToCloudinary } from '../../../../Utill/UploadToCloudinary';
import { colorFilters } from '../../../../Data/Filter/color';
import { mainCategory } from '../../../../Data/Category/mainCategoty';
import { womenLevelTwo } from '../../../../Data/Category/levelTwo/womenLevelTwo';
import { menLevelTwo } from '../../../../Data/Category/levelTwo/menLevelTwo';
import { furnitureLevelTwo } from '../../../../Data/Category/levelTwo/furnitureLevelTwo';
import { electricLevelTwo } from '../../../../Data/Category/levelTwo/electronicsLevelTwo';
import { menLevelThree } from '../../../../Data/Category/levelThree/menLevelThree';
import { womenLevelThree } from '../../../../Data/Category/levelThree/womenLevelThree';
import { furnitureLevelThree } from '../../../../Data/Category/levelThree/furnitureLevelThree';
import { electricLevelThree } from '../../../../Data/Category/levelThree/electronicsLevelThree';
import { useAppDispatch } from '../../../../Redux/Store';
import { createSellerProduct } from '../../../../Redux/Seller/SellerProductSlice';

const validationSchema = YUP.object().shape({
  title: YUP.string().required("title name is empty"),
  description: YUP.string().required("description is Required"),
  mrpPrice: YUP.string().required("mrpPrice is Required"),
  sellingPrice: YUP.string().required("sellingPrice is Required"),
  color: YUP.string().required("color is Required"),
  category1:YUP.string().required("First Category is Required"),
  category2:YUP.string().required("Second Category is Required"),
  category3:YUP.string().required("Third Category is Required"),

});




function AddProducts() {

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title:"",
      description:"",
      mrpPrice:"",
      sellingPrice:"",
      quantity:"",
      color:"",
      images:[],
      category1:"",
      category2:"",
      category3:"",
      sizes:""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values, "formik details");
      dispatch(createSellerProduct({productRequest:values,jwt:localStorage.getItem("jwt")}));
      
      formik.resetForm();
    },
  });


  const [uploadingProductImage,setUploadingProductImage] = useState(false);

  const handleProductImageChange= async (e:any)=>{
    setUploadingProductImage(true);
    const file = e.target.files[0];
     
    if(file){
        // const url =  URL.createObjectURL(file)  // in that way we can create a url without upload 
        const url =  await uploadToCloudinary(file,"image");
        formik.setFieldValue("images",[url, ...formik.values.images]);
    }
    
    setUploadingProductImage(false);
  }

  const handleProductImageRemove = (index: number) => {
    const updatedImages = [...formik.values.images]; // Clone the array
    updatedImages.splice(index, 1); // Remove the index element
    formik.setFieldValue("images", updatedImages); // Update the formik field value
  };



  
  const categoryLevelTwo:{[key:string]:any[]} = {
    men:menLevelTwo,
    women:womenLevelTwo,
    home_furniture:furnitureLevelTwo,
    electronics:electricLevelTwo
  
  }

  const categoryLevelThree:{[key:string]:any[]} = {
    men:menLevelThree,
    women:womenLevelThree,
    home_furniture:furnitureLevelThree,
    electronics:electricLevelThree
  
  }

  const filterchildCategories = (category:any,parentcategoryId:any)=>{
    return category.filter((item:any)=>item.parentcategoryId==parentcategoryId) 
  }

  const [selectedCategory1,setSelectedCategory1] = useState("");
  const [selectedCategory2,setSelectedCategory2] = useState("");


  const handleChangeCategory = (event:any)=>{
    const {name,value} = event.target;
    formik.setFieldValue(name,value);

    if(name=="category1"){
      setSelectedCategory1(value);
    }else{
      setSelectedCategory2(value);
      
    }
    console.log(selectedCategory2);
  }
  

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className='space-y-4 p-4'>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12 }} className='flex gap-5'>
            <input
             type='file'
             accept='image/*'
             id='addProductInput'
             style={{display:"none"}}
             onChange={handleProductImageChange}
             />

             <label htmlFor='addProductInput' className='relative'>
                 <span className='w-24 h-24 flex justify-center items-center cursor-pointer border border-gray-700 rounded-md p-3 text-gray-700'>
                   <AddPhotoAlternate/>
                 </span>

                 { uploadingProductImage && (<div className='absolute inset-0 w-24 h-24 flex justify-center items-center cursor-pointer'>
                  <CircularProgress />
                 </div>)}
                 
             </label>

              <div className="flex gap-2 w-full">               
                   {formik.values.images?.map((item,index)=> 
                    <div key={index} className="relative">
                      <div
                      onClick={()=>handleProductImageRemove(index)}
                      className="absolute top-0 right-0 opacity-90 p-1 border-2 bg-white bg-opacity-50 rounded-full cursor-pointer">
                      <Close/>
                      </div>

                      <img src={item} className='h-24 w-24  object-cover object-center rounded-md' alt="product" />
                    </div> 
                   )}
              </div>  
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              required
              label="Title"
              name="title"
              onBlur={formik.handleBlur}
              value={formik.values.title}
              onChange={formik.handleChange}
              helperText={formik.touched.title && formik.errors.title}
              error={formik.touched.title && Boolean(formik.errors.title)}
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <TextField
             multiline
             required
             rows={4}
              fullWidth
              label="Description"
              name="description"
              onBlur={formik.handleBlur}
              value={formik.values.description}
              onChange={formik.handleChange}
              helperText={formik.touched.description && formik.errors.description}
              error={formik.touched.description && Boolean(formik.errors.description)}
            />
          </Grid2>

          <Grid2 size={{ xs: 6,md:4,lg:3 }}>
            <TextField
              fullWidth
              required
              label="MRP Price"
              name="mrpPrice"
              onBlur={formik.handleBlur}
              value={formik.values.mrpPrice}
              onChange={formik.handleChange}
              helperText={formik.touched.mrpPrice && formik.errors.mrpPrice}
              error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
            />
          </Grid2>

          <Grid2 size={{ xs: 6,md:4,lg:3 }}>
            <TextField
              fullWidth
              required
              label="Selling Price"
              name="sellingPrice"
              onBlur={formik.handleBlur}
              value={formik.values.sellingPrice}
              onChange={formik.handleChange}
              helperText={formik.touched.sellingPrice && formik.errors.sellingPrice}
              error={formik.touched.sellingPrice && Boolean(formik.errors.sellingPrice)}
            />
          </Grid2>


          <Grid2 size={{ xs: 12,md:4,lg:3 }}>
            <FormControl
            //  required
             fullWidth
             >
                <InputLabel>Sizes</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name='sizes'
                  label="Sizes"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                 <MenuItem  value="S">S </MenuItem>
                 <MenuItem  value="M">M </MenuItem>
                 <MenuItem  value="L">L</MenuItem>
                 <MenuItem  value="XL">XL </MenuItem>
                </Select>
            </FormControl>
           
          </Grid2>

          <Grid2 size={{ xs: 12,md:4, lg:3 }}>
            <FormControl
             required
             fullWidth
             error={formik.touched.color && Boolean(formik.errors.color)}
             >
                <InputLabel>Color</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name='color'
                  label="Color"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                 {colorFilters.map((color,i)=>
                   <MenuItem key={i} value={color.name}>
                    <div className='flex gap-2'>
                       <span style={{backgroundColor:color.hexValue}} className={`${color.name=="White"?"border border-gray-600":""} h-5 w-5 rounded-full`}></span>
                       <p>{color.name}</p>
                    </div>
                   </MenuItem>
                 ) }
                </Select>
            </FormControl>
           
          </Grid2>


          <Grid2 size={{ xs: 12,md:4 }}>
            <FormControl
             required
             fullWidth
             error={formik.touched.category1 && Boolean(formik.errors.category1)}
             >
                <InputLabel>First Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name='category1'
                  label="First Category"
                  onChange={handleChangeCategory}
                  onBlur={formik.handleBlur}
                >
                 {mainCategory.map((item,i)=>
                   <MenuItem key={i} value={item.categoryId}>
                        <p>{item.name}</p>
                   </MenuItem>
                 ) }
                </Select>
            </FormControl>
           
          </Grid2>

          <Grid2 size={{ xs: 12,md:4}}>
            <FormControl
             required
             fullWidth
             error={formik.touched.category2 && Boolean(formik.errors.category2)}
             >
                <InputLabel>Second Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name='category2'
                  label="Second Category"
                  onChange={handleChangeCategory}
                  onBlur={formik.handleBlur}
                >
                 {categoryLevelTwo[selectedCategory1]?.map((item,i)=>
                   <MenuItem key={i} value={item.categoryId}> {item.name} </MenuItem>
                 ) }
                </Select>
            </FormControl>
           
          </Grid2>

          <Grid2 size={{ xs: 12,md:4}}>
            <FormControl
             required
             fullWidth
             error={formik.touched.category3 && Boolean(formik.errors.category3)}
             >
                <InputLabel>Third Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name='category3'
                  label="Third Category"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                      {/* filterchidCategories it is return an array */}
                 {categoryLevelThree[selectedCategory1] && filterchildCategories(categoryLevelThree[selectedCategory1],selectedCategory2)?.map((item:any)=>
                   <MenuItem key={item.categoryId} value={item.categoryId}> {item.name} </MenuItem>
                 ) }
                </Select>
            </FormControl>
           
          </Grid2>

                  

          <Grid2 size={{ xs: 12 }}>
            <Button
              type="submit"
              sx={{ py: "1rem", bgcolor: "teal", mt: "1rem" }}
              fullWidth
              variant="contained"
            >
              Add Product
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </div>
  )
}

export default AddProducts
