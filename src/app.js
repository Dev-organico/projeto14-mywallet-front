import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import GlobalStyles from './globalstyles';
import Registration from './pages/cadastro';
import Login from './pages/login';
import { LoginContext } from './context/loginContext';
import { useState } from 'react';
import axios from 'axios';


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
          {/* <Route path='/habitos' element={<Habits/>}/>
          <Route path='/hoje' element={<Today/>}/>
          <Route path='/historico' element={<Historic/>}/>
 */}
      </Routes>
    </BrowserRouter>
    </LoginContext.Provider>
  );

}

export default App;
