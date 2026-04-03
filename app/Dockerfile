#Use node.js based image 
FROM node:18

#Create app directory
WORKDIR /app

#Copy files 
COPY package*.json ./

#Installs dependencies
RUN npm install 

#Copy remaining code
COPY . .

#Expose port
EXPOSE 3000

#Start Application
CMD ["npm", "start"]
