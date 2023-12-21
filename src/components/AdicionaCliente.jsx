import React from 'react';
import { Formik } from 'formik';

const AdicionaCliente = () => {
  return (
    <>
      <h1>Cadastro de Clientes</h1>
      <Formik
        initialValues={{ nome: '', email: '', nascimento: '' }}
        onSubmit={(values)=>{alert(JSON.stringify(values))}}
        validate={(values)=>{

          const errors = {};

          if(!values.nome){
            errors.nome = 'O nome é obrigatorio';
          }
          if(!values.email){
            errors.email = 'O e-mail é obrigatorio';
          }
            else if(!/^[A-Z0-9._%+-]+@[A-Z]{2,}$/i.test(values.email)){

            errors.email = 'O e-mail é invalido';
          }
          if(!values.nascimento){
            errors.nascimento = 'A data de nascimento é obrigatoria';
          }
          return errors;

        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} noValidate>
            <div className="form-group">

              <label htmlFor="nome">Nome</label>

              <input 
                 id="nome" 
                 name="nome" 
                 type="text" 
                 onChange={props.handleChange}
                 onBlur={props.handleBlur}
                 className={props.errors.nome && props.touched.nome ? 'is-invalid':''}
              />

            </div>
            {props.errors.nome && props.touched.nome ? <div className="invalid-feedback">{props.errors.nome}</div>: null}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                 id="email"
                 name="email"
                 type="email" 
                 onChange={props.handleChange}
                 onBlur={props.handleBlur}
                 className={props.errors.email && props.touched.nome ? 'is-invalid':''}
              />
            </div>
            {props.errors.email && props.touched.email ? <div className="invalid-feedback" >{props.errors.email}</div>: null}

            <div className="form-group">
              <label htmlFor="date">Data de Nascimento</label>
              <input
                  id="nascimento"
                  name="nascimento"
                  type="date" 
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={props.errors.nascimento && props.touched.nascimento ? 'is-invalid':''} 
                  />
            </div>
            {props.errors.nascimento && props.touched.email ? <div className="invalid-feedback" >{props.errors.nascimento}</div>: null}
            <button type="submit">Adicionar</button>
          </form>
        )}

      </Formik>
    </>
  );
};

export default AdicionaCliente;
