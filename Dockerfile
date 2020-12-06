FROM node:10.13.0 as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD npm run start


# sudo chmod 666 /var/run/docker.sock         change permission
# docker image ls
# docker build -t dockerdev .
# docker run -p 8000:4200 dockerdev
# docker stop dockerdev in case u want to stop

