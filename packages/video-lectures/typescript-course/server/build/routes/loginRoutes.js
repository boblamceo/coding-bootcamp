"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"Post\">\n      <div>\n        <label>email</label>\n        <input name=\"email\"></input>\n        <div>\n          <label>Password</label>\n          <input name=\"password\" type=\"password\"></input>\n        </div>\n        <button>Submit</button>\n      </div>\n    </form>");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
    }
    else {
        res.send('GET OUT OF HERE! WRONG EMAIL & PASSWORD');
    }
});
