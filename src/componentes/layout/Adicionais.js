import React from 'react'
import './Adicionais.css';
import {Card} from 'react-bootstrap';

function Adicionais() {
  return (
      <>
    <div className="fundo2">
        <Card className="cardin">
        <Card.Img className="foto" variant="top" src="https://images.pexels.com/photos/4728277/pexels-photo-4728277.jpeg?auto=compress&cs=tinysrgb&w=175&fit=crop&h=275&dpr=1" />
            <div className="barrin">
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                </Card.Body>
            </div>
        </Card>
    </div>
    </>
  )
}

export default Adicionais