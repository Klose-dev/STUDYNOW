import "../../Style/Pages/ContactUs.css"
import GitHub from "../../Icons/github";
import LinkedIn from "../../Icons/linkedin";
import Gmail from "../../Icons/Gmail";

export default function ContactUs() {
    return (
        <div className='page contactus'>
            <div className="developers-container single-dev">
                <div className="developer-card fade-in">
                    <div className="role-badge">Lead Developer</div>
                    <h1 className="dev-name">Klose</h1>
                    <p className="dev-description">Full Stack Engineer specializing in modern web architectures and automated scheduling systems.</p>
                    
                    <div className="contact-info">
                        <div className="info-item">
                            <span className="label">Email:</span>
                            <a href="mailto:klose@example.com" className="value">klose@example.com</a>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com" className="social-icon" target="_blank" rel="noreferrer">
                            <GitHub size={28} />
                        </a>
                        <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noreferrer">
                            <LinkedIn size={29} />
                        </a>
                        <a href="mailto:klose@example.com" className="social-icon" target="_blank" rel="noreferrer">
                            <Gmail size={40} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}