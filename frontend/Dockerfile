FROM node:14.17.4-buster-slim

COPY --chown=node . /app/

USER node
WORKDIR /app/
RUN npm install
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npx", "serve", "-s", "build"]