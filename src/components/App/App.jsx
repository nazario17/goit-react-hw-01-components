import React from 'react';
import { Profile } from 'components/Profile/profile';
import { Statistics } from 'components/Statistics/statistic';

import user from '../Profile/user.json';
import data from '../Statistics/data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};