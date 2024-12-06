import React from 'react';

interface ZPLPreviewProps {
  zplContent: string;
}

export function ZPLPreview({ zplContent }: ZPLPreviewProps) {
  if (!zplContent) return null;

  return (
    <div className="w-full mt-4">
      <h3 className="text-lg font-semibold mb-2">ZPL Preview</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        {zplContent}
      </pre>
    </div>
  );
}