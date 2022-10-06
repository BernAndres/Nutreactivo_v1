import React from 'react';
import PDFMed from '../pdfs/Instructivo_mediciones.pdf';
import '../App.css';

function InstructivoPDF() {
    return(
        <div className='container-fluid'>
            {/* <iframe src='../pdfs/Instructivo_mediciones.pdf'></iframe>  */}
            <iframe src={PDFMed} className='pdfsty'></iframe>
        </div>
    )
}

export default InstructivoPDF;