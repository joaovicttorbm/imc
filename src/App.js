import "./App.css";
import {useState} from 'react'
function App() {
  
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
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
    if (result < 16.00) {
    return "Baixo peso Grau III";
  } else if (result < 17.00) {
    return "Baixo peso Grau II";
  } else if (result < 18.50) {
    return "Baixo peso Grau I";
  } else if (result < 25.00) {
    return "Peso ideal";
  } else if (result < 30.00) {
    return "Sobrepeso";
  } else if (result < 35.00) {
    return "Obesidade Grau I";
  } else if (result < 40.00) {
    return "Obesidade Grau II";
  } else {
    return "Obesidade Grau III";
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
