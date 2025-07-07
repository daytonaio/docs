FROM node:20.10.0 as deps

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn --prod

FROM node:20.10.0 as build

ARG PUBLIC_WEB_URL
ARG GT_PROJECT_ID
ARG GT_API_KEY

ENV PUBLIC_WEB_URL=${PUBLIC_WEB_URL}
ENV GT_PROJECT_ID=${GT_PROJECT_ID}
ENV GT_API_KEY=${GT_API_KEY}

WORKDIR /usr/src/app

COPY . .

RUN yarn
RUN npx gtx-cli translate --experimental-localize-static-urls --experimental-flatten-json-files
RUN yarn build

FROM node:20.10.0-slim

WORKDIR /usr/src/app

COPY server ./server
COPY --link --from=build /usr/src/app/dist ./dist
COPY --link --from=deps /usr/src/app/node_modules ./node_modules

CMD [ "node", "server/index.mjs" ]