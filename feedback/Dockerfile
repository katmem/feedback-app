FROM node:latest as node
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run ng build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=node /app/dist/feedback .