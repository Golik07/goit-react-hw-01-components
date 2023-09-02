import styled from '@emotion/styled';
import {getRandomHexColorBtn} from '../until/randomColor'

export const Section = styled.section`
margin: 0 auto;
background-color:white;
    width: 400px;
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`

export const Title = styled.h2`
display: flex;
justify-content: center;
padding-top: 30px;
padding-bottom: 20px;
`;

export const List = styled.ul`
display: flex;
padding-left: 0;
border-top: 2px solid darkgrey;
`;

export const Item = styled.li`
list-style-type:none;
width: 80px;
height: 70px;
display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${getRandomHexColorBtn};
    padding-top: 15px;

`;

export const Label = styled.span`
margin-bottom: 10px;
`;

export const Percentage = styled.span`
font-size:20px;
font-weight: 700;
`;
