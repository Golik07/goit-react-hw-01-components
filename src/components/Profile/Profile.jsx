import {Container,Description,Img,Name,Tag,Location} from "./Profile.styled"
import {Stat} from "./Stats/Stats"
import PropTypes from "prop-types"

export const Profile  = ({username,tag,location,avatar,stats})=>{
    return (
    <Container>
        <Description>
            <Img src={avatar} alt="User avatar"/>
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>
        <Stat 
            followers={stats.followers}
            views={stats.views}
            likes={stats.likes}
            ></Stat>
    </Container>
    );
};

Profile.propTypes={
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }).isRequired,
};