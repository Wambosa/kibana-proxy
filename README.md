# vpc-proxy
_dead simple http passthru proxy that i use for getting into resources behind vpc quickly. There are a couple of approaches here._


### the goal
we want to hit `http://localhost/_plugin/kibana/`


### tinyproxy service


```
sudo apt-get install tinyproxy
sudo tinyproxy -d -c ./resource.conf
```


### node service

```
npm install
node index.js
```


### future

- paramaterize endpoints and port