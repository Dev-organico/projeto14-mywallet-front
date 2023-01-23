import { Button, Buttons, EmptyDiv, HomeConteiner, IconDiv, LeftContent, NegativeRecord, NegativeTotal, PositiveRecord, PositiveTotal, Records, TopConteiner, Total, WalletDiv } from "../css/css"
import { RiLogoutBoxRLine } from "react-icons/ri"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


export default function Home({ apiForm }) {

    const navigate = useNavigate()

    const token = apiForm.token

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const [recordsList, setRecordsList] = useState([])

    let totalRecords = 0

    useEffect(() => async function financialRecords() {

        try {

            const newRecordsList = await axios.get(`${process.env.REACT_APP_API_URL}home`, config)

            setRecordsList(newRecordsList.data)

            console.log(newRecordsList.data)

        } catch (err) {
            alert(err.response)
        }

    }, [])

    function sumRecords() {

        let total = 0

        if (recordsList.length > 0) {
            recordsList.forEach((el) => {
                if (el.type === "positive") {
                    total += Number(el.value)
                }
                else {
                    total -= Number(el.value)
                }
            })
        }
        

        return total


    }

    

    const newTotal = sumRecords()


    function exit() {
        navigate("/")
    }


    function goToPlus() {
        navigate("/nova-entrada")
    }

    function goToMinus() {
        navigate("/nova-saida")
    }

    return (

        <HomeConteiner>

            <TopConteiner>
                <p>{`Ola, ${apiForm.name}`}</p>
                <IconDiv onClick={exit}>
                    <RiLogoutBoxRLine />
                </IconDiv>
            </TopConteiner>
            <WalletDiv>
                {recordsList.length >= 1 ?
                    <>
                        <Records>
                            {recordsList.map((el) => {
                                if (el.type == "positive") {
                                    return (
                                        <PositiveRecord key={el._id}>
                                            <LeftContent>
                                                <h1>{el.date}</h1>
                                                <h2>{el.description}</h2>
                                            </LeftContent>
                                            <p>{el.value}</p>
                                        </PositiveRecord>
                                    )
                                }
                                else if (el.type == "negative") {
                                    return (
                                        <NegativeRecord key={el._id}>
                                            <LeftContent>
                                                <h1>{el.date}</h1>
                                                <h2>{el.description}</h2>
                                            </LeftContent>
                                            <p>{el.value}</p>
                                        </NegativeRecord>
                                    )
                                }


                            })}
                        </Records>
                        <Total>
                            <h1>SALDO</h1>
                            {newTotal >0 ?
                            <PositiveTotal><p>{newTotal}</p></PositiveTotal>:
                            <NegativeTotal><p>{newTotal*-1}</p></NegativeTotal>
                            }

                        </Total>
                    </>
                    :
                    <EmptyDiv>
                        <p>Não há registros de<br /> entrada ou saída</p>
                    </EmptyDiv>}
            </WalletDiv>
            <Buttons>
                <Button onClick={goToPlus}>
                    <h1><AiOutlinePlusCircle /></h1>
                    <p>Nova<br /> entrada</p>
                </Button>
                <Button onClick={goToMinus}>
                    <h1><AiOutlineMinusCircle /></h1>
                    <p>Nova<br /> saída</p>
                </Button>
            </Buttons>


        </HomeConteiner>

    )

}
