import React from 'react'
import './Adicionais.css'
import { Card, CardGroup } from 'react-bootstrap'
import { ImWhatsapp } from 'react-icons/im'
import {GrDeliver} from 'react-icons/gr'
import {FaMoneyCheck} from 'react-icons/fa'
function Adicionais() {
  return (
    <>
      <div className="fundo2">
        <div className="cardin">
          <div className="tudin">
            <Card.Img variant="top" className="imagins" src="https://images.pexels.com/photos/11203727/pexels-photo-11203727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Card.Title className="barrin"><span className='titulo'>Correntes</span></Card.Title>
          </div>
        </div>

          <div className="dois">
            <div className="cardinho">
              <div className="tudinhos">
                <Card.Img variant="top" className="imaginho" src="https://images.pexels.com/photos/10983778/pexels-photo-10983778.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
                <Card.Title className="barrin"><span className='titulo'>Brincos</span></Card.Title>
              </div>
            </div>
            <div className="cardinho">
              <div className="tudinhos">
                <Card.Img variant="top" className="imaginho" src="https://images.pexels.com/photos/11504786/pexels-photo-11504786.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
                <Card.Title className="barrin"><span className='titulo'>Aneis Solitarios</span></Card.Title>
              </div>
            </div>
          </div>
      </div>
          <div className="col-12 ">
            <CardGroup className="cadas">
              <Card className="cardas">
                <Card.Body className="redondo">
                  <Card.Title className="nomes">Atendimento Online!</Card.Title>
                  <ImWhatsapp className="fimicon" />
                </Card.Body>
              </Card>
              <Card className="cardas">
                <Card.Body className="redondo">
                  <Card.Title className="nomes">Entregas Confiaveis!</Card.Title>
                  <GrDeliver className="fimicon" />
                </Card.Body>
              </Card>
              <Card className="cardas">
                <Card.Body className="redondo">
                  <Card.Title className="nomes">Em até 10x no cartão!</Card.Title>
                  <FaMoneyCheck className="fimicon" />
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
    </>
  )
}

export default Adicionais