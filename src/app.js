import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import GlobalStyles from './globalstyles';
import Registration from './pages/cadastro';
import Login from './pages/login';
import { LoginContext } from './context/loginContext';
import { useState } from 'react';
import Home from './pages/home';
import Minus from './pages/nova-saida';
import Plus from './pages/nova-entrada';


function App() {

  const [formUser, setFormUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm:""
});

  const [apiForm , setApiForm] = useState({})

  const [form, setForm] = useState({
    email: "",
    password: ""
});

  return (
    <LoginContext.Provider value={{apiForm}}>
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        
          <Route path='/' element={<Login 
          setForm={setForm}
          form={form}
          setApiForm={setApiForm}
           />}/>
          <Route path='/cadastro' element={<Registration
          formUser={formUser}
          setFormUser={setFormUser}
          />}/>
          <Route path='/home' element={<Home
          apiForm={apiForm}
          />}/>
          <Route path='/nova-entrada' element={<Plus
          apiForm={apiForm}
          />}/>
          <Route path='/nova-saida' element={<Minus
          apiForm={apiForm}
          />}/>
         
         

      </Routes>
    </BrowserRouter>
    </LoginContext.Provider>
  );

}

export default App;
