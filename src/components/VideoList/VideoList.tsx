import React from 'react';
import { videosApi } from '../../services/videosApi';
import { IVideos } from '../../models/IVideos';
import VideoItem from '../VideoItem/VideoItem';
import Loader from '../Loader/Loader';
import styles from './VideoList.module.css';

const VideoList = () => {
  const {
    data: videos,
    error,
    isLoading,
  } = videosApi.useFetchAllVideosQuery('');

  return (
    <div className={styles.container}>
      {error && <h1>Error</h1>}
      {videos &&
        videos.map((video: IVideos) => (
          <VideoItem key={video.id} video={video} />
        ))}
      {isLoading && <Loader />}
    </div>
  );
};

export default VideoList;
