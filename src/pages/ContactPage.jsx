import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import '../styles/Pages.css';
const  ContactPage = () =>{
    return(
        <div>
            <Header/>
            <div className="back">
            <main className="container1">
        <section className="card2">
          <h1 className="title">Contact Us</h1>
          <p style={{textalign:'center'}}>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
      <hr/>
      <div class="section">
      <h2>General Enquiries</h2>
      <p>Vivekanand College Main Campus</p>
      <p>Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071, India</p>
      <p>Phone: +91 12345 67890</p>
      <p>Email: info@vivekanandcollege.edu</p>
      <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
    </div>
    <hr/>
    <div class="section">
      <h2>Admissions Office</h2>
      <p>For admission-related queries:</p>
      <p>Phone: +91 98765 43210</p>
      <p>Email: admissions@vivekanandcollege.edu</p>
    </div>
    <hr/>
    <div class="section">
      <h2>Student Support Services</h2>
      <p>For academic advising and support:</p>
      <p>Phone: +91 87654 32109</p>
      <p>Email: studentsupport@vivekanandcollege.edu</p>
    </div>
    <hr/>
    <div class="section">
      <h2>Find Us on the Map</h2>
      <p>You can locate us using the map below:</p>
      <p><a href="https://www.google.com/maps">View on Google Maps</a></p>
    </div>
    <hr/>
    <div class="section">
      <h2>Send Us a Message</h2>
      <p>[Include a contact form here later if needed]</p>
    </div>

        </section>
      </main>
      </div>
        <Footer/>

        </div>
    )
}
export default ContactPage;