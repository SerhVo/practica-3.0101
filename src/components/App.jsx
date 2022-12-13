import PostList from './PostList/PostList';
import database from '../database/database.json';
export const App = () => {
  console.log(database);
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
      <PostList db={database} />
    </div>
  );
};
