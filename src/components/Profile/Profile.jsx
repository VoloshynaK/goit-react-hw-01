/* eslint-disable react/prop-types */
import css from './Profile.module.css'

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css["card-container"]}>
            <div className={css["card-info"]}>
                <img src={image} alt={name} className={css["card-img"]}/>
                <p className={css["card-name"]}>{name}</p>
                <p className={css["card-tag"]}>{'@' + tag}</p>
                <p className={css["card-location"]}>{location}</p>
            </div>
            <ul className={css["card-stats"]}>
                <li className={css["stats-item"]}>
                    <span className={css["stats-label"]}>Followers</span>
                    <span className={css["stats-num"]}>{stats.followers}</span>
                </li>
                <li className={css["stats-item"]}>
                    <span className={css["stats-label"]}>Views</span>
                    <span className={css["stats-num"]}>{stats.views}</span>
                </li>
                <li className={css["stats-item"]}>
                    <span className={css["stats-label"]}>Likes</span>
                    <span className={css["stats-num"]}>{stats.likes}</span>
                </li>
            </ul>
        </div>

    )
}