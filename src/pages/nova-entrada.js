import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, HomeConteiner, TopConteiner } from "../css/css";

export default function Plus({ apiForm }) {

    const navigate = useNavigate()

    const token = apiForm.token

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const [formRecord, setFormRecord] = useState({
        value: "",
        description: "",
        type: "positive"

    })

    function handleForm(e) {
        setFormRecord({
            ...formRecord,
            [e.target.name]: e.target.value,
        })
    }

    async function sendForm(event) {

        formRecord.value = formRecord.value.replace(",",'.')

        event.preventDefault();

        try {

            const recordCreated = await axios.post(`${process.env.REACT_APP_API_URL}nova-saida`, formRecord, config)

            console.log(recordCreated)

            alert(recordCreated.data)

            navigate("/home")


        } catch (err) {
            alert(err.response.data)
        }

        setFormRecord({
            value: "",
            description: "",
            type: "positive"
        })
    }



    return (

        <HomeConteiner>
            <TopConteiner>
                <p>{`Nova entrada`}</p>
            </TopConteiner>
            <Form>
                <form onSubmit={sendForm}>
                    <input placeholder="Valor" type="text" name="value" onChange={handleForm} value={formRecord.value} />
                    <input placeholder="Descrição" type="text" name="description" onChange={handleForm} value={formRecord.description} />
                    <button type="submit">Salvar entrada</button>
                </form>
            </Form>

        </HomeConteiner>


    )
}