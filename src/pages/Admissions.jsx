import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../styles/Pages.css";
const Admissions =()=>{
    return(
        <div>
            <Header/>
            <div className="back">
             <main className="container">
        <section className="card2">
          <h1 className="title">Admissions at Vivekanand College</h1>
          <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.</p>
          <p>Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p>
          <h3>Eligibility Criteria for Undergraduate Programs</h3><hr>
          </hr>
<table style={{width:'100%'}}>
    <tr>
        <th>Program</th>	
        <th>Minimum Qualification</th>	
        <th>Required Subjects</th>	
        <th>Minimum Marks (%)</th>
    </tr>
    <tr>
        <td>B.Sc.</td> 
        <td>Computer Science</td>	
        <td>10+2 (or equivalent)</td>	
        <td>Physics, Chemistry, Maths	50%</td>
    </tr>
    <tr>
        <td>B.Com. Accounting & Finance</td>	
        <td>10+2 (or equivalent)</td>	
        <td>Commerce Stream</td>	
        <td>45%</td>
    </tr>
    <tr>
        <td>B.A. English Literature</td> 
        <td>10+2 (or equivalent)</td>	
        <td>Any Stream</td>	
        <td>40%</td>

    </tr>


</table>
<h3>Application Process</h3>
<ol type="1">
        <li><b>Online Application:</b> Fill out the application form available on our portal.</li>
        <li><b>Document Submission:</b> Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
        <li><b>Entrance Exam (if applicable):</b>Appear for the college's entrance examination.</li>
        <li><b>Merit List & Interview:</b> Check the merit list and attend the interview if shortlisted.</li>
        <li><b>Fee Payment:</b> Complete the admission by paying the required fees.</li>
</ol>
<p>For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our <Link to="/courses">Courses page</Link> or <Link to="/contact">Contact us</Link> directly.</p>
                
                    </section>
                </main>
                </div>
            <Footer/>
        </div>
    )
}
export default Admissions;