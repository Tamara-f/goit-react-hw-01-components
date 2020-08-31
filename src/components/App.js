import React from 'react';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import Transactions from './Transactions/Transactions';

import statsData from '../data/statistical-data.json';
import user from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export default function App() {
  return (
    <>
      <Profile {...user} />

      <Statistics stats={statsData} title="Upload stats" />

      <FriendList friends={friends} />

      <Transactions items={transactions} />
    </>
  );
}
