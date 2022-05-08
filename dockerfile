FROM node:18-buster-slim
RUN mkdir /app

COPY ./package.json /app
COPY ./dist /app
WORKDIR /app
RUN npm install --production
ENV MONGO_CONN_STRING=${MONGO_CONN_STRING}
EXPOSE 3000
