FROM node:10-slim
WORKDIR /opt/app
COPY .npmrc lerna.json mashroom-starter.js package.json ./
COPY ./config ./config
COPY ./data ./data
COPY ./plugin-packages ./plugin-packages
RUN mkdir ./log
RUN npm run setup-production
EXPOSE 6060
CMD ["npm", "run", "start"]
