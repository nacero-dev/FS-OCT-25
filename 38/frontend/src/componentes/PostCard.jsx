import { Link } from 'react-router-dom';
import './PostCard.css';

const PostCard = ({ post }) => {
  return (
    <article className="post-card">
      <h2 className="post-card__title">{post.title}</h2>

      {post.imageBase64 && (
        <img
          src={post.imageBase64}
          alt={post.title}
          className="post-card__image"
        />
      )}

      <p className="post-card__content">{post.content}</p>

      <small className="post-card__author">
        Autor: {post.author?.username || 'Anónimo'}
      </small>

      <div className="post-card__link">
        <Link to={`/posts/${post._id}`}>Ver post</Link>
      </div>
    </article>
  );
};

export default PostCard;
