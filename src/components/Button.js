import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:22px;
background:transparent;
border:0.05rem solid var(--mainDark);
border-color:${props=> props.cart? "var(--mainYellow)" : "var(--mainDark)"};
color: ${props => (props.cart? "var(--mainYellow)" : "gray")};
boder-radius:6px;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${props=>props.cart? "var(--mainYellow)" : "#f9f9f9"};
}
&:focus{
    outline: none;
}
`