import React from 'react';
import { Formik,useField } from 'formik';
import * as yup from 'yup';

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
  
   const esquema = yup.object({

    //validando os campos 
     nome: yup.string()
              .required('O nome é obrigatório')
              .min(4,'O nome deve ter no minmimo 10 caracteres')
              .max(30,'O nome deve ter no maximo 30 caracteres'),
    //----------------------------------------------------------------
     email: yup.string()
               .required('O email é obrigatório')
               .required('O emial é invalido'),

    //----------------------------------------------------------------
    nascimento: yup.date()
                .required('A data de nascimento é obrigatoria')
                .max(new Date(),'Você não pode ter nascido no futuro...')
   })

  return (
    <>
      <h1>Cadastro de Clientes</h1>
      <Formik
        initialValues={{ nome: '', email: '', nascimento: '' }}
        onSubmit={(values)=>{alert(JSON.stringify(values))}}
        validationSchema={esquema}
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
