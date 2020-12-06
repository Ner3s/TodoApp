import styled from 'styled-components';

// COLOR 
/*
PRIMARY: #ed5050
SECONDARY: #ffa247
*/

export const Container = styled.div`
  max-width: 650px;  
  width: 100%;
  height: 100vh;

  margin: 0 auto;

  padding: 0 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    padding-bottom: 15px;
    color: #f1f1f1;
  }
`; 

export const ContainerFluid = styled.div` 
  width: 100%;
  height: 100%;

  background: linear-gradient(360deg, #ed5050 0%,#ffa247 100% );
`;

export const Card = styled.div`
  max-width: 550px;
  width: 100%;

  min-height: 250px;

  padding: 30px;
  background-color: #f1f1f1;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #00000050;
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: row;
`;

export const Todoarea = styled.div`
  padding: 10px 0;
  
  ul{
    list-style: none;
  }

  ul li {
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    transition: all .3s ease-in-out;
  }

  ul li:hover{ 
    background: #ffa247;
  }

  ul li span svg{
    margin: 0 5px;
    cursor: pointer;
  }
`;