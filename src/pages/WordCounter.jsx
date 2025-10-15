import React, {useState} from 'react'
import { Helmet } from 'react-helmet-async'
import AdPlaceholder from '../components/AdPlaceholder'

export default function WordCounter() {
  const [text, setText] = useState('')

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
  const charCount = text.length

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Word Counter – QuickToolsPRO</title>
        <meta name="description" content="Count words & characters instantly online. Free, fast, no login required."/>
      </Helmet>
      <div className="card">
        <h2 className="text-xl font-bold">Word Counter</h2>
        <textarea
          className="w-full p-3 mt-2 border rounded h-40"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Paste or type text here"
        />
        <div className="mt-2 text-gray-700">
          <p>Words: {wordCount}</p>
          <p>Characters: {charCount}</p>
        </div>
      </div>
      <AdPlaceholder />
    </div>
  )
}
