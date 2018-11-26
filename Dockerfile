# Stage 1 - the build process
FROM node as build-deps
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx
COPY --from=build-deps ./build /usr/share/nginx/html