import user from './user';
import data from './data';
import friends from './friends';
import transactions from './transactions';

import { Profile } from './Profile/Profile';
import { Statistic } from './Statistic/Statistic';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        tag={user.tag}
        avatar={user.avatar}
        username={user.username}
        location={user.location}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};
