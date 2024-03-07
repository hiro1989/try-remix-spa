import { Link } from "@remix-run/react"

export default function Posts() {
  return (
    <div>
      <h3>Hello /posts/!</h3>
      <ul>
        <li>
          <Link to="/posts/apollo-11">Apollo 11</Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/posts/apollo-12",
              search: "q=remix",
              hash: "the-hash",
            }}
          >
            Apollo 12
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/posts/apollo-13",
            }}
          >
            Apollo 13
          </Link>
        </li>
      </ul>
    </div>
  )
}
