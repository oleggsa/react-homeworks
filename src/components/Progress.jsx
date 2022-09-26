import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Progress = ({percentage}) => {
  return (
    <>
      <ProgressBar now={percentage} />
    </>
  );
};

export default Progress;