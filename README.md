# Ultimate Todo List

##### Local Installation

    - yarn install
    - yarn start


##### Local Docker Build

    - yarn build
    - docker build . -t mytodo
    - docker run -p 3000:80 -d mytodo
    - Open in the browser:

    http://localhost:3000


##### Dockerhub Build

    - docker pull mohsinkhalid/ultimatetodo 
    - docker run -p 3000:80 -d mohsinkhalid/ultimatetodo
    - Open in the browser:

    http://localhost:3000