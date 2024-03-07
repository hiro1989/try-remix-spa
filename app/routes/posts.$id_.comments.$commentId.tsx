import { useParams } from "@remix-run/react"

export default function PostsPostIdCommentId() {
  const { id, commentId } = useParams()
  return (
    <div>
      Hello /posts/{id}/comments/{commentId}!
    </div>
  )
}
