"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("NOT LOGGED IN!!! GET OUT OF HERE!!!");
}
var router = express_1.Router();
exports.router = router;
router.get("/protected", requireAuth, function (req, res) {
    res.send("Welcome to protected route, logined user 😁😁😁😁😁😁😁");
});
