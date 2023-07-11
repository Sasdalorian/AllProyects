import './App.css';
import logoSas from './img/logoSas.png'

//IMPORT COMPONENTES
import { Boton } from './componentes/Boton';
import { Pantalla } from './componentes/Pantalla';
import { BotonClear } from './componentes/BotonClear';

//HOOK
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState(0);

  const agregarInput = valor => {
    // eslint-disable-next-line
    if (input == 0) {
      setInput(valor);
    } else {
      setInput(input + valor);
    }
  };

  const calcularResultado = () => {
    if (input) {
      if (isNaN(input)) { // Verificar si input no es un número
        setInput(evaluate(input));
      } else {
        alert("Por favor ingrese una expresión matemática válida.");
      }
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };


  return (
    <div className="App">
      <div className='logoSas_contenedor'>
        <img
          src={logoSas}
          className="logoSas"
          alt="No se ha podido cargar el logo."
        />
      </div>

      <div className='calculadora_contenedor'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>00</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput(0)}>
            Clear
          </BotonClear>
          <Boton manejarClic={calcularResultado}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
