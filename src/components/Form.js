import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from 'react-bootstrap/Button';


const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          nombre: '',
          correo: '',
          mensaje: ''
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion nombre
          if (!valores.nombre) {
            errores.nombre = 'Por favor ingresa un nombre'
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = 'El nombre solo puede contener letras y espacios'
          }

          // Validacion correo
          if (!valores.correo) {
            errores.correo = 'Por favor ingresa un correo electronico'
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
            errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
          }

          return errores;
        }}
        onSubmit={({ resetForm }) => {
          console.log('Formulario enviado');
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre completo"
              />
              <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type="text"
                id="correo"
                name="correo"
                placeholder="correo@example.com"
              />
              <ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
            </div>

            <div>
              <Field name="mensaje" as="textarea" placeholder="Mensaje" />
            </div>
            <Button href="mailto:andres.fcr089@gmail.com" type="submit">Enviar</Button>
            {formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Formulario