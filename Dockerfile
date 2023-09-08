# Builder
FROM node:18-slim as builder
WORKDIR /opt/app
COPY ./config ./config
COPY ./plugin-packages ./plugin-packages
COPY *.json ./
RUN npm ci
RUN npm run build

# Actual image
FROM node:18-slim
WORKDIR /opt/app
COPY *.json mashroom-starter.js ./
COPY ./config ./config
RUN mkdir data
COPY --from=builder /opt/app/plugin-packages ./plugin-packages
RUN npm ci --production

EXPOSE 6060
CMD ["npm", "run", "start"]
