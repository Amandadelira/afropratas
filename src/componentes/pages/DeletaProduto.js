import {Button, Modal} from 'react-bootstrap';

function DeletaProduto(props) {
  const id = props.id;
  const deletar = props.deletar;
  const fechar = props.fechar;

  return (
    <>
      <Modal show={id !== null} onHide={() => fechar()}>
        <Modal.Header closeButton>
          <Modal.Title>Deletar Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>Quer mesmo deletar este produto??</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => fechar()}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => deletar()}>
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default DeletaProduto