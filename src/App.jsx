import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import './styles/Pages.css';
import Admissions from "./pages/Admissions";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";

const App = ()=>{
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={ <HomePage/>} />
            <Route path="/about" element={ <AboutPage/>} />
            <Route path="/courses" element={< CoursesPage/>}/>
            <Route path="/contact" element={< ContactPage/>}/>
            <Route path="/admissions" element={<Admissions/>}/>
            </Routes>
      <ChatbotComponent/>
      </Router>

    </div>

  )
}
export default App;