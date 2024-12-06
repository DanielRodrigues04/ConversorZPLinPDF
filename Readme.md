# ZPL to PDF Converter

A modern web application that converts ZPL (Zebra Programming Language) code to PDF format, specifically designed for 10x15cm thermal printer labels at 203 DPI resolution.


## Features

- 📤 Drag and drop file upload
- 📝 ZPL code preview
- 🔄 Real-time conversion
- ⬇️ Instant PDF download
- 📏 Optimized for 10x15cm labels
- 🖨️ 203 DPI support for thermal printers

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/zpl-to-pdf-converter.git
cd zpl-to-pdf-converter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Click the upload area or drag and drop a ZPL file (`.txt` or `.zpl` extension)
2. Preview the ZPL content
3. Click "Convert to PDF" to generate and download the PDF file
4. The PDF will be automatically downloaded and ready for printing

## API Integration

The application uses the Labelary API to convert ZPL to PDF. The service supports:

- Multiple label formats
- Various DPI settings
- Real-time preview
- Direct PDF conversion

## Project Structure

```
src/
├── components/          # React components
│   ├── FileUploader.tsx
│   └── ZPLPreview.tsx
├── hooks/              # Custom React hooks
│   └── useZPLConverter.ts
├── services/           # API and external services
│   └── zplConverter.ts
├── types/              # TypeScript type definitions
│   └── zpl.ts
├── utils/              # Utility functions and constants
│   └── constants.ts
└── App.tsx            # Main application component
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

The project uses ESLint and TypeScript for code quality and consistency. Configuration files are included in the repository.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Labelary API](http://labelary.com/service.html) for ZPL to PDF conversion
- [Lucide Icons](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for the build tool

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.