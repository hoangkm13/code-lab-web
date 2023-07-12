FROM node:18.16.0 as BUILD

WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm install --unsafe-perm

COPY . .

RUN npm run build

EXPOSE 8080
CMD ["npm", "run", "serve"]