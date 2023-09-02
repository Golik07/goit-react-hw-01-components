import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    border-top: 2px solid darkgray;
    justify-content: space-evenly;
    background-color: gainsboro;
    `;
    


export const Item = styled.li`
list-style-type: none;
display:flex;
justify-content: center;
flex-direction: column;
height: 70px;
align-items: center;
width: 100px;
`;


export const Label = styled.span`
font-size: 13px;
padding-bottom:5px;
color: grey;
`;
export const Quantity = styled.span`

font-weight: 700;
`;
