var ProductionPage = /** @class */ (function () {
    function ProductionPage() {
    }
    Object.defineProperty(ProductionPage.prototype, "deleteConfirmationBtn", {
        get: function () {
            return $('li:nth-child(4) button[type="submit"]');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductionPage.prototype, "deleteConfirmationField", {
        get: function () {
            return $('[aria-label*="delete this repository"]');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductionPage.prototype, "deleteRepositoryBtn", {
        get: function () {
            return $('.Box-row:nth-child(4) [role="button"]');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductionPage.prototype, "userProfileName", {
        get: function () {
            return $('.p-nickname');
        },
        enumerable: true,
        configurable: true
    });
    ProductionPage.repoLink = function (repositoryName) {
        return $("[data-filterable-for=\"dashboard-repos-filter-left\"] [title=\"" + repositoryName + "\"]");
    };
    ProductionPage.repoSettings = function (repositoryName) {
        return $("[href*=\"" + repositoryName + "/settings\"]");
    };
    ProductionPage.prototype.checkRepositoryDeletion = function (repositoryName) {
        return ProductionPage.repoLink(repositoryName).isExisting();
    };
    ProductionPage.prototype.deleteRepository = function (repositoryName) {
        var _this = this;
        ProductionPage.repoLink(repositoryName).click();
        ProductionPage.repoSettings(repositoryName).click();
        this.deleteRepositoryBtn.click();
        this.deleteConfirmationField.addValue("testJSautomationTS/" + repositoryName);
        browser.waitUntil(function () { return _this.deleteConfirmationBtn.isClickable(); });
        this.deleteConfirmationBtn.click();
    };
    ProductionPage.prototype.successLoginCheck = function (username) {
        browser.url("https://github.com/" + username);
        return this.userProfileName.getText();
    };
    return ProductionPage;
}());
module.exports = ProductionPage;
