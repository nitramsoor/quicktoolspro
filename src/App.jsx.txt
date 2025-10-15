import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WordCounter from './pages/WordCounter'
import CaseConverter from './pages/CaseConverter'
import DuplicateRemover from './pages/DuplicateRemover'
import PasswordGenerator from './pages/PasswordGenerator'
import BMICalculator from './pages/BMICalculator'
import CurrencyConverter from './pages/CurrencyConverter'

export default function App(){
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-5xl mx-auto w-full p-6">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/word-counter" element={<WordCounter/>} />
            <Route path="/case-converter" element={<CaseConverter/>} />
            <Route path="/duplicate-remover" element={<DuplicateRemover/>} />
            <Route path="/password-generator" element={<PasswordGenerator/>} />
            <Route path="/bmi-calculator" element={<BMICalculator/>} />
            <Route path="/currency-converter" element={<CurrencyConverter/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}
