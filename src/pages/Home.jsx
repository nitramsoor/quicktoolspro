import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import AdPlaceholder from '../components/AdPlaceholder'

export default function Home() {
  return (
    <div className="space-y-6">
      <Helmet>
        <title>QuickToolsPRO – Free Online Utilities</title>
        <meta name="description" content="Fast, free online tools: Word Counter, Password Generator, BMI Calculator & more."/>
      </Helmet>
      <div className="card space-y-4">
        <h1 className="text-2xl font-bold">QuickToolsPRO</h1>
        <p>All your favorite online utilities in one place. Free, fast, and easy to use.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/word-counter" className="p-4 bg-indigo-50 rounded hover:bg-indigo-100 text-center">Word Counter</Link>
          <Link to="/case-converter" className="p-4 bg-indigo-50 rounded hover:bg-indigo-100 text-center">Case Converter</Link>
          <Link to="/duplicate-remover" className="p-4 bg-indigo-50 rounded hover:bg-indigo-100 text-center">Duplicate Remover</Link>
          <Link to="/password-generator" className="p-4 bg-indigo-50 rounded hover:bg-indigo-100 text-center">Password Generator</Link>
          <Link to="/bmi-calculator" className="p-4 bg-indigo-50 rounded hover:bg-indigo-100 text-center">BMI Calculator</Link>
          <Link to="/currency-converter" className="p-4 bg-indigo-50 rounded hover:bg-indigo-100 text-center">Currency Converter</Link>
        </div>
      </div>
      <AdPlaceholder />
    </div>
  )
}
