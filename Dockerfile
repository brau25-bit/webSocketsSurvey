FROM node:22-slim AS builder

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY src ./src

COPY tsconfig.json .

RUN pnpm build

RUN pnpm prune --prod



FROM node:22-slim AS production

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder package.json ./

CMD [ "pnpm", "run", "start" ]