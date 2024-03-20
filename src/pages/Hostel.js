import React from 'react';
import './Hostel.css';
import hostel1 from '../assets/hostel1.jpg';
import hostel2 from '../assets/hostel2.jpg';

const Hostel = () => {
    return (
        <div className='hostel'>
            <h1>Admission in College Hostel</h1>
            <p>To secure admission into a government hostel as a non-local student, thorough research and preparation are essential. Begin by familiarizing yourself with the admission criteria and procedures outlined by the hostel authorities. Typically, non-local students may need to provide proof of enrollment in an educational institution within the area, along with documents verifying their non-local status, such as a domicile certificate. It's crucial to meet all application deadlines and provide accurate information during the submission process. Additionally, demonstrating a genuine need for hostel accommodation and adhering to any additional requirements set forth by the hostel administration can bolster your application. Maintaining open communication with hostel staff and seeking guidance from academic advisors or student support services can also enhance your chances of securing a spot in the government hostel as a non-local student.</p>

            <div className='hostel-img'>
                <img src={hostel1} />
                <img src={hostel2} />
            </div>

            <h2>Selection Criteria for 2nd and 3rd Year Students</h2>
            <p>To get a seat in the hostel for the 2nd and 3rd year, students must give their best performance in their previous year. The selection criteria for 2nd and 3rd-year students into the hostel are done in two ways:</p>

            <ol>
                <li>
                    <h3>Open Category:</h3>
                    <p>In this category, the students who secure top marks in their batch, the top 10 students get a seat in the hostel according to this category.</p>
                </li>
                <li>
                    <h3>Caste Reservation:</h3>
                    <p>In this category, students can get a seat in the government hostel based on their caste reservation. The hostel staff can check the same caste students, and among them, those who achieve top marks will be given seats in the hostel. It also depends on the same student caste ratio.</p>
                </li>
            </ol>
            <h1>College Hostel Rules</h1>
            <ul>
                <li><strong>During College Working Hours:</strong> Students should not be present in the hostel premises.</li>
                <li><strong>Gate Timings:</strong> The college gate will be closed at 9:00 pm and open at 5:30 am.</li>
                <li><strong>Property Damage:</strong> Students should not damage any hostel property. In case of any damage, the whole branch is responsible.</li>
                <li><strong>Respect for Staff:</strong> Students should respect hostel staff and workers who are working in the hostel.</li>
                <li><strong>Mess Bill Payment:</strong> Students should pay the mess bill on time.</li>
                <li><strong>Emergency Situations:</strong> In case of any emergency, with Hostel authority permission, students will be permitted to go outside at any time.</li>
                <li><strong>Injury Responsibility:</strong> In case of any room damage where a student gets injured, if the student did not consult with hostel authorities at the time of injury, the hostel authorities are not responsible for the incident.</li>
            </ul>
        </div>
    )
}

export default Hostel;