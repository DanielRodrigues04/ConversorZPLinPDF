import { ZPLConversionOptions } from '../types/zpl';

export async function convertZPLtoPDF(zplCode: string, options: ZPLConversionOptions): Promise<Blob> {
  try {
    const formData = new FormData();
    formData.append('file', new Blob([zplCode], { type: 'text/plain' }));

    const response = await fetch(`http://api.labelary.com/v1/printers/${options.dpi}dpmm/labels/${options.width}x${options.height}/0/`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.blob();
  } catch (error) {
    console.error('Error converting ZPL to PDF:', error);
    throw new Error('Failed to convert ZPL to PDF');
  }
}