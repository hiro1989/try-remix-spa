import { useParams } from "@remix-run/react"
import { $params } from "remix-routes"

export default function BlogsId() {
  const { id, commentId } = $params(
    // invalid path
    "/posts/:id/comments/:commentId",
    useParams(),
  )
  return (
    <div>
      Oops! id: {id ?? "undefined"}, commentId: {commentId ?? "undefined"}
    </div>
  )
}
