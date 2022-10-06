import React from 'react';
import PDFMed from '../pdfs/Instructivo_mediciones.pdf';
import '../App.css';

function InstructivoPDF() {
    return(
        <>
            {/* <iframe src='../pdfs/Instructivo_mediciones.pdf'></iframe>  */}
            <iframe src={PDFMed} className='pdfsty'></iframe>
        </>
    )
}

export default InstructivoPDF;