import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import pdfFile from "../../assets/pdf/document.pdf";
import { getFilePlugin } from "@react-pdf-viewer/get-file";

const PdfViewer = () => {
  const [defaultPdfFile] = useState(pdfFile);
  const getFilePluginInstance = getFilePlugin();
  const { DownloadButton } = getFilePluginInstance;
  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
        <div
          className="rpv-core__viewer"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            height: "700px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              backgroundColor: "#eeeeee",
              borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
              display: "flex",
              padding: "4px",
            }}
          >
            <DownloadButton />
          </div>
          <div
            style={{
              flex: 1,
              overflow: "hidden",
            }}
          >
            <Viewer
              fileUrl={defaultPdfFile}
              plugins={[getFilePluginInstance]}
            />
          </div>
        </div>
      </Worker>
    </>
  );
};

export default PdfViewer;
