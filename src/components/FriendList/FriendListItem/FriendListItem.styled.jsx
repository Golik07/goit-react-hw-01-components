import styled from '@emotion/styled';


export const Item = styled.li`
list-style-type:none;
align-items: center;
background-color: white;
display: flex;
margin-bottom: 20px;
padding: 10px;
    height: 50px;
    width: 200px;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;



export const Status = styled.span`

justify-content: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const Avatar = styled.img`
padding-left: 20px;
    margin-right: 20px;
`;
export const Name = styled.p`
font-size: 18px;
font-weight: 600;
`; 