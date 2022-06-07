import React from 'react';
import { Formik } from 'formik'; //npm install formik --save
import * as Yup from 'yup';//npm install -S yup
import { Form, InputGroup, Row, Col, Button } from "react-bootstrap";
import "./Cadastro.css";

//const { formik } = Formik;

const schema = Yup.object().shape({
  Name: Yup.string().required(),
  LatsName: Yup.string().required(),
  email: Yup.string().required(),
  cpf: Yup.string().min(11,'minimo 11 numeros').required(),
  pass: Yup.string().required(),
  terms: Yup.bool().required().oneOf([true], 'Aceite os Termos'),
});

function Cadastro() {
  return (
    <>
    <div className="fundo">
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          Name: '',
          LastName: '',
          email: '',
          cpf: '',
          pass: '',
          terms: false,
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
        }) => (
        <div className="geral">
          <Form noValidate onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Nome</Form.Label><br/>
                <Form.Control className="retangulo"
                  type="text"
                  placeholder="Digite seu nome"
                  name="Name"
                  value={values.Name}
                  onChange={handleChange}
                  isValid={touched.Name && !errors.Name}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Sobrenome</Form.Label><br/>
                <Form.Control className="retangulo"
                  type="text"
                  placeholder="Digite seu sobrenome"
                  name="LastName"
                  value={values.LastName}
                  onChange={handleChange}
                  isValid={touched.Name && !errors.Name}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik02">
                <Form.Label>E-mail</Form.Label><br/>
                <Form.Control className="retangulo"
                  type="text"
                  placeholder="Informe um email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                />
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationFormikcpf">
                <Form.Label>CPF</Form.Label><br/>
                <InputGroup hasValidation>
                  <Form.Control className="retangulo"
                    type="text"
                    placeholder="Digite um cpf valido"
                    aria-describedby="inputGroupPrepend"
                    name="cpf"
                    value={values.cpf}
                    onChange={handleChange}
                    isInvalid={!!errors.cpf}
                  />
                </InputGroup>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="2" controlId='validationFormikpass'>
                <Form.Label>Senha</Form.Label><br/>
                <Form.Control className="retangulo"
                  type="text"
                  placeholder='Crie uma senha'
                  name='pass'
                  value={values.pass}
                  onChange={handleChange}
                  isInvalid={!!errors.pass}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <div className="termos">
                <Form.Check
                  required
                  name="terms"
                  label="Li e estou de Acordo com as Condições dos Termos "
                  onChange={handleChange}
                  isInvalid={!!errors.terms}
                  feedback={errors.terms}
                  feedbackType="invalid"
                  id="validationFormik0"
                />
              </div>
            </Form.Group>
          </Form>
          <div className="ajustebutton">
            <Button type="submit" className="button">
              <span>Cadastrar-me</span>
            </Button>
          </div>
        </div>
        )}
      </Formik>
    </div>
    </>
  );
}


export default Cadastro