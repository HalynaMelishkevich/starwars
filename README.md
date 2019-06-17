# How to
###### Run locally with command-line reporting
```
npm run test-local
```
###### Run locally with Allure reporting
```
npm run test-allure
```
###### Run in Docker container
```
docker build --tag=starwars .
docker run --net=host starwars
```

## Reporting
Generate a fresh new Allure report by running the next command:
```
npm run report
```
