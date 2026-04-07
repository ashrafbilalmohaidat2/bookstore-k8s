FROM node:20-alpine AS builder

WORKDIR /app

# Copy root package.json first (needed because of "file:.." dependency)
COPY package.json ./

# Copy server files
COPY server/package.json ./server/
COPY server/tsconfig.json ./server/
COPY server/src ./server/src

# Install and build
WORKDIR /app/server
RUN npm install
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY server/package.json ./server/

WORKDIR /app/server
RUN npm install --omit=dev

COPY --from=builder /app/server/dist ./dist

EXPOSE 5000

CMD ["node", "dist/app.js"]