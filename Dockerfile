FROM node:17-alpine3.14

ADD .output /.output

EXPOSE 80
EXPOSE 443


WORKDIR /webapp/.output

ENV NUXT_HOST=0.0.0.0
ENV PORT=8080

RUN npm install serve -g

# CMD ["node", "/.output/server/index.mjs"]
CMD ["serve", "-s", "/.output/public"]