import styled from '@emotion/styled';

export const Container = styled.div`
display: flex;
    flex-direction: column;
    margin: 50px auto;
    padding-top: 32px;
    width: 300px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const Description = styled.div`

    margin: 0px auto;
    text-align: center;
    padding-bottom: 16px;
    

`;

export const Img = styled.img`
width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;

`;

export const Name = styled.p`
font-weight: 700;
`;

export const Tag = styled.p`
color: grey;`;

export const Location = styled.p`
color: grey;`;