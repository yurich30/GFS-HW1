import React from 'react';
import { VideoItem } from "@yurich30/component-library";
import styles from './VideoList.module.css';
import videos from '../../data/fedd.json';

const VideoList = () => {
//   const {
//     data: videos,
//     error,
//     isLoading,
//   } = videosApi.useFetchAllVideosQuery('');

  return (
    <div className={styles.container}>
      {/*{error && <h1>Error</h1>}*/}
      {videos.map((video: any) => (
          <VideoItem key={video.id} video={video} />
        ))}
      {/*{isLoading && <Loader />}*/}
    </div>
  );
};

export default VideoList;
