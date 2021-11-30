FROM node:16.10

COPY --chown=node . /app/

USER node
WORKDIR /app/
RUN npm install
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npx", "serve", "-s", "build"]