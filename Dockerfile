FROM node:18

WORKDIR /main

EXPOSE 3000

COPY CRUD-Completo/package*.json ./

RUN npm install

COPY CRUD-Completo/. .

CMD ["npm", "start"]
