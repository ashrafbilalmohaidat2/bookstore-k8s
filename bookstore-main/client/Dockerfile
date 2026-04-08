FROM node:20-alpine AS builder

WORKDIR /app

# Copy everything needed
COPY package.json ./
COPY client/ ./client/

# Install and build
WORKDIR /app/client
RUN npm install
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=builder /app/client/dist /usr/share/nginx/html
COPY client/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]