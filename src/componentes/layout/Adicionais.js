import React from 'react'
import './Adicionais.css';
import { Card } from 'react-bootstrap';

function Adicionais() {
  return (
    <>
      <div className="fundo2">
        <Card className="cardin">
          <div className="tudin">
            <Card.Img variant="top" className="imagins" src="https://images.pexels.com/photos/11203727/pexels-photo-11203727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Card.Title className="barrin"><span className='titulo'>Correntes</span></Card.Title>
          </div>
        </Card>

          <div className="dois">
            <Card className="cardinho">
              <div className="tudinhos">
                <Card.Img variant="top" className="imaginho" src="https://images.pexels.com/photos/10983778/pexels-photo-10983778.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
                <Card.Title className="barrin"><span className='titulo'>Brincos</span></Card.Title>
              </div>
            </Card>
            <Card className="cardinho">
              <div className="tudinhos">
                <Card.Img variant="top" className="imaginho" src="https://images.pexels.com/photos/11504786/pexels-photo-11504786.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
                <Card.Title className="barrin"><span className='titulo'>Aneis Solitarios</span></Card.Title>
              </div>
            </Card>
          </div>
      </div>
    </>
  )
}

export default Adicionais