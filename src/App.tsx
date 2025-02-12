/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { PdfViewer } from './reactPdf/pdfViewer';
import { PdfViewerPdfJs } from './pdfjs/pdfViewerPdfJs';

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
    <div
      style={{
        width: '100%',
        height: '100%',
      }}>
      <div>
        <input type="file" accept="application/pdf" onChange={upload} />
      </div>
      {data && (
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-around'
        }}>
          <div style={{
            width: '400px',
            height: '400px',
            marginTop: '1rem',
          }}>
            <p>React-Pdf</p>
            <PdfViewer pdfBase64={data} />
          </div>
          <div style={{
            width: '400px',
            height: '400px',
            marginTop: '1rem',
          }}>
            <p>PDF-Js</p>
            <PdfViewerPdfJs pdfBase64={data} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App
