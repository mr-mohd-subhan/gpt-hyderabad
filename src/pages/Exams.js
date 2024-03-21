import React from 'react';
import './Exams.css';

const Exams = () => {
    return (
        <div className='exams'>
            <h1>Examinations in Diploma Courses</h1>

            <div className="section">
                <h2>Attendance Policy</h2>
                <p>a) The Academic Year for all the Courses usually shall be from June 1st week of the year of admission to the 31st March of the succeeding year.</p>
                <p>b) The Working days in a week shall be from Monday to Saturday.</p>
                <p>c) There shall be 8 periods of 45 minutes duration on all working days.</p>
                <p>d) The minimum number of Instructional working days for each semester shall be 90 days excluding examination days/ Public holidays/ orientation programme/ Sports and games Period. If this prescribed minimum is not achieved due to any reason, special arrangements shall be made to conduct classes to cover the syllabus.</p>
            </div>

            <div className="section">
                <h2>Eligibility of Attendance to Appear for the End Examination</h2>
                <div className="subsection">
                    <p>a) A candidate shall be permitted to appear for the end examination in all courses, if he or she puts up a minimum attendance of 75% of Instructional working days during the Semester.</p>
                </div>
                <div className="subsection">
                    <p>b) Condonation of shortage of attendance in aggregate upto 10% (65% and above and below 75%) in each semester may be granted on medical grounds.</p>
                </div>
                <div className="subsection">
                    <p>c) Candidates having less than 65% attendance shall be detained.</p>
                </div>
                <div className="subsection">
                    <p>d) Student attendance is recorded, twice a day using Aadhar Based Biometric Attendance System with a minimum gap of 6 hours for full day and three hours for half a day attendance.</p>
                </div>
                <div className="subsection">
                    <p>e) Students whose shortage of attendance is not condoned in any semester are not eligible to take their end examination of that class and their admissions shall stand cancelled. They may seek re-admission for that semester when offered next.</p>
                </div>
                <div className="subsection">
                    <p>f) A stipulated fee shall be payable towards condonation for shortage of attendance. (as per the Board norms)</p>
                </div>
            </div>

            <h1>Scheme of Examination</h1>

            <div className="section">
                <h2>I, II, III, IV, V and VI Semesters</h2>
                <h3>Theory Examination</h3>
                <p>Each Semester End Examination (SEE) carries 40 marks in respect of specified courses of 2 hours duration, along with 60 marks for continuous evaluation.</p>
                <ul>
                    <li>The Semester End Examination paper shall be set for 40 marks.</li>
                </ul>
                <h3>Practical Examination</h3>
                <p>Each laboratory course carries 40 marks of 3 hours duration and 60 Internal marks for continuous internal evaluation.</p>
            </div>

            <h1>Examination Pattern</h1>

            <div className="section">
                <h2>General Information:</h2>
                <p>Total course content shall be divided into three parts as Part-I, Part-II, Part-III.</p>
                <p>Mid sem 1 Exam should be conducted from Part-I.</p>
                <p>Mid sem II Exam should be conducted from Part-II.</p>
                <p>End Examination to be conducted for 40 marks, of which 20 Marks should be covered from Part-III and the remaining 20 marks covered from overall course contents.</p>
            </div>

            <div className="section">
                <h2>Internals Division:</h2>
                <ul>
                    <li>Slip Test 1 - 5 marks</li>
                    <li>Slip Test 2 - 5 marks</li>
                    <li>Assignments - 5 marks</li>
                    <li>Seminar/Paper Presentation/Group Discussion/Quiz - 5 marks</li>
                </ul>
            </div>

            <div className="section">
                <h2>Mid Semester Question Paper Pattern:</h2>
                <h3>A. General:</h3>
                <ul>
                    <li>Part A consists of 'Remember' based questions.</li>
                    <li>Part B consists of 'Understanding' based questions.</li>
                    <li>Part C consists of 'Application' based questions.</li>
                </ul>
                <h3>B. Open Book System:</h3>
                <p>In the Open Book System, all parts (A, B, and C) consist of Understanding and Application based questions only.</p>
            </div>

            <div className="section">
                <h2>Semester End Examination:</h2>
                <ul>
                    <li>Regular and backlog examinations are conducted separately.</li>
                    <li>Backlog examinations are held before the commencement of the academic year to provide sufficient time for students to prepare.</li>
                </ul>
            </div>


            <div className="section">
                <h2>Examination Pattern (Semester End Examination)</h2>
                <h2>A. General</h2>
                <p>
                    The Semester End Examination follows a structured approach.
                    <br />
                    <br />
                    <strong>Part A:</strong>
                    <br />
                    Part A of the examination covers 'Remember' based questions. These questions are derived from Chapter 5&6 of Part 3 of the course content, as well as from the overall course content.
                    <br />
                    <br />
                    <strong>Part B:</strong>
                    <br />
                    For Part B, questions are drawn from Chapter 5&6 of Part 3 and the overall course content.
                    <br />
                    <br />
                    <strong>Part C:</strong>
                    <br />
                    Similarly, questions in Part C are based on Chapter 5&6 of Part 3 and the overall course content.
                </p>
            </div>

            <h1>Credits and CGPA Information</h1>

            <div className="section">
                <h2>Credits</h2>
                <ul>
                    <li>For theory courses: 3 Credits</li>
                    <li>For Laboratory courses: 1.5 Credits</li>
                    <li>Skill up-gradation: 2.5 Credits</li>
                    <li>Total credits per semester: 25 Credits</li>
                </ul>
            </div>

            <div className="section">
                <h2>CGPA Calculation</h2>
                <p>CGPA will be calculated with courses passed in Regular Examinations only and no CGPA will be allowed for backlog passed courses.</p>
                <p>Backlog exams will count for credits.</p>
                <p>Skill upgradation course will not count for CGPA but for Credits.</p>
                <p>Minimum credits for obtaining Diploma are 130 out of 150.</p>
            </div>
        </div>
    );
}

export default Exams;
