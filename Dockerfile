
FROM node:latest as build
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build
FROM nginx:latest
COPY --from=build /app/dist/spe-calc /usr/share/nginx/html