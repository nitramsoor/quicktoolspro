import React from 'react'
export default function AdPlaceholder({size='responsive'}){
  return (
    <div className="w-full p-4 bg-gray-100 border border-dashed rounded text-center text-sm text-gray-500">
      Ad placeholder ({size})
    </div>
  )
}
