FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm init -y && npm install express
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]