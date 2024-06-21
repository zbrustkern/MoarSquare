export default function PostList(props) {
    return (
        <main>
          {props.posts.map((post) => (
            <p key={post.id}>{post.text}</p>
          ))}
        </main>
      )
}