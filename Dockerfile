# Stage 1: Build the React frontend
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve the static build with vite preview
FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY vite.config.js ./
COPY --from=build /app/dist ./dist

EXPOSE 4173

USER node

CMD ["npm", "run", "start"]
