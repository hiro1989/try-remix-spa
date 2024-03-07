import { Link, useParams } from "@remix-run/react"
import { $params, $path } from "remix-routes"

export default function PostsPostId() {
  const { id } = $params("/posts/:id", useParams())
  return (
    <div>
      <div>Hello /posts/{id}!</div>
      <div>
        <Link
          to={$path("/posts/:id/comments/:commentId", {
            id,
            commentId: Math.random().toString(36).substring(7),
          })}
        >
          See random comments
        </Link>
      </div>
    </div>
  )
}
