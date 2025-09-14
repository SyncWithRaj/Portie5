import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const exportToPdf = (elementId, fileName = 'portfolio.pdf') => {
  const input = document.getElementById(elementId);
  if (!input) {
    console.error(`Element with id "${elementId}" not found.`);
    return;
  }

  // Add a temporary class to the body to handle styles during export
  document.body.classList.add('pdf-export-active');

  html2canvas(input, {
    scale: 2, // Higher scale for better resolution
    useCORS: true,
    logging: false,
    windowWidth: 1280, // Use a fixed width for consistent rendering
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    
    // Create a PDF with A4 dimensions
    const pdf = new jsPDF({
      orientation: 'p',
      unit: 'px',
      format: 'a4'
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    let heightLeft = pdfHeight;
    let position = 0;

    // Add the first page
    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
    heightLeft -= pdf.internal.pageSize.getHeight();

    // Add new pages if the content is longer than one page
    while (heightLeft > 0) {
      position = heightLeft - pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();
    }
    
    // Save the PDF
    pdf.save(fileName);

    // Clean up the temporary class
    document.body.classList.remove('pdf-export-active');
  }).catch(err => {
    console.error("Error generating PDF:", err);
    document.body.classList.remove('pdf-export-active');
  });
};

