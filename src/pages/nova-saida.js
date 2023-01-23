import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, HomeConteiner, TopConteiner } from "../css/css";

export default function Minus({apiForm}){

    const navigate = useNavigate()

    const token = apiForm.token

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const [formRecord,setFormRecord] = useState({
        value:"",
        description:"",
        type:"negative"

    })

    function handleForm(e) {
        setFormRecord({
            ...formRecord,
            [e.target.name]: e.target.value,
        })
    }

    async function sendForm(event) {

        event.preventDefault();

        formRecord.value = formRecord.value.replace(",",'.')
        
        try {

            const recordCreated = await axios.post(`${process.env.REACT_APP_API_URL}nova-saida`, formRecord , config)

            console.log(recordCreated)

            alert(recordCreated.data)

            navigate("/home")

            
        } catch (err) {
            alert(err.response.data)
        }

        setFormRecord({
            value:"",
            description:"",
            type:"negative"
        })
    }



    return (

        <HomeConteiner>
            <TopConteiner>
                <p>{`Nova saída`}</p>
            </TopConteiner>
             <Form>
                <form onSubmit={sendForm}>
                    <input placeholder="Valor" type="text" name="value" onChange={handleForm} value={formRecord.value} />
                    <input placeholder="Descrição" type="text" name="description" onChange={handleForm} value={formRecord.description} />
                    <button type="submit">Salvar saída</button>
                </form>
            </Form>
            
        </HomeConteiner>


    )
}