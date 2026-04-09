FROM node:20-alpine AS builder

WORKDIR /app

# Copy everything needed
COPY package.json ./
COPY client/package.json ./client/
COPY client/tsconfig*.json ./client/
COPY client/index.html ./client/
COPY client/vite.config.ts ./client/
COPY client/src ./client/src
COPY client/public ./client/public

# Install and build
WORKDIR /app/client
RUN npm install --frozen-lockfile
RUN npm run build

# Production stage
FROM nginx:1.27-alpine

ENV NODE_ENV=production

COPY --from=builder /app/client/dist /usr/share/nginx/html
COPY client/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]