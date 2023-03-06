import PropTypes from 'prop-types';

import {
  FriendsItem,
  FriendsStatus,
  FriendsText,
} from 'components/FriendsListItem/FriendsListItem.styled';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <FriendsStatus isOnline={isOnline}></FriendsStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendsText>{name}</FriendsText>
    </FriendsItem>
  );
};

FriendsListItem.protoType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inOnline: PropTypes.bool.isRequired,
};
