const fs = require('fs');
fs.readFile('./app/data/user.json', (err, data) => {
    if(err) {
        console.error(err)
        return;
    }
    const userList = data.toString();
    console.log(userList);
})