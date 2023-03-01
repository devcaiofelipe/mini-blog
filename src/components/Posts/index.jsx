import './styles.css';
import { PostCard } from '../PostCard/index';
import P from 'prop-types';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard cover={post.cover} title={post.title} id={post.id} body={post.body} key={post.id} />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.array,
};
