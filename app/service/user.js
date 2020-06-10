const Service = require('egg').Service;
const fs = require('fs');

class UserService extends Service {
     list() {
        const data = fs.readFileSync('./app/data/user.json');

        let res = data.toString();
        const userList = JSON.parse(res);

        return userList;
    }
}

module.exports = UserService;