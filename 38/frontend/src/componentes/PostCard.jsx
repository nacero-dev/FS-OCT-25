import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <article style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h2>{post.title}</h2>

      {post.imageBase64 && (
        <img
          src={post.imageBase64}
          alt={post.title}
          style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
        />
      )}

      <p>{post.content}</p>

      <small>
        Autor: {post.author?.username || 'Anónimo'}
      </small>

      <div>
        <Link to={`/posts/${post._id}`}>Ver post</Link>
      </div>
    </article>
  );
};

export default PostCard;
