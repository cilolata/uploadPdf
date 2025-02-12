import React, { useEffect, useState } from "react"
import { pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PdfViewerProps {
    pdfBase64: string;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({ pdfBase64 }) => {
    const [images, setImages] = useState<string[]>([])

    useEffect(() => {
        const handleDataToImage = async () => {
            const pdf = await pdfjs.getDocument(pdfBase64).promise;
            const imageArray = [];
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const scale = 2;
                const viewport = page.getViewport({ scale });
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");
                if (!context) {
                    console.error("Failed to get canvas context");
                    continue;
                }
                canvas.width = viewport.width;
                canvas.height = viewport.height;

                await page.render({ canvasContext: context, viewport }).promise;
                const imgDataURI = canvas.toDataURL("image/png"); // Converte para PNG
                imageArray.push(imgDataURI);
            }
            setImages(imageArray)
        }

        handleDataToImage()
    }, [pdfBase64])

    return (
        <div>
            {images.map((imgSrc, index) => (
                <img key={index} src={imgSrc} alt={`Página ${index + 1}`} style={{ maxWidth: "100%", marginBottom: "10px" }} />
            ))}
        </div>
    )

}