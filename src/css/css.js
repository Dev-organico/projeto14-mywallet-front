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
            color: grey;
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

export const HomeConteiner = styled(Conteiner)`
    `


export const TopConteiner = styled.div`
    font-family: 'Raleway', sans-serif;
    height: 78px;
    width: 100%;
    display: flex;
    justify-content: space-between;
        p{
            font-size: 26px;
            font-weight: 700;
            color:white;
            margin-left: 25px;
        }
    
`

export const IconDiv = styled.div`
    color :white;
    margin-right:25px;
    margin-top:25px;
    font-size: 24px;
    cursor: pointer;
`

export const WalletDiv = styled.div`
    width: 326px;
    height: 446px;
    border-radius: 5px;
    background-color:white;
    display: flex;
    flex-direction: column;
    box-sizing:border-box;
`
export const Buttons = styled.div`
    display: flex;
    justify-content:space-between;
    height: 143px;
    width: 325px;
`

export const Button = styled.div`
    background-color: #A328D6;
    height: 114px;
    width: 155px;
    border-radius: 5px;
    margin-top: 13px;
    cursor: pointer;
        h1{
            margin-left: 10px;
            margin-top: 10px;
            color:white;
            font-size:21px;

        }
        p{
            margin-top:35px;
            margin-left:10px;
            font-size: 17px;
        }

`
export const EmptyDiv = styled.div`

    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
        p{
            font-size: 20px;
            font-weight:400;
            font-family: 'Raleway', sans-serif;
            color: #868686;
            text-align: center;
        }


`

export const PositiveRecord = styled.div`
    border-radius:5px;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    font-size:18px;
    font-family: 'Raleway', sans-serif;
        h1{
            color:#C6C6C6;
            margin-left:12px;
            font-weight:400;


        }
        h2{
            color:#000000;
            margin-left:5px;
            font-weight:400;

        }
        p{
            color:#03AC00;
            margin-bottom:25px;
            margin-right:11px;
            font-weight:400;

        }

`

export const NegativeRecord = styled(PositiveRecord)`

        p{
            color:#C70000;
        }
    
`



export const Records = styled.div`
    width: 100%;
    height: 100%;
    overflow-y:scroll;

`

export const Total = styled.div`
    height: 30px;
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius:5px;
        h1{
            font-size:17px;
            font-weight:700;
            font-family: 'Raleway', sans-serif;
            color:#000000;
            margin-left: 12px;
        }
      
      
`

export const LeftContent = styled.div`
    width: auto;
    display: flex;
    height: 100%;

`

export const PositiveTotal = styled.div`
      p{
            color:#03AC00;
            margin-bottom: 23px;
            margin-right: 11px;
            font-weight:400;
        }
        
`
export const NegativeTotal = styled(PositiveTotal)`
    p{color:#C70000;}
`