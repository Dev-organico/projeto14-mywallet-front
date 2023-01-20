import styled from "styled-components";

export const Conteiner = styled.div`
    font-family: 'Raleway', sans-serif;
    background-color: #8C11BE;
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    align-items: center;
        img{
            margin-top: 159px;
            width:147px;
        }
        p{
            color:white;
            font-size: 15px;
            margin-top: 25px;
            font-weight: 700;
            font-family: 'Raleway', sans-serif;
            
        }

`
export const Form = styled.div`
    margin-top: 24px;
    margin-left: 25px;
        
        input{
            width: 326px;
            height: 58px;
            margin-bottom: 13px;
            border-radius: 3px;
            border: 1px solid #D4D4D4;
            box-sizing: border-box;
            color: #000000;
            padding-left: 11px;
            font-size: 20px;
            font-weight: 400;
            font-family: 'Raleway', sans-serif;
            &:focus{
                outline: none;
            }
            &::placeholder{
            color: #000000;
            }   
        }
        button{
            font-family: 'Raleway', sans-serif;
            width: 326px;
            height: 46px;
            background-color: #A328D6;
            border-radius: 3px;
            border: none;
            box-sizing: border-box;
            color:white;
            font-size: 20px;
            font-weight: 700;
            cursor: pointer;
            
        }

    `