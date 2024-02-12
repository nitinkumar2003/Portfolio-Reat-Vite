import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";
import pdf from '../../../public/Pdf/Nitin_kumar.pdf'
const Preview = () => {



    const downloadCV = () => {
        var downloadLink = document.createElement('a');
        downloadLink.href = pdf;
        downloadLink.download = 'Nitin_CV.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    return (
        <>
            <button
                onClick={() => downloadCV()}
                className='cv_download'
            >
                <AiOutlineDownload />
                &nbsp;Download CV
            </button>
        </>
    )
}

export default Preview