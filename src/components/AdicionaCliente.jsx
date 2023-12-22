import React from 'react';
import { Formik,useField } from 'formik';

//criando um componente de Campo

const Campo = ({label, ...props}) =>{

  const [field, meta] = useField(props);

  return(
     <>
     <label htmlFor={props.id}>{label}</label>
     <input
        {...field}
        {...props}
        className = {meta.error && meta.touched ? 'is-invalid':''}
      />
        {
          meta.error && meta.touched?(
             <div className="invalid-feedback">{meta.error}</div>): null}     
     </>
     )
}





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
            else if(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(values.email)){

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
              <Campo id="nome" name="nome" type="text" label="Nome" />
              <Campo id="email" name="email" type="email" label="Email"  /> 
              <Campo  id="nascimento"  name="nascimento"  type="date" label="Data de nascimento"/>
            <button type="submit">Adicionar</button>
          </form>
        )}

      </Formik>
    </>
  );
};

export default AdicionaCliente;
