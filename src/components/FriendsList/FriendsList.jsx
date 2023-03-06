import PropTypes from 'prop-types';

import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';

import {
  FriendsContainer,
  FriendsCards,
} from 'components/FriendsList/Friends.List.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsContainer>
      <FriendsCards>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendsListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </FriendsCards>
    </FriendsContainer>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
