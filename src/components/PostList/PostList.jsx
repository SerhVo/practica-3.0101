const PostList = ({ db }) => {
  return (
    <>
      <h2 className="post-list-title">Post List</h2>
      <ul className="post-list">
        {db.map(el => (
          <li className="post-list-item" key={el.id}>
            <img className="post-list-img" src={el.src} width="200" alt="" />
            <h4 className="post-list-item-title">{el.title}</h4>
            <p className="post-list-item-text">{el.textDesk}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default PostList;
