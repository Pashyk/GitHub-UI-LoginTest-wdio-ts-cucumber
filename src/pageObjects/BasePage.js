"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasePage = /** @class */ (function () {
    function BasePage() {
        this.baseURL = "https://github.com/login";
    }
    Object.defineProperty(BasePage.prototype, "loginField", {
        get: function () {
            return $('#login_field');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePage.prototype, "passwordField", {
        get: function () {
            return $('#password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePage.prototype, "singInBtn", {
        get: function () {
            return $('input[type="submit"]');
        },
        enumerable: true,
        configurable: true
    });
    BasePage.prototype.open = function () {
        browser.url(this.baseURL);
    };
    BasePage.prototype.login = function (email, password) {
        this.loginField.addValue(email);
        this.passwordField.addValue(password);
        this.singInBtn.click();
    };
    return BasePage;
}());
exports.BasePage = BasePage;
module.exports = BasePage;
