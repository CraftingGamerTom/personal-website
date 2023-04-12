# tom-personal-site

> Nuxt Project for my personal website

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Docker Setup
```
docker build -t registry.sharpnub.com/craftinggamertom/personal-website .
```
Use dockerhub desktop to store and pull or

Example
```
docker login --username=tcrokicki registry.sharpnub.com

docker tag registry.sharpnub.com/craftinggamertom/personal-website registry.sharpnub.com/craftinggamertom/personal-website:vVERSION

docker push registry.sharpnub.com/craftinggamertom/personal-website:vVERSION
```

## Nuxt

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
