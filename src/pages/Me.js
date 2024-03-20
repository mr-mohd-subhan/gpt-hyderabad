import React from 'react';
import Branch from '../components/Branch';
import C21_ME_COURSE_STRUCTURE from '../files/C21_ME/C21_ME_COURSE_STRUCTURE.pdf';
import C21_ME_I_SEM from '../files/C21_ME/C21_ME_I_SEM.pdf';
import C21_ME_II_SEM from '../files/C21_ME/C21_ME_II_SEM.pdf';
import C21_ME_III_SEM from '../files/C21_ME/C21_ME_III_SEM.pdf';
import C21_ME_IV_SEM from '../files/C21_ME/C21_ME_IV_SEM.pdf';
import C21_ME_V_SEM from '../files/C21_ME/C21_ME_V_SEM.pdf';
import C21_ME_VI_SEM from '../files/C21_ME/C21_ME_V_SEM.pdf';


const Me = () => {
    const text = "Diploma in Mechanical Engineering at Government Polytechnic College, Hyderabad is a 3 years course at the After 10th level. The course offers admission to 120 students. The total tuition fee for Government Polytechnic College, Hyderabad Diploma in Mechanical Engineering is INR 6,000. Apart from the tuition fee, there is a one-time admission fee of amount INR 200 that students are required to pay in addition to the tuition fee."

    const files = [C21_ME_COURSE_STRUCTURE, C21_ME_I_SEM, C21_ME_II_SEM, C21_ME_III_SEM, C21_ME_IV_SEM, C21_ME_V_SEM, C21_ME_VI_SEM]
    return (
        <div className='ME'>
            <Branch
                para={text}
                pdfs={files}
            />
        </div>
    )
}

export default Me;