import React from 'react';
import { IVideos } from '../../models/IVideos';
import styles from './VideoItem.module.css';
import { Link } from 'react-router-dom';

interface IVideoItemProperties {
  video: IVideos;
}

const VideoItem: React.FC<IVideoItemProperties> = ({ video }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__header}>
        <Link to={`/user`}>
          <div className={styles.author__info}>
            <img
              src={video.authorMeta.avatar}
              alt="avatar"
              className={styles.item__avatar}
            />
            <div className={styles.info}>
              <div className={styles.name}>{video.authorMeta.name}</div>
              <div className={styles.hashtags}>{video?.hashtags[0]?.name}</div>
              <div className={styles.music}>
                {video.musicMeta.musicName} - {video.musicMeta.musicAuthor}
              </div>
            </div>
          </div>
        </Link>
        <button className={styles.follow__button}>Follow</button>
      </div>
      <div className={styles.container}>
        <video
          controls
          src={video.videoUrl}
          autoPlay
          loop
          className={styles.item__video}
        />
        <div className="item__video-info">
          <div className="item__video-likes"></div>
          <div className="item__videos-comments"></div>
          <div className="item__videos-repost"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
