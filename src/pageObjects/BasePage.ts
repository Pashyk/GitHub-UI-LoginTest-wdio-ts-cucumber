export class BasePage {
	private baseURL: string = `https://github.com/login`;
	get loginField(): WebdriverIO.Element {
		return $('#login_field');
	}
	get passwordField(): WebdriverIO.Element {
		return $('#password');
	}
	get singInBtn(): WebdriverIO.Element {
		return $('input[type="submit"]');
	}
	public open(): void {
		browser.url(this.baseURL);
	}
	public login(email: string, password: string): void {
		this.loginField.addValue(email);
		this.passwordField.addValue(password);
		this.singInBtn.click();
	}
}
module.exports = BasePage;
