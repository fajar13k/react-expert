/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when user inputs wrong email format
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should navigate to homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should display login page correctly', () => {
    // Verify each elements should be visible in Login page
    cy.get('input[id="login-input__email"]').should('be.visible');
    cy.get('input[id="login-input__password"]').should('be.visible');
    cy.get('button[id="login-input__btn__login"').should('be.visible');
  });

  it('should display alert when email is empty', () => {
    // Click login button without filling the email field
    cy.get('button[id="login-input__btn__login"').click();

    // Verify window.alert to show error message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"id" is not allowed to be empty');
    });
  });

  it('should display alert when user inputs wrong email format', () => {
    // Filling email field
    cy.get('input[id="login-input__email"]').type('fajar13m');

    // Click login button without filling the email field
    cy.get('button[id="login-input__btn__login"').click();

    // Verify window.alert to show error message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" must be a valid email');
    });
  });

  it('should display alert when password is empty', () => {
    // Filling email field
    cy.get('input[id="login-input__email"]').type('testuser');

    // Click login button without filling the email field
    cy.get('button[id="login-input__btn__login"').click();

    // Verify window.alert to show error message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    // Filling email field
    cy.get('input[id="login-input__email"]').type('fajar13m@gmail.com');

    // Filling password field with wrong auth
    cy.get('input[id="login-input__password"]').type('testuser');

    // Click login button without filling the email field
    cy.get('button[id="login-input__btn__login"').click();

    // Verify window.alert to show error message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should navigate to homepage when email and password are correct', () => {
    // Filling email field
    cy.get('input[id="login-input__email"]').type('fajar13m@gmail.com');

    // Filling password field with wrong auth
    cy.get('input[id="login-input__password"]').type('123456');

    // Click login button without filling the email field
    cy.get('button[id="login-input__btn__login"').click();

    // Verify navigation is shown, marks that homepage is loading
    cy.get('div[id="app-header__navigation__logo"]').contains(/^Rumpi.$/).should('be.visible');
  });
});