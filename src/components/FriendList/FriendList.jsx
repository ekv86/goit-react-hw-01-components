import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendEl } from './FriendEl';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({avatar, name, isOnline, id}) => {
        return (
          <FriendEl
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  friends: PropTypes.array.isRequired,
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};
