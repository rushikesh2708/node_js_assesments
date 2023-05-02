

const apiCallFromRequest = require('./config')
const apiCallFromNode = require('./call')

const http = require('http')

http.createServer((req, res) => {
        if(req.url === "/request"){
            apiCallFromRequest.callApi(function(response){
                res.write(JSON.stringify(response));
                res.end();
            });
        }
        else if(req.url === "/node"){
            apiCallFromNode.callApi(function(response){
                res.write(response);
                res.end();
            });
        }
        
        
}).listen(3000);

console.log("service running on 3000 port....");