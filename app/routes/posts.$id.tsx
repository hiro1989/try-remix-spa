import { useParams } from "@remix-run/react"

export default function PostsPostId() {
  const { id } = useParams()
  return <div>Hello /posts/{id}! </div>
}
