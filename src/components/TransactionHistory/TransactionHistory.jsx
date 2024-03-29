import { Table, Tbody, Thead, Tr ,Th,Td} from "./TransactionHistory.styled"
import PropTypes from "prop-types"

export const TransactionHistory = ({items})=>{
    return (
        <Table>
            <Thead>
                <Tr>
                <Th>Type</Th>
                <Th>Amount</Th>
                <Th>Currency</Th>
                </Tr>
            </Thead>
        <Tbody>
            {items.map(({id,type,amount,currency})=>(
                <Tr key={id}>
                <Td>{type}</Td>
                <Td>{amount}</Td>
                <Td>{currency}</Td>
                </Tr>
            ))}
        </Tbody>
        </Table>
    );
};

TransactionHistory.propTypes = {
items:PropTypes.arrayOf(
    PropTypes.shape({
        id:PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
        amount:PropTypes.string.isRequired,
        currency:PropTypes.string.isRequired,
    })
).isRequired,
}