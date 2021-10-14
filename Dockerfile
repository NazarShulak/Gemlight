FROM node:14-alpine

RUN mkdir /app
WORKDIR /app

COPY ./backend/package.json /app

RUN npm install

