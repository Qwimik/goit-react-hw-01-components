import PropTypes from 'prop-types';

import {
  ProfileContainer,
  ProfileCadr,
  CardDescription,
  CardThum,
  CardAvatar,
  CardTitle,
  CardText,
  CardStats,
  CardStatsItem,
  StatsItemQuantity,
} from 'components/Profile/Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileContainer>
      <ProfileCadr>
        <CardDescription>
          <CardThum>
            <CardAvatar src={avatar} alt={username} />
          </CardThum>
          <CardTitle>{username}</CardTitle>
          <CardText>@{tag}</CardText>
          <CardText>{location}</CardText>
        </CardDescription>

        <CardStats>
          <CardStatsItem>
            <CardText>Followers</CardText>
            <StatsItemQuantity>{followers}</StatsItemQuantity>
          </CardStatsItem>
          <CardStatsItem>
            <CardText>Views</CardText>
            <StatsItemQuantity>{views}</StatsItemQuantity>
          </CardStatsItem>
          <CardStatsItem>
            <CardText>Likes</CardText>
            <StatsItemQuantity>{likes}</StatsItemQuantity>
          </CardStatsItem>
        </CardStats>
      </ProfileCadr>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
