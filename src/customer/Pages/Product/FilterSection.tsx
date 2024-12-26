import { Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import { colorFilters } from '../../../Data/Filter/color'
import { useSearchParams } from "react-router-dom";
import { price } from '../../../Data/Filter/Price';
import { discount } from '../../../Data/Filter/discount';


function FilterSection() {

  const [expandColor, setExpandColor] = useState(false);
  const [expandDiscount, setExpandDiscount] = useState(false);

  const handelColorToggle=()=>{
    setExpandColor(!expandColor);
  }

  const handeldiscountToggle=()=>{
    setExpandDiscount(!expandDiscount);
  }

  const [searchParams, setSearchParams] = useSearchParams();


  const updateFilterParams = (e:any)=>{
      const {name,value} = e.target;
      const newSearchParams = new URLSearchParams(searchParams);

      if(value){
        newSearchParams.set(name,value);
      }else{
        newSearchParams.delete(name);
      }
      setSearchParams(newSearchParams);
  }

  const updateCheckboxFilterParams = (e: any) => {
    const { name, value, checked } = e.target; // Extract name, value, and checked state 
    const newSearchParams = new URLSearchParams(searchParams);
  
    // Get the current value of the filter group and split it into an array
    const currentValues = newSearchParams.get(name)?.split(",") || [];
  
    if (checked) {
      // Add the selected value if it's not already present
      if (!currentValues.includes(value)) {
        currentValues.push(value);

         // Update the query parameter with the updated values
        newSearchParams.set(name, currentValues.join(","));
        setSearchParams(newSearchParams); // Update the search parameters
      }
    } else {
      // Remove the unselected value
      
      const updatedValues = currentValues.filter((v) => v !== value);
        if(updatedValues.length>0){
          newSearchParams.set(name, updatedValues.join(",")); // Update the key with the remaining values
        }else{
          newSearchParams.delete(name);
        }
      setSearchParams(newSearchParams);
    }

   
  };
  
  
  

  const clearAllFilter = ()=>{
    const newSearchParams = new URLSearchParams();
    setSearchParams(newSearchParams);
  }

  return (
    <div className=' space-y-5 bg-white w-full p-3 mb-4'>
      <div className='flex items-center justify-between h-[40px] px-3  lg:border-r-2'>
         <p className='text-lg font-semibold'>Filters</p>
         <Button onClick={clearAllFilter} size='small' className='text-customColor cursor-pointer font-semibold'>
          Clear all
         </Button>
      </div>

      <Divider/>


      <div className='px-4 space-y-5'>
        <section>
        <FormControl>
          <FormLabel id='color' sx={{fontSize:"16px", fontWeight:"bold", pb:"14px"}} >Color</FormLabel>
          <RadioGroup
            aria-labelledby="color"
            // defaultValue="female"
            name="color"
            onChange={updateFilterParams}
          >
            {colorFilters.slice(0,expandColor?colorFilters.length:5).map((item)=><FormControlLabel key={item.name} 
            value={item.name} control={<Radio />}
            label={
              <div className='flex items-center justify-center gap-1'>
                <p>{item.name}</p> 
                <p className={`h-4 w-4 rounded-full ${item.name=="White"?"border border-black":""}`} style={{backgroundColor:item.hexValue}} ></p>
              </div>
            } />)}

          </RadioGroup>
        </FormControl>

          <div>
            <button onClick={handelColorToggle} className='text-customColor hover:text-teal-800 cursor-pointer'>
              {!expandColor?`+${colorFilters.length-5} more`:"hide"}
            </button>
          </div>
         
        </section>

        <section>
          <FormControl>
            <FormLabel id='price' sx={{fontSize:"16px", fontWeight:"bold", pb:"14px"}} className='text-2xl font-semibold' >Price</FormLabel>
            <RadioGroup
              aria-labelledby="price"
              // defaultValue="female"
              name="price"
              onChange={updateFilterParams}
            >
              {price.map((item)=>
              <FormControlLabel key={item.name} 
              value={item.value} control={<Radio />}
              label={item.name} />)}

            </RadioGroup>
          </FormControl>
        </section>

        <section>
          <FormControl>
            <FormLabel id='discount' sx={{fontSize:"16px", fontWeight:"bold", pb:"14px"}} >Discount</FormLabel>
            <RadioGroup
              aria-labelledby="discount"
              // defaultValue="female"
              name="discount"
              onChange={updateFilterParams}
            >
              {discount.slice(0, expandDiscount ? discount.length: 5).map((item)=><FormControlLabel key={item.name} 
              value={item.value} control={<Radio />}
              label={item.name} />)}

            </RadioGroup>
          </FormControl>

            <div>
              <button onClick={handeldiscountToggle} className='text-customColor hover:text-teal-800 cursor-pointer'>
                {!expandDiscount?`+${discount.length-5} more`:"hide"}
              </button>
            </div>
          
        </section>


        <section>
         <FormLabel sx={{fontSize:"16px", fontWeight:"bold", pb:"14px"}} >Stock</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name='stock' value="IN STOCK"/>}
              onChange={updateCheckboxFilterParams}
              label="In Stock"
            />
            <FormControlLabel
              onChange={updateCheckboxFilterParams}
              control={<Checkbox name='stock' value="OUT OF STOCK" />}
              label="Out Of Stock"
            />
          </FormGroup>
        </section>

      </div>
      
      
    </div>
  )
}

export default FilterSection
