import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const BtnGroup = () => {
  const [active, setActive] = useState(false);

  const onChange = () => setActive(!active)

  return (
    <div>
      <ButtonGroup>
        <Button variant="secondary" onClick={onChange} className={active ? 'active' : ''}>Left</Button>
        <Button variant="secondary" onClick={onChange} className={active ? '' : 'active'}>Right</Button>
      </ButtonGroup>
    </div>
  );
};

export default BtnGroup;