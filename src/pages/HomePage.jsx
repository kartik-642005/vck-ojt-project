import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="back">
        <main className="container">
          <section className="card2">
            <section className="txt1">
              <img src="./Images/vck.png"></img>
              <h1 className="centered">
                Welcome to Vivekanand<br/>
                College!<br/>
                 <h5>Ready to start your journey with us?</h5>
              <a className="but-hero" href="/admissions">Apply Now</a>
               
              </h1>
             
              
            </section>
            
          

            <p>
              <strong>Vivekanand College</strong> is a premier educational
              institution dedicated to fostering academic excellence,
              innovation, and holistic development. Established in{" "}
              <em>[Year of Establishment, e.g., 1980]</em>, we have proudly
              served generations of students, empowering them to achieve their
              full potential.
            </p>
            <p>
              At Vivekanand College, we believe in a vibrant learning
              environment that extends beyond textbooks. Our state-of-the-art
              facilities, experienced faculty, and diverse student community
              create a unique ecosystem where curiosity thrives and future
              leaders are shaped.
            </p>

            <h2>Why Choose Vivekanand College?</h2>
            <hr />
            <ul>
              <li>
                <strong>Legacy of Excellence:</strong> Decades of commitment to
                quality education.
              </li>
              <li>
                <strong>Experienced Faculty:</strong> Learn from renowned
                experts and passionate educators.
              </li>
              <li>
                <strong>Modern Facilities:</strong> Well-equipped labs,
                expansive library, and comfortable campus.
              </li>
              <li>
                <strong>Holistic Development:</strong> Focus on co-curricular
                activities, sports, and community service.
              </li>
              <li>
                <strong>Strong Placements:</strong> Excellent career
                opportunities with leading companies.
              </li>
            </ul>
            <h3>Campus Life & Facilities</h3>
             <hr/>
            <div className="im-hm">
                          <img className="hm-img-fac" src="./Images/facilities.jpeg"></img>
            <img className="hm-img-fac" src="./Images/campus.jpg"></img>
            </div>
            <div className="txt-bot-hm">
            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
              <p>Ready to explore our courses?</p>
              <a className="but-bot-hm" href="/courses">Explore Cources</a>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
