
FROM node

RUN mkdir -p /app/flipper

WORKDIR /app/flipper

COPY package*.json ./

RUN npm install

COPY ./dist ./

EXPOSE 3000

CMD ["node", "index.js"]