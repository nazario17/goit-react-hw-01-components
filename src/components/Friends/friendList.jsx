import css from './friendList.module.css';
import { FriendListItem } from './friendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
        {friends.map(friend => (
        <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={ friend.isOnline}
        />
        ))}
    </ul>
    )
};
