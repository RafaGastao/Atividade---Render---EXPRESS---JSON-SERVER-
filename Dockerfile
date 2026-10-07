<<<<<<< HEAD
# Use the official Node.js image as the base image 
FROM node:18 

# Set the working directory in the container 
WORKDIR /main 

EXPOSE 3000 

# Copy the application files into the working directory 
COPY . /main 

# Install the application dependencies 

RUN npm install 

# Define the entry point for the container 
CMD ["npm", "start"] 
=======
# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /main

EXPOSE 3000

COPY CRUD-Completo/package*.json ./

RUN npm install

COPY CRUD-Completo/. .

CMD ["npm", "start"]
>>>>>>> 5412cc2 (Adiciona CRUD com busca por CPF)
