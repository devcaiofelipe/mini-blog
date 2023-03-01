import './styles.css'
import { PostCard } from '../PostCard/index'

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map(post => (
      <PostCard cover={post.cover} title={post.title} id={post.id} body={post.body} key={post.id}/>
    ))}
  </div>
)