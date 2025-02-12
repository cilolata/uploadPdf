import { pdfjsLib } from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?worker';

// Definir o worker manualmente
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export default pdfjsLib;