FROM mhart/alpine-node:14

WORKDIR /

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build --if-present

# Run the npm start command to host the server
CMD ["npm", "test"]