import {List} from './FriendList.styled'
 import {FriendListItem} from "./FriendListItem/FriendListItem"
 import PropTypes from "prop-types"
 
export const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(friend => (
               <FriendListItem
               key ={friend.id} 
               avatar={friend.avatar} 
               name={friend.name} 
               isOnline={friend.isOnline} ></FriendListItem>
            ))}
        </List>
    );
}

FriendList.propTypes = {
    friends:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            avatar:PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired,
        })
    ).isRequired,};