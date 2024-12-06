import { useState } from 'react';
import { convertZPLtoPDF } from '../services/zplConverter';
import { ZPLConversionOptions } from '../types/zpl';

export function useZPLConverter() {
  const [isConverting, setIsConverting] = useState(false);

  const convertAndDownload = async (zplContent: string, options: ZPLConversionOptions) => {
    if (!zplContent) return;

    try {
      setIsConverting(true);
      const pdfBlob = await convertZPLtoPDF(zplContent, options);

      const url = URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'label.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Failed to convert ZPL to PDF');
    } finally {
      setIsConverting(false);
    }
  };

  return {
    isConverting,
    convertAndDownload
  };
}