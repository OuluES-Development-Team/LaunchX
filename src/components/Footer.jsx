import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="container mx-auto px-4">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-title" data-text="LaunchX">LaunchX</h2>
            <p className="footer-subtitle" data-text="Empowering Innovation Under the Midnight Sun">
              Empowering Innovation Under the Midnight Sun
            </p>
          </div>
          
          <div className="footer-links">      
            <div className="footer-section">
              <h3 className="footer-heading" data-text="Contact">Contact</h3>
              <ul className="footer-nav">
                <li data-text="launchx@oulues.com">launchx@oulues.com</li>
                <li data-text="+358 44 246 4519">+358 44 246 4519</li>
                <li data-text="Oulu, Finland">Oulu, Finland</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-social">
            <h3 className="footer-heading" data-text="Follow Us">Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/launchxbyoulues/" className="social-icon">
                {/* Instagram */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.055-.059 1.37-.059 4.04 0 2.67.01 2.986.059 4.04.045.976.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.047 1.37.059 4.04.059 2.67 0 2.987-.01 4.04-.059.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.054.059-1.37.059-4.04 0-2.67-.01-2.986-.059-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.047-1.37-.059-4.04-.059zm0 3.064A5.139 5.139 0 0017.134 12 5.139 5.139 0 0012 17.134 5.139 5.139 0 006.866 12 5.139 5.139 0 0012 6.866zm0 8.468A3.334 3.334 0 018.668 12 3.334 3.334 0 0112 8.668 3.334 3.334 0 0115.332 12 3.334 3.334 0 0112 15.332zm5.338-8.67a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p data-text={`© ${new Date().getFullYear()} OuluES. All rights reserved.`}>
            © {new Date().getFullYear()} OuluES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;