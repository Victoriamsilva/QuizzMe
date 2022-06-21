FROM node:14-alpine as DEV

WORKDIR /quizzme

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN ls

EXPOSE 3000

CMD ["yarn", "dev"]