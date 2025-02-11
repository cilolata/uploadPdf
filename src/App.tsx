/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { PdfViewer } from './pdfViewer';

function App() {
  const [data, setData] = useState<string>()

  const blobToBase64 = async (blob: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result)
      reader.onerror = err => reject(err)
      reader.readAsDataURL(blob)
    })
  }

  const upload = async (event: any) => {
    const file = event.target.files[0];
    if (!file) return
    const data = await blobToBase64(file)
    setData(data as string)
  }

  return (
    <>
      <div>
        <input type="file" accept="application/pdf" onChange={upload} />
      </div>
      {data && (
        <PdfViewer pdfBase64={data} />
      )}
    </>
  );
}

export default App
