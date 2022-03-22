import React from 'react';
import helpicon from '../assets/help-icon.svg';

const FormHelpIcon = (props) => {
  return ( 
    <img
      src={helpicon}
      width="25"
      height="25"
      className="mt-1"
      alt="help"
    />
  );
}
 
export default FormHelpIcon;