import "./App.css";
import {useState} from 'react'
function App() {
  
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [result, setResult] = useState(0);

  function validarPeso(e) {
    const regex = /[^0-9]/g;
    const valor = e.replace(regex, '');
    setPeso(valor);
  };

  function validarAltura(e) {
    const regex = /[^0-9]/g;
    const valor = e.replace(regex, '');
    setAltura(valor);
  };

  function submitList (event){
    event.preventDefault()
    let Opeso = peso;
    let Aaltura = altura * altura /10000;
    let imc = Opeso/Aaltura;
    setResult(imc)
    setPeso("");
    setAltura("");
  };

  function categoriaImc(){
    const classificacoesIMC = [
      { limite: 16.00, classificacao: "Baixo peso Grau III" },
      { limite: 17.00, classificacao: "Baixo peso Grau II" },
      { limite: 18.50, classificacao: "Baixo peso Grau I" },
      { limite: 25.00, classificacao: "Peso ideal" },
      { limite: 30.00, classificacao: "Sobrepeso" },
      { limite: 35.00, classificacao: "Obesidade Grau I" },
      { limite: 40.00, classificacao: "Obesidade Grau II" },
      { limite: Infinity, classificacao: "Obesidade Grau III" }
    ];
  for (let i = 0; i < classificacoesIMC.length; i++) {
      if (result < classificacoesIMC[i].limite) {
        console.log(classificacoesIMC[i].classificacao);
        return classificacoesIMC[i].classificacao;
      }
    }
  }
  

  return (
    <>
      <div >
        <h1>IMC - @joaovicttor_ </h1>
        <form onSubmit={(event)=> submitList(event)}>
          <label >Peso (kg)</label>
          <input 
            type="text" 
            placeholder="68" 
            onChange={e => validarPeso(e.target.value)} 
            value={peso} 
            required 
            maxLength={2}
          />
          <br/>
          <label>Altura (cm)</label>
          <input 
            type="text" 
            placeholder="168" 
            onChange={e => validarAltura(e.target.value)} 
            value={altura}
            required 
            maxLength={3}
          />
          <button type="submit">Verificar</button>
        </form>

        {result > 0  && <><span>O IMC: {result.toFixed(0)}</span> <span> Sua categoria: {categoriaImc()}</span></> }
        
      </div>
    </>
  );
}

export default App;
