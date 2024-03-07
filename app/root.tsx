import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div
          style={{
            display: "flex",
            gap: "8px",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
        </div>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function HydrateFallback() {
  return <p>Loading...</p>
}
