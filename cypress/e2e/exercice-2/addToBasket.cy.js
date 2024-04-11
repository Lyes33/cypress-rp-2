describe('Tests suite add to cart', ()=>{
beforeEach(()=>{
    cy.visit('https://www.saucedemo.com')
})
it('Should add to cart from home page', ()=>{
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
  cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')

})

it('Should add to cart from product page', ()=>{
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="item-4-img-link"]').click()
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
  
  })

})