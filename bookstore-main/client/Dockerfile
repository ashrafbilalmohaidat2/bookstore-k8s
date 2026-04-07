FROM node:20-alpine AS builder

WORKDIR /app

# Copy root package.json first
COPY package.json ./

# Copy client files
COPY package.json ./
COPY client/index.html ./client/
COPY client/vite.config.ts ./client/
COPY client/tsconfig.json ./client/
COPY client/tsconfig.app.json ./client/
COPY client/tsconfig.node.json ./client/
COPY client/src ./client/src
COPY client/public ./client/public

# Install and build
WORKDIR /app/client
RUN npm install
RUN npm run build

# Production stage - serve with nginx
FROM nginx:alpine

COPY --from=builder /app/client/dist /usr/share/nginx/html
COPY client/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]