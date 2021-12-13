const dns = require('dns')

dns.resolve4('www.miu.edu', function(err, result) {
    if (err) throw err;
    console.log(result)
})