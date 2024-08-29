// src/components/Dashboard/ExportPdfButton.tsx
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from "pdfmake/interfaces";

// Load pdfMake fonts
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const ExportPdfButton = ({ data }: { data: any[] }) => {
  const generatePdf = () => {
    if (data.length === 0) {
      console.error("No data to export");
      return;
    }

    const columnCount = Object.keys(data[0] || {}).length;

    // Define a default column width
    const defaultWidth = 40; // Adjust as necessary

    // Calculate percentage width for each column
    const columnWidths = Array(columnCount).fill(defaultWidth);

    // Define document content
    const docDefinition: TDocumentDefinitions = {
      pageOrientation: "landscape", // Landscape orientation for more space
      pageSize: "4A0", // A4 page size
      // Adjust margins to fit content
      content: [
        { text: "Pay Equity Data", style: "header" },
        {
          table: {
            headerRows: 1,
            widths: columnWidths,
            body: [
              Object.keys(data[0] || {}).map((key) => ({
                text: key,
                style: "tableHeader",
              })), // Header row
              ...data.map((row) =>
                Object.values(row).map((value) => ({
                  text: String(value),
                  style: "tableData",
                })),
              ), // Data rows
            ],
          },
          layout: {
            fillColor: (rowIndex: number) =>
              rowIndex % 2 === 0 ? "#f9f9f9" : null,
            hLineColor: () => "#ddd",
            vLineColor: () => "#ddd",
            paddingLeft: () => 8,
            paddingRight: () => 8,
            paddingTop: () => 4,
            paddingBottom: () => 4,
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        tableHeader: {
          bold: true,
          fontSize: 10, // Smaller font size for headers
          color: "black",
          fillColor: "#4db6ac",
          margin: [0, 5, 0, 5],
        },
        tableData: {
          fontSize: 8, // Smaller font size for data
          margin: [0, 2, 0, 2], // Reduced margins for better fit
          alignment: "left",
        },
      },
      pageMargins: [20, 60, 20, 30], // Adjust margins to fit content
    };

    // Generate and download the PDF
    pdfMake.createPdf(docDefinition).download("pay_equity_analysis.pdf");
  };

  return (
    <button
      onClick={generatePdf}
      className="export-button rounded-md bg-blue-500 p-2 text-sm text-white"
    >
      Export as PDF
    </button>
  );
};

export default ExportPdfButton;
