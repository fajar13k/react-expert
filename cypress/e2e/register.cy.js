/**
 * - Register spec
 *   - should display register page correctly
 *   - should display alert when name is empty
 *   - should display alert when email is empty
 *   - should display alert when user inputs wrong email format
 *   - should display alert when password is empty
 *   - should display alert when password length is lower than 6 characters
 *   - should navigate to register page when registration deemed success
 */

describe('Register spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register');
  });

  it('should display register page correctly', () => {
    // Verify each elements should be visible in register page
    cy.get('input[id="register-input__name"]').should('be.visible');
    cy.get('input[id="register-input__email"]').should('be.visible');
    cy.get('input[id="register-input__password"]').should('be.visible');
    cy.get('button[id="register-input__btn__register"').should('be.visible');
  });

  it('should display alert when name is empty', () => {
    // Click register button without filling any field
    cy.get('button[id="register-input__btn__register"').click();

    // Verify window.alert to show error message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"name" is not allowed to be empty');
    });
  });

  it('should display alert when email is empty', () => {
    // Filling name field
    cy.get('input[id="register-input__name"]').type('fajar');

    // Click register button without filling any field
    cy.get('button[id="register-input__btn__register"').click();

    // Verify window.alert to show error message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when user inputs wrong email format', () => {
    // Filling name field
    cy.get('input[id="register-input__name"]').type('fajaru');

    // Filling email field
    cy.get('input[id="register-input__email"]').type('fajaru13k');

    // Click register button without filling the email field
    cy.get('button[id="register-input__btn__register"').click();

    // Verify window.alert to show error message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" must be a valid email');
    });
  });

  it('should display alert when password is empty', () => {
    // Filling name field
    cy.get('input[id="register-input__name"]').type('fajar13k');

    // Filling email field
    cy.get('input[id="register-input__email"]').type('fajar@gmail.com');

    // Click register button without filling any field
    cy.get('button[id="register-input__btn__register"').click();

    // Verify window.alert to show error message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when password length is lower than 6 characters', () => {
    // Filling name field
    cy.get('input[id="register-input__name"]').type('fajar13k');

    // Filling email field
    cy.get('input[id="register-input__email"]').type('fajar@gmail.com');

    // Filling email field
    cy.get('input[id="register-input__password"]').type('12');

    // Click register button without filling any field
    cy.get('button[id="register-input__btn__register"').click();

    // Verify window.alert to show error message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('password must be at least 6 characters long');
    });
  });

  it('should navigate to register page when registration deemed success', () => {
    const generateEmail = `${Cypress._.random(0, 1e6)}@example.com`;

    // Filling name field
    cy.get('input[id="register-input__name"]').type('fajar13k');

    // Filling email field
    cy.get('input[id="register-input__email"]').type(generateEmail);

    // Filling email field
    cy.get('input[id="register-input__password"]').type('bandung12345');

    // Click register button without filling any field
    cy.get('button[id="register-input__btn__register"').click();

    // Verify navigation is shown, marks that homepage is loading
    cy.get('button[id="login-input__btn__login"').should('be.visible');
  });
});