import { Profile } from './Profile/Profile';
import user from '../Data/user.json';
import transactions from '../Data/transactions.json';
// import data from '../Data/data.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

console.log(user);
export const App = () => {
  return (
    <div className="container">
      <Profile {...user} />
      <Statistics title="Upload stats" />
      <FriendList />
      <TransactionHistory transactionsData={transactions} />
    </div>
  );
};
