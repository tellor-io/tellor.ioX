# Strapi configuration

To run this strapi setup first create a docker volume for strapi:

```
docker volume create --name=strapidata
```

then update .env.example with your own values being sure to set a secure password
finally simply

```
docker-compose up -d
```