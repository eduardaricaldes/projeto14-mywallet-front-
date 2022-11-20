import * as React from 'react';

import { createContext, useState, useEffect } from 'react';

export const UsuarioContext = createContext([
  {},
  () => {},
])

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});

  function setDadosDoUsuario({id, name, email}) {
    setUsuario({
      name,
      email,
    });
    localStorage.setItem('data', JSON.stringify({
      name,
      email,
    }));
  }


  useEffect(() => {
    const dadosUsuarios = localStorage.getItem('data');
    if(dadosUsuarios) {
      const dados = JSON.parse(dadosUsuarios);
      setUsuario(dados)
    }
  }, [])

  return (
    <UsuarioContext.Provider value={[usuario, setDadosDoUsuario]}>
      {children}
    </UsuarioContext.Provider>
  )
};