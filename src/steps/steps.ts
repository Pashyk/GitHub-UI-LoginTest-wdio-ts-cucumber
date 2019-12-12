import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';

const basePage = new (require('../pageObjects/BasePage'))();
const productionPage = new (require('../pageObjects/ProductionPage'))();
const repository = new (require('../pageObjects/RepositoryPage'))();

Given('I open web-page', async (): Promise<void> => basePage.open());
When(
	'I enter e-mail {string} and password {string}',
	async (email: string, pass: string): Promise<void> => basePage.login(email, pass),
);
Then(
	'I see username {string} on the page',
	async (username: string): Promise<void> => {
		const profileName: string = await productionPage.successLoginCheck(username);
		expect(profileName).to.equal(username);
	},
);

When('I create new repository {string}', async (repoName: string): Promise<void> => repository.create(repoName));
Then(
	'I check readme.md file was created',
	async (): Promise<void> => {
		const readmePresence: boolean = repository.readmeFilePresence();
		expect(readmePresence).to.be.true;
	},
);

When('I delete repository {string}', async (repo: string): Promise<void> => productionPage.deleteRepository(repo));
Then(
	'I check repository {string} was deleted',
	async (repo: string): Promise<void> => {
		const repoPresence = await productionPage.checkRepositoryDeletion(repo);
		expect(repoPresence).to.be.false;
	},
);
