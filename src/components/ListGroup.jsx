import React from 'react';
import ListGroupBootstrap from 'react-bootstrap/ListGroup';


const ListGroup = ({children}) => {
  return (
    <div>
      <ListGroupBootstrap>
        {children.map((child, index) => <ListGroupBootstrap.Item key={index}>{child}</ListGroupBootstrap.Item>)}
      </ListGroupBootstrap>
    </div>
  );
};

export default ListGroup;