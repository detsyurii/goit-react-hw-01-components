import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { Friends } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(friends => (
        <FriendListItem key={friends.id} friends={friends} />
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
