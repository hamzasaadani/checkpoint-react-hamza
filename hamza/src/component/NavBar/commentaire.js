import React from 'react';
import {Form,Button,Stack} from 'react-bootstrap';

const Comt =()=>{
  
  return (
    <div>
    <Stack direction="horizontal" gap={3}>
    <Form.Control className="me-auto" placeholder="Contact the store..." />
    <Button variant="secondary">send</Button>
    <div className="vr" />
    <Button variant="outline-danger">delete</Button>
  </Stack>
   </div>
  )
  }
export default Comt