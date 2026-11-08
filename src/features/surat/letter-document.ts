import { LETTERHEAD } from "@/data/letters";
import type { LetterTemplate } from "@/types";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/**
 * Builds a Word-compatible HTML document for a letter template. Word opens
 * HTML saved with the `.doc` extension, so no external library is needed.
 */
export function buildLetterDocHtml(template: LetterTemplate): string {
  const fields = template.fields
    .map(
      (field) =>
        `<tr><td width="200">${escapeHtml(field.label)}</td><td width="15">:</td><td>${escapeHtml(field.value)}</td></tr>`,
    )
    .join("\n");

  const signatureWidth = Math.floor(100 / template.signatures.length);
  const signatures = template.signatures
    .map((signature) => {
      const name = `( ${escapeHtml(signature.name)} )`;
      return `<td width="${signatureWidth}%">${escapeHtml(signature.title)}<br><br><br><br><br>${
        signature.bold ? `<strong>${name}</strong>` : name
      }</td>`;
    })
    .join("\n");

  return `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(template.title)}</title>
  <style>
    body { font-family: 'Calibri', 'Arial', sans-serif; font-size: 12pt; line-height: 1.35; color: #000; }
    .header { text-align: center; border-bottom: 2pt solid #000; padding-bottom: 8px; margin-bottom: 16px; }
    .header h3 { margin: 0; font-size: 14pt; }
    .header h4 { margin: 0; font-size: 12pt; }
    .header p { margin: 0; font-size: 9pt; font-style: italic; }
    .title { text-align: center; margin: 16px 0; }
    .title h4 { text-decoration: underline; margin: 0; }
    table { width: 100%; margin: 12px 0; }
    td { padding: 4px 0; font-size: 11pt; vertical-align: top; }
    .signatures { margin-top: 30px; width: 100%; }
    .signatures td { text-align: center; font-size: 11pt; padding: 0 10px; }
  </style>
</head>
<body>
  <div class="header">
    <h3>${LETTERHEAD.line1}</h3>
    <h4>${LETTERHEAD.line2}</h4>
    <p>${LETTERHEAD.address}</p>
  </div>

  <div class="title">
    <h4>${escapeHtml(template.heading)}</h4>
    <p style="font-size: 10pt; margin: 3px 0 0 0;">${escapeHtml(template.number)}</p>
  </div>

  <p>${escapeHtml(template.intro)}</p>

  <table>
${fields}
  </table>

  <p>${escapeHtml(template.closing)}</p>
  <p>Demikian surat ini dibuat dengan sebenarnya agar dapat dipergunakan sebagaimana mestinya.</p>

  <br><br>
  <table class="signatures">
    <tr>
${signatures}
    </tr>
  </table>
</body>
</html>`;
}

/** Triggers a browser download of the letter as a `.doc` file. */
export function downloadLetterDoc(template: LetterTemplate): void {
  const html = buildLetterDocHtml(template);
  const blob = new Blob(["﻿" + html], { type: "application/msword" });
  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = template.filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

const PRINT_STYLES = `
  body { font-family: 'Times New Roman', Times, serif; padding: 25px; line-height: 1.5; color: #111; }
  h3, h4 { margin: 2px 0; }
  table { width: 100%; border-collapse: collapse; margin: 15px 0; }
  td { padding: 4px 2px; font-size: 14px; }
  p { font-size: 14px; }
  .text-center { text-align: center; }
  .flex { display: flex; justify-content: space-between; }
  .justify-end { justify-content: flex-end; }
  .underline { text-decoration: underline; }
  .font-bold { font-weight: 700; }
  .uppercase { text-transform: uppercase; }
  .italic { font-style: italic; }
  .mb-14 { margin-bottom: 56px; }
  .w-36 { width: 9rem; }
  .w-48 { width: 12rem; }
  .w-56 { width: 14rem; }
  .border-b-2 { border-bottom: 2px solid #111; padding-bottom: 8px; margin-bottom: 16px; }
  @media print { body { padding: 0; } }
`;

/** Opens a print window containing the rendered preview markup. */
export function printLetterMarkup(innerHtml: string): void {
  const printWindow = window.open("", "_blank", "width=800,height=900");
  if (!printWindow) return;

  printWindow.document.write(`
<html>
<head>
  <title>Cetak Template RT 07 RW 21 Blok Inai</title>
  <style>${PRINT_STYLES}</style>
</head>
<body>${innerHtml}</body>
</html>`);
  printWindow.document.close();
  printWindow.focus();

  setTimeout(() => {
    printWindow.print();
    printWindow.close();
  }, 300);
}
