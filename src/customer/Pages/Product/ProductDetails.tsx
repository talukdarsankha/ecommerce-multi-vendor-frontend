import React, { useEffect, useState } from 'react'

import StarIcon from '@mui/icons-material/Star';
import { Button, Divider, ThemeProvider } from '@mui/material';
import { Add, Remove, Shield } from '@mui/icons-material';
import { teal } from '@mui/material/colors';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductCard from './ProductCard';
import ReviewCard from '../Review/ReviewCard';
import { useAppDispatch, useAppSelector } from '../../../Redux/Store';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProductById } from '../../../Redux/Customer/ProductSlice';
import { addItemToCart } from '../../../Redux/Customer/CartSlice';
import CustomTheme from '../../../Theme/CustomTheme';
import Navbar from '../../Component/Navbar';
import { addRemoveToWishList } from '../../../Redux/Customer/WishList';




function ProductDetails() {


  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handleActiveImage =(index:number)=>{
    setActiveImageIndex(index);
  }


  const dispatch = useAppDispatch();
  const {customerProduct} = useAppSelector(store=>store);



  const { productId } = useParams();

  useEffect(() => {
     // Decode the Base64 encoded ID
  const decodedId = atob(productId || "");
   
  dispatch(fetchProductById(Number(decodedId)));
  }, [productId]);


      
  const [qunatity, setQunatity] = useState(Number(1));
  const handelQunatity =(num:number)=>{
    setQunatity(qunatity+num);
  }

  const handleAddToWishlist =()=>{
    const decodedId = atob(productId || "");

     dispatch(addRemoveToWishList({jwt:localStorage.getItem("jwt") || "", productId:Number(customerProduct.product?.id) }));
  }

  const handleAddToCart =()=>{
    const decodedId = atob(productId || "");

    const data={
       jwt:localStorage.getItem("jwt") || "",
      request:{
        size:customerProduct.product?.sizes || "",
        quantity:qunatity,
        productId:customerProduct.product?.id
      }
    }
     dispatch(addItemToCart(data));
  }


  const navigate = useNavigate();


  return (
    <div>
      <ThemeProvider theme={CustomTheme}>
      <Navbar/>
     </ThemeProvider>

     <div className='px-5 lg:px-16 pt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <section className='flex flex-col lg:flex-row gap-5'>
              <div className='w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3'>
                  {customerProduct.product?.images?.map((item,i)=>
                  <img key={i}
                  onClick={()=>handleActiveImage(i)}
                  className='lg:w-full w-[50px] cursor-pointer rounded-md'
                  src={item} alt="" />
                  )}
              </div>

              <div className='w-full lg:w-[85%]'>
                <img
                className='rounded-md w-full'
                src={customerProduct.product?.images[activeImageIndex]} alt="" />
              </div>
          </section>

          <section>
              <h1 className='font-bold text-lg text-slate-700'>{customerProduct.product?.seller?.businessDetails?.businessName}</h1>
              <p className='text-slate-500 font-semibold'>{customerProduct.product?.title}</p>
              <div className='flex items-center justify-between py-2 px-3 border w-[180px] '>
                <div className='flex gap-1 items-center'>
                  <span>4</span>
                  <StarIcon sx={{color:"rgb(250 175 0)"}}/>
                </div>
                
                <Divider flexItem orientation='vertical'  />

                <span>238 Ratings</span>
              </div>

              <div className='price flex items-center gap-3 mt-5 text-2xl'>
                  <span className='font-sans text-gray-800'> ₹{customerProduct.product?.sellingPrice}</span>
                  <span className='line-through text-gray-400'> ₹{customerProduct.product?.mrpPrice}</span>
                  <span className='font-semibold text-customColor'> {customerProduct.product?.discountedPercent}% off</span>
              </div>
              <p className='text-sm py-3'>{customerProduct.product?.description}</p>

              <div className='mt-7 space-y-3'>
                <div className='flex gap-4 items-center'>
                    <Shield sx={{color:teal[500]}}/>
                    <p>100% Original Products</p>
                </div>

                <div className='flex gap-4 items-center'>
                    <AssuredWorkloadIcon sx={{color:teal[500]}}/>
                    <p>Easy Online Payment available</p>
                </div>

                <div className='flex gap-4 items-center'>
                    <LocalShippingIcon sx={{color:teal[500]}}/>
                    <p>Easy 7 days returns and exchanges</p>
                </div>

                <div className='flex gap-4 items-center'>
                    <AccountBalanceWalletIcon sx={{color:teal[500]}}/>
                    <p>Pay on delivery might be available</p>
                </div>
              </div>

              <div className='mt-7 space-y-2'>
                  <h1 className='font-semibold text-lg'>Quantity</h1>
                  <div className='flex items-center gap-2 w-[140px] justify-between'>
                      <Button onClick={()=>handelQunatity(-1)} variant='outlined' disabled={qunatity===1}> <Remove/> </Button>
                      <span >{qunatity}</span>
                      <Button onClick={()=>handelQunatity(1)} variant='outlined'> <Add/> </Button> 
                  </div> 
              </div>

              <div className='mt-12 flex items-center gap-4'>
                  <Button variant='contained'
                  fullWidth 
                  sx={{py:"1rem",bgcolor:"teal[500]"}}
                  startIcon={<ShoppingCartIcon/>}

                  onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>

                  <Button variant='outlined'
                  fullWidth 
                  sx={{py:"1rem",bgcolor:"teal[500]"}}
                  startIcon={<FavoriteBorderIcon/>}
                  onClick={handleAddToWishlist}
                  >
                    WishList
                  </Button>
              </div>

              <div className='my-5 text-slate-700'>
              Featuring a regular fit, this product provides a comfortable wearing experience. The regular fit ensures that the shirt feels neither too tight nor too loose and provides a comfortable fit. The regular fit strikes the ideal balance between comfort and style, and therefore, the product will be your go-to option. It will provide you with ease of movement as well as add a refined touch to your appearance.
              </div>

              <div className='my-10'>
                <ReviewCard/>
                <Button color='warning' onClick={()=>navigate(`/review/${productId}`)} >View All++</Button>
              </div>
              
          </section>
        </div>

        <Divider/>

        <div className='mb-10 mt-20 '>
          <h1 className='font-semibold text-xl my-5'>Similar Products</h1>
          <div className='flex flex-wrap justify-start'>
          { customerProduct.pageable?.content?.map((item:any,i:number)=><ProductCard key={i} productItem={item}/>)}
          </div>
        </div>

      </div>

    </div>
   
  )
}

export default ProductDetails
