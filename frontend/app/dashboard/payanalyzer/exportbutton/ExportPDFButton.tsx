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

    const headers = Object.keys(data[0] || {});
    const columnWidths = Array(headers.length).fill("*"); // Adjust column widths as needed

    const docDefinition: TDocumentDefinitions = {
      pageOrientation: "landscape",
      pageSize: "B0",
      content: [
        { text: "Pay Equity Data", style: "header" },
        {
          table: {
            headerRows: 1,
            widths: columnWidths,
            body: [
              headers.map((header) => ({ text: header, style: "tableHeader" })), // Header row
              ...data.map((row) =>
                headers.map((header) => ({
                  text: String(row[header]),
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
          fontSize: 10,
          color: "white",
          fillColor: "#4db6ac",
          margin: [0, 5, 0, 5],
        },
        tableData: {
          fontSize: 8,
          margin: [0, 2, 0, 2],
          alignment: "left",
        },
      },
      pageMargins: [20, 60, 20, 30],
    };

    pdfMake.createPdf(docDefinition).download("pay_equity_analysis.pdf");
  };

  return (
    <button
      onClick={generatePdf}
      className="rounded-md bg-blue-400 p-2 text-sm text-white"
    >
      Export as PDF
    </button>
  );
};

export default ExportPdfButton;
