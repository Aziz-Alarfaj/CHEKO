# CHEKO
A fictional restaurant built with ReactJS.  
It is a system that allows users to browse through the restaurant menu and check out the location of their branches across the city.  

To run this application using docker, navigate to the `/bin` and run the `deploy.sh` as the following:

For development environment: (localhost port:3000)
```
# to start the container
./deploy.sh dev up

# to stop the container
./deploy.sh dev down
```
For production environment: (localhost port:8080)
```
# to start the container
./deploy.sh prod up

# to stop the container
./deploy.sh prod down
```
If you don't want to use docker, just navigate to `/cheko` then run:

For development
```
npm i
npm start
```
For production
```
npm i
npm run build
```