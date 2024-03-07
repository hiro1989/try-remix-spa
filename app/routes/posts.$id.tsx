import { Link, useParams } from "@remix-run/react"

export default function PostsPostId() {
  const { id } = useParams()
  return (
    <div>
      <div>Hello /posts/{id}!</div>
      <div>
        <Link
          to={`/posts/${id}/comments/${Math.random().toString(36).substring(7)}`}
        >
          See random comments
        </Link>
      </div>
    </div>
  )
}
