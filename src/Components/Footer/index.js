import React from 'react';
import FbIcon from '../../Assets/Images/FbIcon';
import './index.css';
import Twitter from '../../Assets/Images/Twitter';
import Linkedin from '../../Assets/Images/Linkedin';
import Youtube from '../../Assets/Images/Youtube';

const index = () => {
  return (
    <footer>
      <div className="icon-row">
       <FbIcon/>
        <Twitter/>
        <Linkedin/>
        <Youtube/>
      </div>
      <div className="email-row">
        <p>Example@gmail.com</p>
      </div>
      <div className="copyright-row">
        <p>Copyright &copy; 2020 Name.All rights reserved</p>
      </div>
    </footer>
  );
}

export default index;
