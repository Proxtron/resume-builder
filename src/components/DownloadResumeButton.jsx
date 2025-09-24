
export default function DownloadResumeButton() {
  function handleDownload() {
    const style = document.createElement("style");
    style.textContent = `
      @media print {
        body * {
          visibility: hidden;
        }
        #resume-page, #resume-page * {
          visibility: visible;
        }
        #resume-page {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
      }
    `;
    document.head.appendChild(style);
    
    // Trigger print dialog
    window.print();
    
    // Remove the style after printing
    setTimeout(() => {
      document.head.removeChild(style);
    }, 1000);
  }

  return <button className="download-btn" onClick={handleDownload}>Download</button>;
}
