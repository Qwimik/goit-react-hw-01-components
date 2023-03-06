import { Profile } from 'components/Profile/Profile';
import data from 'data/user.json';

const { username, tag, location, avatar, stats } = data;

export const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </>
  );
};
