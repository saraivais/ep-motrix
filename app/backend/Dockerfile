FROM node:16.14-alpine

WORKDIR /app_backend

COPY package* ./

RUN npm install

COPY . .

EXPOSE 4001

CMD ["npm", "start"]
