/*
 Na validação e captura de dados de um formulario em aum cenario comum 
 são usadas estrategias como Hooks em casosos de componetes de classe 
 exitem outras funcções. a abilioteca Formik tem como objetivo facilitar
 esse processo com suas funções internas.
 
 Antes fazer qualquer coisa primeirop precisamos evitar que o formulario 
 execute a validação sozinho usadno um função na tiva do do fomulario
 'noValidate' 

  <form noValidate></form>

  Isso possibilita que o formik assuma o controle da validação 
  A primeira etapa e sempre instalar ele com o npm depois chamar o componete formik
  e colocar todo os formulario dentro das tags.
  -------------------------------------------------------------------------

  O componente formik recebe dois atributos nesse caso 

  initialValues -> pra colocar valores pre-definidos nos campos
  onSubmit -> oque fazer quando submit acontecer
  
  mesmo estando dentro da tag do componente submit uma arrow function 
  ainda precisa ser criada ciorcundando o formulario por que cada campo 
  vai ter um  onChange={props.handleChange} pra capturar cada valor de forma individual 
  e lançar pra dentro do props essa função e do proprio formik 

  então eu consigo pegar os valores dentro do onSubmit colocar eles dentro da variavel values
  e converter para Json()

  'nesse caso eu converti para json mais eu posso fazer outras coisas'

  <Formik
        initialValues={{ nome: '', email: '', nascimento: '' }}
        onSubmit={(values)=>{
           alert(JSON.stringify(values))
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input id="nome" name="nome" type="text" onChange={props.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" onChange={props.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="date">Data de Nascimento</label>
              <input id="nascimento" name="nascimento" type="date" onChange={props.handleChange} />
            </div>
            <button type="submit">Adicionar</button>
          </form>
        )}

      </Formik>


      conclusão 
        Formik é uma ferramenta pratica achei mais facil doque usar hooks
  ------------------------------------------------------------------------
  VALIDANDO 
    a função que tem a logica de validação fica dentro do atributo validate  

   validate={(values)=>{

          const errors = {};

          if(!values.nome){
            errors.nome = 'O nome é obrigatorio';
          }
          if(!values.email){
            errors.email = 'O e-mail é obrigatorio';
          }
          if(!values.nascimento){
            errors.nascimento = 'A data de nascimento é obrigatoria';
          }
          return errors;

        }}


----------------------------------------------------------------------------------------------
foi criado um compoente unico chamado Campo que recebe os atributos  e ja possui as funções dentro de dele 


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

------------------------------------------------------------------------

REFATORAÇÃO COM YUP 
 o biblioteca yup serve para validar dados vindos de um formulario antes de enviar para os servidor
 nesse então ao inves de escrever varias linha de codigo basta adicionar o yup como eu fiz abaixo 

 criei um objeto que recebe o yup e sua fucnções de validação 

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


depois passei ele para o  validationSchema={esquema} do Formik




*/