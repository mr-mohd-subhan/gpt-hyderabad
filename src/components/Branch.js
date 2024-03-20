import React from 'react';
import './Branch.css';

const Branch = ({ para, pdfs }) => {
    return (
        <div className='branch'>
            <p className='branch-para'>
                {para}
            </p>
            <h1 className="head-resources">Download Resources</h1>


            <a className="file-link" href={pdfs[0]} download={"curriculum"}>Download Curriculum</a>



            <a className="file-link" href={pdfs[1]} download={"firstSemester"}>First Semester</a>



            <a className="file-link" href={pdfs[2]} download={"secondSemester"}>Second Semester</a>



            <a className="file-link" href={pdfs[3]} download={"thirdSemester"}>Third Semester</a>



            <a className="file-link" href={pdfs[4]} download={"fourthSemester"}>Fourth Semester</a>



            <a className="file-link" href={pdfs[5]} download={"fifthSemester"}>Fifth Semester</a>



            <a className="file-link" href={pdfs[6]} download={"sixthSemester"}>Sixth Semester</a>

        </div >
    )
}

export default Branch; 