FROM node:14.16.1 as builder
COPY . /app
WORKDIR /app
ARG NEXT_PUBLIC_APP_URL
ARG NEXT_PUBLIC_API_ENDPOINT
ARG VERSION
ENV NODE_ENV production

RUN npm ci
RUN npm run lint
RUN npm test
RUN npm run build

FROM node:14.16.1-alpine
COPY --from=builder /app /app
WORKDIR /app
ARG VERSION=none
ENV VERSION=$VERSION
ENV PORT=80
EXPOSE 80
CMD [ "npm", "start" ]