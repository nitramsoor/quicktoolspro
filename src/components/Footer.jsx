import React from 'react'
export default function Footer(){
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-6xl mx-auto p-4 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
        <div>© {new Date().getFullYear()} QuickToolsPRO</div>
        <div className="mt-2 md:mt-0">Ads placeholder • Terms • Privacy</div>
      </div>
    </footer>
  )
}
