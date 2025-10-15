import React, {useState} from 'react'
import { Helmet } from 'react-helmet-async'
import AdPlaceholder from '../components/AdPlaceholder'

export default function DuplicateRemover() {
  const [text, setText] = useState('')

  const removeDuplicates = () => {
    const lines = text.split('\n')
    return [...new Set(lines)].join('\n')
  }

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Duplicate Remover – QuickToolsPRO</title>
        <meta name="description" content="Remove duplicate lines from your text instantly."/>
      </Helmet>
      <div className="card">
        <h2 className="text-xl font-bold">Duplicate Remover</h2>
        <textarea
          className="w-full p-3 mt-2 border rounded h-40"
          value={text}
          onChange={e=>setText(e.target.value)}
          placeholder="Paste text with duplicates here"
        />
        <div className="mt-2 p-3 bg-gray-50 border rounded whitespace-pre-wrap">{removeDuplicates()}</div>
      </div>
      <AdPlaceholder />
    </div>
  )
}
