import { NextResponse } from 'next/server';

export async function GET(request) {
  // Sua lógica para gerar ou servir o PDF

  const pdfBuffer = await generatePdf(); // Exemplo de função para gerar o PDF

  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="adelino_masioli.pdf"',
    },
  });
}

// Função fictícia para gerar um PDF
async function generatePdf() {
  // Seu código para gerar o PDF aqui
  return Buffer.from('PDF content here');
}
