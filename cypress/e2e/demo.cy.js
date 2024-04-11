
describe('Test suite login', ()=>{

    it('Should login successfully', ()=>{
 
      cy.visit('https://www.saucedemo.com')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()

      cy.url().should('include', 'inventory.html')
      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

      cy.get('.app_logo').should('have.text', 'Swag Labs')
 
 
    })
 
 
 
 
 })