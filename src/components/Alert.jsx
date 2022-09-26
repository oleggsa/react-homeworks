import React from 'react';
import AlertBootstrap from 'react-bootstrap/Alert';

const Alert = ({text, type}) => {
  return (
    <div>
      <AlertBootstrap variant={type}>{text}</AlertBootstrap>
    </div>
  );
};

export default Alert;