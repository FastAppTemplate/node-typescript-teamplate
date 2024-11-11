# Node TypeScript Template

- [x] TypeScript
- [x] Husky
- [x] CommitLint
- [x] Commitizen
- [x] ESLint
- [x] Prettier
- [x] TypeDoc

## Scaffolding your Node.js project

With NPM:

```bash
npm create @app-template/app@latest my-node-project -- --template node
```

With PNPM:

```bash
pnpm create @app-template/app@latest my-node-project --template node
```

## How to use

### Development

1. Run `pnpm build:dev` to build the code.
2. Run `pnpm start:dev` in another terminal to execute the code.

### Production

```bash
pnpm build
```

### Testing

Before running tests, ensure the project is built.

In the development environment:

1. Run `pnpm build:dev` to build the code.
2. Run `pnpm test:dev` to run the tests in another terminal.

In the production environment:

1. Run `pnpm build` to build the code.
2. Run `pnpm test` in another terminal to execute the tests.
