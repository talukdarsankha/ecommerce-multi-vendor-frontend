export const uploadToCloudinary=async(file:any,fileType:any)=>{
    if(file){
        const data=new FormData();
        data.append("file",file);
        data.append('cloud_name',"doa7jctor");
        data.append('upload_preset',"ecommerce-multivendor");
        data.append('resource_type',fileType);

        const res=await fetch(`https://api.cloudinary.com/v1_1/doa7jctor/${fileType}/upload`,
            {
                method:"post",
                body:data
            }
        )

        const fileData=await res.json();
        return fileData.url?.toString();        
        
    }else{
        console.log("error from upload function");
    }
}