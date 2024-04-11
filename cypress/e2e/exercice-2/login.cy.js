
describe('Test suite login', ()=>{
beforeEach(()=>{
  cy.visit('https://www.saucedemo.com')
})
   it('Should login successfully', ()=>{
     cy.get('[data-test="username"]').type('standard_user').should('have.value', 'standard_user')
     cy.get('[data-test="password"]').type('secret_sauce')
  
     //vérifier que le bouton n'est désactivé
     cy.get('[data-test="login-button"]').should('not.be.disabled')
     // vérifier que le bouton est activé 
     cy.get('[data-test="login-button"]').should('be.enabled')

     //enchainer les assertion
     cy.get('[data-test="login-button"]').should('not.be.disabled').and('be.enabled').click()

     //vérifeir qu'on est conencté
     cy.url().should('contain', 'inventory.html')

     //vérifier que y a 6 item
     cy.get('[data-test="inventory-item"]').should('have.length', 6)

   })

   it('Should login failed', ()=>{
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('not.contain', 'inventory.html')
    cy.get('.error-message-container').should('be.visible')

   })



})