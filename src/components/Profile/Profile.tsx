import { videosApi } from '../../services/videosApi';
import Loader from '../Loader/Loader';
import React from 'react';
import styles from './Profile.module.css';
import UserVideos from '../UserVideos/UserVideos';

const Profile = () => {
  const { data: user, error, isLoading } = videosApi.useFetchUserInfoQuery('');
  return (
    <div className={styles.container}>
      {error && <h1>Error</h1>}

      {user && (
        <>
          <div className={styles.user}>
            <img
              src={user.user.avatarMedium}
              alt={user.user.name}
              className={styles.user__avatar}
            />
            <h2>{user.user.nickname}</h2>
            <div className={styles.user__stats}>
              <div>Followers: {user.stats.followerCount}</div>
              <div>Followed: {user.stats.followingCount}</div>
              <div>Hearts: {user.stats.heart}</div>
              <div>Videos: {user.stats.videoCount}</div>
            </div>
          </div>
          <UserVideos />
        </>
      )}

      {isLoading && <Loader />}
    </div>
  );
};

export default Profile;
