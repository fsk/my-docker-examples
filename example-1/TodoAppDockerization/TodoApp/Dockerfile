FROM node
LABEL maintainer=furkansahinkulaksiz@gmail.com
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 1905
CMD ["npm", "start"]