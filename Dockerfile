# Stage 1
FROM alpine:3.22 AS builder

WORKDIR /app

COPY . .

# Stage 2
FROM nginx:alpine

COPY --from=builder /app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


