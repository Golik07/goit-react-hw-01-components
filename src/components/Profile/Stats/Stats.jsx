import {List,Item,Label,Quantity} from './Stats.styled'
import PropTypes from "prop-types"


export const Stat = ({followers,views,likes}) => {
    return (
       <List>
        <Item>
       <Label>Followers</Label>
       <Quantity>{followers}</Quantity>
       </Item>
       <Item>
       <Label>Views</Label>
       <Quantity>{views}</Quantity>
       </Item>
       <Item>
       <Label>Likes</Label>
       <Quantity>{likes}</Quantity>
       </Item>
       </List>
    );
}

Stat.propTypes={
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}