import React, { useState } from 'react';
import { FileUploader } from './components/FileUploader';
import { ZPLPreview } from './components/ZPLPreview';
import { useZPLConverter } from './hooks/useZPLConverter';
import { DEFAULT_LABEL_CONFIG } from './utils/constants';
import { Printer, Download } from 'lucide-react';

function App() {
  const [zplContent, setZplContent] = useState<string>('');
  const { isConverting, convertAndDownload } = useZPLConverter();

  const handleConvertAndDownload = async () => {
    try {
      await convertAndDownload(zplContent, DEFAULT_LABEL_CONFIG);
    } catch (error) {
      alert('Failed to convert ZPL to PDF. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <Printer className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-800">
              ZPL to PDF Converter
            </h1>
          </div>

          <p className="text-gray-600 mb-6">
            Convert your ZPL code to PDF format for 10x15cm labels (203 DPI)
          </p>

          <FileUploader onFileLoad={setZplContent} />
          
          <ZPLPreview zplContent={zplContent} />

          {zplContent && (
            <button
              onClick={handleConvertAndDownload}
              disabled={isConverting}
              className="mt-4 flex items-center justify-center w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              <Download className="w-5 h-5 mr-2" />
              {isConverting ? 'Converting...' : 'Convert to PDF'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;