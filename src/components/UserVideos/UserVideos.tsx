import React from 'react';
import data from '../../data/user-feed.json';
import styles from './UserVideos.module.css';

const UserVideos = () => {
  return (
    <ul className={styles.user__video__list}>
      {data.itemList.map((element) => (
        <li key={element.id}>
          <div>View Count: {element.stats.playCount}</div>
          <video
            controls
            src={element.video.playAddr}
            autoPlay
            loop
            className={styles.item__video}
          />
        </li>
      ))}
    </ul>
  );
};

export default UserVideos;
