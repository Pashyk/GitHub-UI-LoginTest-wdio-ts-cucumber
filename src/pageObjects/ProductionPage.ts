class ProductionPage {
	get deleteConfirmationBtn() {
		return $('li:nth-child(4) button[type="submit"]');
	}
	get deleteConfirmationField() {
		return $('[aria-label*="delete this repository"]');
	}
	get deleteRepositoryBtn() {
		return $('.Box-row:nth-child(4) [role="button"]');
	}
	get userProfileName() {
		return $('.p-nickname');
	}
	protected static repoLink(repositoryName: string) {
		return $(`[data-filterable-for="dashboard-repos-filter-left"] [title="${repositoryName}"]`);
	}
	protected static repoSettings(repositoryName: string) {
		return $(`[href*="${repositoryName}/settings"]`);
	}
	public checkRepositoryDeletion(repositoryName: string): boolean {
		return ProductionPage.repoLink(repositoryName).isExisting();
	}
	public deleteRepository(repositoryName: string): void {
		ProductionPage.repoLink(repositoryName).click();
		ProductionPage.repoSettings(repositoryName).click();
		this.deleteRepositoryBtn.click();
		this.deleteConfirmationField.addValue(`testJSautomationTS/${repositoryName}`);
		browser.waitUntil(() => this.deleteConfirmationBtn.isClickable());
		this.deleteConfirmationBtn.click();
	}
	public successLoginCheck(username: string): string {
		browser.url(`https://github.com/${username}`);
		return this.userProfileName.getText();
	}
}
module.exports = ProductionPage;
