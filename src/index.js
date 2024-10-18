import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { image } from 'd3';
import logo from './BRANCO TRANSP.png'

const SimpleScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Olá, ${name}! Seu email é ${email} e seu número é ${telefone}`);
  };

  return (
    <div className="container">
      <header>
        <h1>Agreggate</h1>
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome: </label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="telefone">Telefone: </label>
            <input
              type="tel"
              id="telefone"
              value={telefone}
              onChange={(e) => setTel(e.target.value)}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </main>

      <footer>
        <p>&copy; 2024 Agregar Negocios. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};
<img></img>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SimpleScreen />);
