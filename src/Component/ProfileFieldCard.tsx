import { Divider } from '@mui/material'
import React from 'react'

function ProfileFieldCard({keys,value}:{keys:string,value:string}) {
  return (
    <div className='p-5 flex items-center bg-slate-50 border rounded-md'>
      <p className='w-20 lg:w-36 pr-5'>{keys}</p>
      <Divider orientation='vertical' flexItem />
      <p className='pl-4 lg:pl-10 font-bold text-gray-700'>{value}</p>
    </div>
  )
}

export default ProfileFieldCard
