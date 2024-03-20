import React from 'react';
import Branch from '../components/Branch';
import C21_EC_COURSE_STRUCTURE from '../files/C21_EC/C21_EC_COURSE_STRUCTURE.pdf';
import C21_EC_I_SEM from '../files/C21_EC/C21_EC_I_SEM.pdf';
import C21_EC_II_SEM from '../files/C21_EC/C21_EC_II_SEM.pdf';
import C21_EC_III_SEM from '../files/C21_EC/C21_EC_III_SEM.pdf';
import C21_EC_IV_SEM from '../files/C21_EC/C21_EC_IV_SEM.pdf';
import C21_EC_V_SEM from '../files/C21_EC/C21_EC_V_SEM.pdf';
import C21_EC_VI_SEM from '../files/C21_EC/C21_EC_V_SEM.pdf';


const Ece = () => {
    const text = "Diploma in Electrical Engineering at Government Polytechnic College, Hyderabad is a 3 years course at the After 10th level. The course offers admission to 120 students. The total tuition fee for Government Polytechnic College, Hyderabad Diploma in Electrical Engineering is INR 6,000. Apart from the tuition fee, there is a one-time admission fee of amount INR 200 that students are required to pay in addition to the tuition fee."

    const files = [C21_EC_COURSE_STRUCTURE, C21_EC_I_SEM, C21_EC_II_SEM, C21_EC_III_SEM, C21_EC_IV_SEM, C21_EC_V_SEM, C21_EC_VI_SEM]
    return (
        <div className='EC'>
            <Branch
                para={text}
                pdfs={files}
            />
        </div>
    )
}

export default Ece;