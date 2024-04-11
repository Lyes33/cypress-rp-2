
describe('Test suite login', ()=>{

    it('Should login successfully', ()=>{
 
      cy.visit('https://www.saucedemo.com')
      cy.connexion('standard_user', 'secret_sauce')

      cy.url().should('include', 'inventory.html')
      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

      cy.get('.app_logo').should('have.text', 'Swag Labs')
 
 
    })
 
 
 
 
 })