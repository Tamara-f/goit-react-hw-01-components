import React from 'react';
import Profile from './Profile/Profile';
import Section from './Section';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import Transactions from './Transactions/Transactions';
import statsData from '../statistical-data.json';
import user from '../user.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import styled from 'styled-components';

const H2 = styled.h2`
  color: white;
  line-height: 1.5;
  padding-left: 10px;
  background-color: darkcyan;

  &:hover {
    background-color: darkslategrey;
  }
`;

export default function App() {
  return (
    <>
      <Section>
        <H2>Task 1</H2>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section>
        <H2>Task 2</H2>
        <Statistics stats={statsData} title="Upload stats" />
      </Section>
      <Section>
        <H2>Task 3</H2>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <H2>Task 4</H2>
        <Transactions items={transactions} />
      </Section>
    </>
  );
}
