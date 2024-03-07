import { Link } from "@remix-run/react"
import { $path } from "remix-routes" // <-- Import magical $path helper from remix-routes.

export default function Posts() {
  return (
    <div>
      <h3>Hello /posts/!</h3>
      <ul>
        <li>
          <Link
            to={$path("/posts/:id", {
              id: "apollo-11",
            })}
          >
            Apollo 11
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: $path("/posts/:id", {
                id: "apollo-12",
              }),
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
              pathname: $path("/posts/:id", {
                id: "apollo-13",
              }),
            }}
          >
            Apollo 13
          </Link>
        </li>
      </ul>
    </div>
  )
}
