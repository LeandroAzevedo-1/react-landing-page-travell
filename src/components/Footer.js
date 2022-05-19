import "./Footer.css"
import { FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";
const Footer =()=> {
    return (
        
        <div className="footer">
            <p>&copy; Leandro Azevedo </p>
            <div>
            
                <a rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/leandro-de-azevedo-souza-566200211/">
                <FiLinkedin/>
                </a>
                <a rel='noreferrer' target="_blank" href="https://github.com/LeandroAzevedo-1">
                <FiGithub />
                </a>
                <a rel='noreferrer' target="_blank" href="https://www.instagram.com/">
                <FiInstagram />
                </a>
            </div>
            
        </div>
    )
}
export default Footer