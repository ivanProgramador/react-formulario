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

  o componente formik recebe dois attraibutos nesse caso 

  initialValues -> pra colocar valores pre-definidos nos campos
  onSubmit -> oque fazer quandoi submit acontecer
  
  mesmo estando dentro da tag do componente submit uma arrow function 
  ainda precisa ser criada ciorcundando o formulario por que cada campo 
  vai ter um  onChange={props.handleChange} pra capturar cada valor de forma individual 
  e lançar pra dentro do props essa função e do proprio formik 

  então eu consigo pegar os valores dentro do onSubmit colocar eles dentro da variavel values
  e converter para Json()

  'nesse caso eu converti para jsno mais eu posso fazer outras coisas'

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




*/