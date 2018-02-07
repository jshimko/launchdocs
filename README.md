# Launchdocs

A [Next.js](https://github.com/zeit/next.js) app for fetching a table of contents and rendered Markdown from a git repo and creating a documentation site. This is _very_ much a WIP and specifically hard coded to load [reactioncommerce/reaction-docs](https://github.com/reactioncommerce/reaction-docs).

## Build

```sh
git clone https://github.com/jshimko/launchdocs.git
cd launchdocs

npm i
```

## Run

**Development server**

```sh
# start a live reloading dev server
npm run dev
```

App running on <http://localhost:3000>

**Production build/server**

```sh
# create a production build
npm run build

# run it
npm start
```

App running on <http://localhost:3000>
