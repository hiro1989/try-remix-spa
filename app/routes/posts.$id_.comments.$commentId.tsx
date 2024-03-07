import { useParams } from "@remix-run/react"
import { $params } from "remix-routes"

export default function PostsPostIdCommentId() {
  const { id, commentId } = $params(
    "/posts/:id/comments/:commentId",
    useParams(),
  )
  return (
    <div>
      Hello /posts/{id}/comments/{commentId}!
    </div>
  )
}
