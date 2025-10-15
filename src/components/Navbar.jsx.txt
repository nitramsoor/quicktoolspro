import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">QT</div>
          <div>
            <h1 className="text-lg font-semibold">QuickToolsPRO</h1>
            <p className="text-xs text-gray-500">Fast utilities — free & instant</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <NavLink to="/word-counter" className={({isActive}) => isActive ? 'text-indigo-600 font-medium' : 'text-gray-600'}>Word Counter</NavLink>
          <NavLink to="/case-converter" className={({isActive}) => isActive ? 'text-indigo-600 font-medium' : 'text-gray-600'}>Case Converter</NavLink>
          <NavLink to="/duplicate-remover" className={({isActive}) => isActive ? 'text-indigo-600 font-medium' : 'text-gray-600'}>Duplicate Remover</NavLink>
          <NavLink to="/password-generator" className={({isActive}) => isActive ? 'text-indigo-600 font-medium' : 'text-gray-600'}>Password Generator</NavLink>
          <NavLink to="/bmi-calculator" className={({isActive}) => isActive ? 'text-indigo-600 font-medium' : 'text-gray-600'}>BMI Calculator</NavLink>
          <NavLink to="/currency-converter" className={({isActive}) => isActive ? 'text-indigo-600 font-medium' : 'text-gray-600'}>Currency Converter</NavLink>
        </nav>
      </div>
    </header>
  )
}
