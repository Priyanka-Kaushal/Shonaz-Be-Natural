# Stage 1: Build React app
FROM node:18 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .

# Declare build-time arg and export it as an ENV var
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL


# Build will now see process.env.REACT_APP_API_URL
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine
# or (b) the current stable Alpine tag
FROM nginx:stable-alpine

# or (c) a specific version (e.g. 1.25.3 on Alpine)
FROM nginx:1.25.3-alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
