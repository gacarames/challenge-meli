FROM node:14

WORKDIR /app

COPY . /app

ENV ENDPOINT_APP=/api

RUN npm install

EXPOSE 8000

CMD ["npm", "run", "serve"]

