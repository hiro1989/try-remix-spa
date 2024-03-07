# Impression

## Pros

- FWというレール
- ドキュメントの充実

## Cons

- export default 必須
- もろもろ type safe でない
  - `<Link>`
  - `useParams`
- 3rd party package だが、[remix-routes](https://remix.run/resources/remix-routes) を使えば、だいぶ型安全になる
  - まだ人間が間違えてしまう余地があるが・・・
    - e.g. `app/routes/blogs.$id.tsx`

## 中立

- routes配下に全てフラットに並べるしかなさそう（フォルダ分けできない）
  - ref. [🗺️ Flat Routes · remix-run/remix · Discussion #4482](https://github.com/remix-run/remix/discussions/4482)
  - 真の意味で File based routing っぽい

# templates/spa

This template leverages [Remix SPA Mode](https://remix.run/docs/en/main/future/spa-mode) and the [Remix Vite Plugin](https://remix.run/docs/en/main/future/vite) to build your app as a Single-Page Application using [Client Data](https://remix.run/docs/en/main/guides/client-data) for all of your data loads and mutations.

## Setup

```shellscript
npx create-remix@latest --template remix-run/remix/templates/spa
```

## Development

You can develop your SPA app just like you would a normal Remix app, via:

```shellscript
npm run dev
```

## Production

When you are ready to build a production version of your app, `npm run build` will generate your assets and an `index.html` for the SPA.

```shellscript
npm run build
```

### Preview

You can preview the build locally with [vite preview](https://vitejs.dev/guide/cli#vite-preview) to serve all routes via the single `index.html` file:

```shellscript
npm run preview
```

> [!IMPORTANT]
>
> `vite preview` is not designed for use as a production server

### Deployment

You can then serve your app from any HTTP server of your choosing. The server should be configured to serve multiple paths from a single root `/index.html` file (commonly called "SPA fallback"). Other steps may be required if the server doesn't directly support this functionality.

For a simple example, you could use [sirv-cli](https://www.npmjs.com/package/sirv-cli):

```shellscript
npx sirv-cli build/client/ --single
```
