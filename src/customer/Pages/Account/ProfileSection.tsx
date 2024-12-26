import React from 'react'
import ProfileFieldCard from '../../../Component/ProfileFieldCard'

function ProfileSection() {
  return (
    <div className='flex justify-center py-10'>
      <div className='w-full lg:w-[70%]'>
         <div>
            <h1 className='text-2xl font-bold text-gray-600'>Personal Details</h1>
         </div>
         <div className='space-y-5 mt-3'>
            <ProfileFieldCard keys="Name" value='Sankha Talukdar'/>
            <ProfileFieldCard keys="Email" value='Sankha@Talukdar.com'/>
            <ProfileFieldCard keys="Ph. No :" value='9562369852'/>
         </div>
      </div>
    </div>
  )
}

export default ProfileSection
