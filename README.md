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
docker build -t tcrokicki/personal_site_frontend .
```
Use dockerhub desktop to store and pull or

Example
```
docker login --username=tcrokicki --email=youremail@company.com

docker tag tcrokicki/personal_site_frontend ${yourhubusername}/personal_site_frontend:latest

docker push tcrokicki/personal_site_frontend
```

Implementation
```
docker login --username=tcrokicki
docker tag tcrokicki/personal_site_frontend tcrokicki/personal_site_frontend:latest
docker push tcrokicki/personal_site_frontend
```


## Nuxt

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
