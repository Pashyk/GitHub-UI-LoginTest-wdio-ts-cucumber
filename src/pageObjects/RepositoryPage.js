"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RepositoryPage = /** @class */ (function () {
    function RepositoryPage() {
    }
    Object.defineProperty(RepositoryPage.prototype, "createRepositoryButton", {
        get: function () {
            return $('#new_repository button[type="submit"]');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RepositoryPage.prototype, "readmeInitCheckbox", {
        get: function () {
            return $('#repository_auto_init');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RepositoryPage.prototype, "readmeFile", {
        get: function () {
            return $('tbody [title="README.md"]');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RepositoryPage.prototype, "repositoryNameField", {
        get: function () {
            return $('#repository_name');
        },
        enumerable: true,
        configurable: true
    });
    RepositoryPage.prototype.create = function (repositoryName) {
        var _this = this;
        browser.url('https://github.com/new');
        this.repositoryNameField.addValue(repositoryName);
        this.readmeInitCheckbox.click();
        browser.waitUntil(function () { return _this.createRepositoryButton.isClickable(); });
        this.createRepositoryButton.click();
    };
    RepositoryPage.prototype.readmeFilePresence = function () {
        var status = this.readmeFile.isExisting();
        if (!status)
            throw new Error('File "README.MD" was not created');
        return status;
    };
    return RepositoryPage;
}());
exports.RepositoryPage = RepositoryPage;
module.exports = RepositoryPage;
