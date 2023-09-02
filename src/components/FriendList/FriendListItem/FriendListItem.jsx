import {Item,Status,Avatar,Name} from'./FriendListItem.styled'
import PropTypes from "prop-types"

export const FriendListItem = ({avatar,isOnline,name}) => {
    return (
        <Item >
        <Status isOnline={isOnline}></Status>
        <Avatar src={avatar} alt='User avatar' width='48'/>
        <Name>{name}</Name>
        </Item>
    );
}

FriendListItem.propTypes={
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}