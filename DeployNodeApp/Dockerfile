# IMAGE
FROM node:alpine

WORKDIR /usr/app

# INSTALLING DEPENDENCY
COPY ./package.json ./
RUN npm install 
COPY ./ ./

# DEFAULT COMMAND
CMD ["npm", "start"]
