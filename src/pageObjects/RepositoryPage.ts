export class RepositoryPage {
	get createRepositoryButton(): WebdriverIO.Element {
		return $('#new_repository button[type="submit"]');
	}
	get readmeInitCheckbox(): WebdriverIO.Element {
		return $('#repository_auto_init');
	}
	get readmeFile(): WebdriverIO.Element {
		return $('tbody [title="README.md"]');
	}
	get repositoryNameField(): WebdriverIO.Element {
		return $('#repository_name');
	}
	public create(repositoryName: string): void {
		browser.url('https://github.com/new');
		this.repositoryNameField.addValue(repositoryName);
		this.readmeInitCheckbox.click();
		browser.waitUntil(() => this.createRepositoryButton.isClickable());
		this.createRepositoryButton.click();
	}
	public readmeFilePresence(): Boolean {
		const status: boolean = this.readmeFile.isExisting();
		if (!status) throw new Error('File "README.MD" was not created');
		return status;
	}
}
module.exports = RepositoryPage;
