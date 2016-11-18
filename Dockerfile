FROM node:6
MAINTAINER Shaun Warman

RUN mkdir -p /var/www/airlerts
WORKDIR /var/www/airlerts/

RUN chmod -R 755 /var/www/airlerts

COPY package.json /var/www/airlerts/

RUN npm install

RUN mkdir -p dist/client
RUN mkdir -p dist/server

COPY webpack.config.js /var/www/airlerts/
COPY gulpfile.js /var/www/airlerts/
RUN npm run build

COPY . /var/www/airlerts/

CMD ["node", "dist/server/index.js"]

