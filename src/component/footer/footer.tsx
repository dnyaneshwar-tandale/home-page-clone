import React from 'react';
import "./footer.scss";

function Footer() {
  
  return (
   <div className='footer-container'>
     <div>© 2023 ZeroTier, Inc. All rights reserved.
</div>
     <div>
      <ul className='privacy-block'>
        <ol>Terms</ol>
        <ol>
Privacy</ol>
        <ol>Policy</ol>
      </ul>
     </div>

   </div>
  );
}

export default Footer;
