import styled from 'styled-components';

export const Div = styled.div`
    background-color: #006494;
    background-image: url("https://www.transparenttextures.com/patterns/white-wall-3.png");
    height: 150vh;
    margin: 0;
    padding: 0;
    `;

export const Main = styled.div`
margin: 0;
padding: 50px 0px 10px 0px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
`;

export const FormDiv = styled.div`
display: flex;
background-color: #a4bf52;
flex-direction: column;
align-items: center;
font-family: "Bebas Neue", ariel;
height: 200px;
width: 500px;
border-radius:5px;
border: 1px solid black;
form{
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 20px 20px;

    input{
        font-size: 16px;
        border-radius: 10px;
        margin-bottom: 15px;
        border: 0;
        color: #006494;
        font-family: "Bebas Neue", ariel;
        height: 30px;
        text-align: center;
    }

    button{
        border-radius: 20px;
        height: 40px;
        background-color: #02848E;
        box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.50);
        margin-top: 20px;
        font-family: 'Slabo 27px', cursive;
        font-weight: 600;
        font-size: 1.4rem;
        border: none;
        color: #ECA400;
        letter-spacing: 1.5px;
        cursor: pointer;
    }
}
`;
