import React from 'react';
import { Profile } from 'components/Profile/profile';
import { Statistics } from 'components/Statistics/statistic';
import { FriendList } from 'components/Friends/friendList';
import { Transaction } from 'components/Transaction/transaction';

import user from '../Profile/user.json';
import data from '../Statistics/data.json';
import friends from '../Friends/friends.json';
import transactions from '../Transaction/transactions.json';

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
      <FriendList friends={friends} />
      <Transaction items={transactions} />
    </div>
  );
};
