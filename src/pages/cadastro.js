import myWallet from "../assets/myWallet.png"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Conteiner, Form } from "../css/css";
import axios from "axios";


export default function Registration(formUser,setFormUser) {

 
    const navigate = useNavigate()

    console.log(formUser)

    function handleForm(e) {
        setFormUser({
            ...formUser,
            [e.target.name]: e.target.value,
        })
    }

    async function sendForm(event) {
        event.preventDefault();
        alert("cadastrou!")
        
        try
        {
            const sendIt = await axios.post(`${process.env.REACT_APP_API_URL}/cadastro`, formUser)
            
            if(sendIt) return navigate("/")
    
    
        }
        catch(err)
        {return alert("não foi")}
        //axios.post(`${URL}auth/sign-up`, formUser).then(() => ).catch(() => return alert("não foi")) 

    }


    return (
        <Conteiner>
            <img src={myWallet} />
            <Form >
                <form onSubmit={sendForm}>
                    <input data-test="user-name-input" placeholder="Nome" type="text" name="name" onChange={handleForm} value={formUser.name} />
                    <input data-test="email-input" placeholder="E-mail" type="email" name="email" onChange={handleForm} value={formUser.email} />
                    <input data-test="password-input" placeholder="Senha" type="password" name="password" onChange={handleForm} value={formUser.password} />
                    <input data-test="password-input" placeholder="Confirme a senha" type="password" name="passwordConfirm" onChange={handleForm} value={formUser.passwordConfirm} />
                    <button data-test="signup-btn" type="submit">Cadastrar</button>
                </form>
            </Form>
            <Link data-test="login-link" to={"/"} style={{ textDecoration: 'none' }}>
                <p>Já tem uma conta? Entre agora!</p>
            </Link>


        </Conteiner>
    )
}