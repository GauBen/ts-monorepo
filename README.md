# ts-monorepo

This repo contains a monorepo setup for TypeScript projects.

The main goal is to provide a fast and reliable watch mode for development.

## Features

- TypeScript is compiled to JavaScript on the fly with [esbuild](https://esbuild.github.io/)
- When a service is started in dev mode, it will watch for changes in its source code and restart the service automatically
- Depenedencies are also watched
- <kbd>Ctrl</kbd>+<kbd>Click</kbd> brings to the source TS code, not the built JS code
- Building and starting services uses build artifacts, not the source code, so it's as fast as can be
