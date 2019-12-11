import Element = WebdriverIO.Element;

export class BasePage {
	private baseURL: string = `https://github.com/login`;
	get loginField(): Element {
		return $('#login_field');
	}
	get passwordField(): Element {
		return $('#password');
	}
	get singInBtn(): Element {
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
