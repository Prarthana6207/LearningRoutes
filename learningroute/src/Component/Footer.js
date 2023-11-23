import React from 'react';
  
function Footer() {
    const currentYear = new Date().getFullYear();
 return(
 <div>
 <footer className="footer">
  <div>
    <p>© {currentYear}. LEARNING ROUTES PVT. LTD. All rights reserved.</p>
  </div>
    <div id="footlst">
    <li>
      <ul>Career</ul>
      <ul>Privacy Policy</ul>
      <ul>Sitemap</ul>
      <ul>Terms Of Use</ul>
    </li>
    </div>
  </footer>
  </div>
);
}
export default Footer;