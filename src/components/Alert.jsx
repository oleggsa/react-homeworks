import React from 'react';
import AlertBootstrap from 'react-bootstrap/Alert';

const Alert = ({text, type}) => {
  console.log(text, type)
  return (
    <div>
      <AlertBootstrap variant={type}>{text}</AlertBootstrap>
    </div>
  );
};

export default Alert;