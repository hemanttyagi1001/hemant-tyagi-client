# Stage 1: Build the React frontend
FROM node:22-alpine AS build

WORKDIR /app

# Vite inlines VITE_* env vars at build time, so the Maps key must be
# available here (the .env file is excluded via .dockerignore).
ARG VITE_GOOGLE_MAPS_API_KEY
ENV VITE_GOOGLE_MAPS_API_KEY=$VITE_GOOGLE_MAPS_API_KEY

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve the static build with a lightweight static server
FROM node:22-alpine

WORKDIR /app

# `serve` is a tiny static file server with SPA fallback (-s).
RUN npm install -g serve@14

COPY --from=build /app/dist ./dist

EXPOSE 4173

USER node

# -s: single-page-app mode (fallback to index.html for client-side routing)
CMD ["serve", "-s", "dist", "-l", "4173"]
