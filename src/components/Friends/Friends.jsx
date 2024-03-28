/* eslint-disable react/prop-types */
import css from './Friends.module.css'

export default function FriendList({friends}) {
    return (
        <ul className={css["list"]}>
            {friends.map((friend) => {
                return (
                    <li key={friend.id} className={css["list-item"]}>
                        <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}/>
                    </li>
                )
            })}
            
        </ul>
    )
}

function FriendListItem({ avatar, name, isOnline }) {
    const classNames = isOnline ? css["online"] : css["offline"];

    return (
        <>
            <img src={avatar} alt="Avatar" width="48" className={css["card-img"]} />
            <p className={css["card-name"]}>{name}</p>
            <p className={css["card-status"] + " " + classNames}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </>
    )
}