import React from 'react';
import { Formik } from 'formik'; //npm install formik --save
import * as Yup from 'yup';//npm install -S yup
import { Form, Row, Col, Button } from "react-bootstrap";
import "./Login.css";

//const { formik } = Formik;

const shemas = Yup.object().shape({
  email: Yup.string().required(),
  pass: Yup.string().required(),
});

function Login() {
  return (
    <>
    <div className="fundo1">
      <Formik
        validationShemas={shemas}
        onSubmit={console.log}
        initialValues={{
          email: '',
          pass: '',
          terms: false,
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
        <div className="geral1">
          <Form noValidate onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} md="4" controlId="validationFormik02">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Informe um email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="2" controlId='validationFormikpass'>
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="text"
                  placeholder='Crie uma senha'
                  name='pass'
                  value={values.pass}
                  onChange={handleChange}
                  isInvalid={!!errors.pass}
                />
              </Form.Group>
            </Row>
            <Button type="submit" className="button">
              <span>Entrar</span>
            </Button>
          </Form>
        </div>
        )}
      </Formik>
    </div>
    </>
  );
}
export default Login