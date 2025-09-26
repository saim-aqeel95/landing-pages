import '../styles/footer.css'; // Make sure to create this file
import MAP from '../assets/img/footer_map.png'; // Placeholder for map image

// Import icons (you'd typically use a library like react-icons)
// For this example, I'll use simple text representations or common unicode symbols
// In a real project, you'd install and import icons, e.g., import { FaHome, FaInfoCircle, ... } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* Column 1: Company Info */}
        <div className="footer-column company-info">
          <h2 className="footer-logo">Moji Tech</h2>
          <p className="company-description">
            We work with an enthusiasm for taking on new challenges and presenting you with the best service possible.
          </p>
          <div className="social-links">
                        <a href="#" className="social-link" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="social-link" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-link" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
        </div>

        {/* Column 2: Useful Links */}
        <div className="footer-column useful-links">
          <h3 className="column-title">Useful Links</h3>
          <ul>
            <li><a href="#"><span className="icon">🏠</span> Home</a></li>
            <li><a href="#"><span className="icon">ℹ️</span> About</a></li>
            <li><a href="#"><span className="icon">📄</span> Final Insurance</a></li>
            <li><a href="#"><span className="icon">⚕️</span> Medicare</a></li>
            <li><a href="#"><span className="icon">🔗</span> ACA</a></li>
            <li><a href="#"><span className="icon">📞</span> Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Official Info */}
        <div className="footer-column official-info">
          <h3 className="column-title">Official Info:</h3>
          <p className="info-detail">
            <span className="icon">📍</span> 154 Crt, Queens, New York
          </p>
          <p className="info-detail">
            <span className="icon">📧</span> <a href="mailto:info@citizencare.us">info@citizencare.us</a>
          </p>
          
          <h4 className="hours-title">Open Hours:</h4>
          <p className="hours-detail">
            Mon – Fri: 9 am – 6 pm,
          </p>
          <p className="hours-detail">
            Sat–Sun: CLOSED
          </p>
        </div>

        {/* Column 4: Our Location (Map) */}
        <div className="footer-column location-map">
          <h3 className="column-title">Our Location</h3>
          {/* In a real app, you'd embed a lightweight, interactive map (e.g., Google Maps embed, or a static map image) 
            For this component, we'll use a placeholder image to match your screenshot.
          */}
            <img width="328" height="199" src={MAP} className="attachment-large size-large" alt="" srcSet={`${MAP} 328w, ${MAP} 300w`} sizes="(max-width: 328px) 100vw, 328px"></img>
          {/* <div className="map-placeholder">
            <div className="map-pin">
            </div>
          </div> */}
        </div>

      </div>
      <div className="bg-gray-800 text-gray-300 py-8 text-center">
          <div className="container mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} Moji Tech. All Rights Reserved.</p>
            <p className="mt-2 text-sm">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;