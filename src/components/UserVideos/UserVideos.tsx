import React from 'react';
import data from '../../data/user-feed.json';
import styles from './UserVideos.module.css';

const UserVideos = () => {
  return (
    <div className={styles.item__list}>
      {data.itemList.map((element) => (
        <div key={element.id}>
          <div>View Count: {element.stats.playCount}</div>
          <video
            controls
            src={element.video.playAddr}
            autoPlay
            loop
            className={styles.item__video}
          />
        </div>
      ))}
    </div>
  );
};

export default UserVideos;
