# Stage 1 - the build process
FROM node as prod-build
COPY package.json ./
RUN yarn install
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx
COPY --from=prod-build ./build /usr/share/nginx/html
EXPOSE 80