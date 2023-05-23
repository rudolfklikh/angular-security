

var crypto = require('crypto');
var password = "monkey";


crypto.randomBytes(256, (err, salt) => {
    crypto.pbkdf2(password, salt, 100000, 512, 'sha256', (err, hash) => {
            console.log("The result of hashing " + password + " is:\n\n" +
                hash.toString('hex') + "\n\n");
        });
});