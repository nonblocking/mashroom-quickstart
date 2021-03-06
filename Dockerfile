FROM node:10-slim
WORKDIR /opt/app
COPY lerna.json mashroom-starter.js package.json package-lock.json ./
COPY ./config ./config
COPY ./data ./data
COPY ./plugin-packages ./plugin-packages
RUN mkdir ./log
RUN npm run setup-production
EXPOSE 6060
CMD ["npm", "run", "start"]
