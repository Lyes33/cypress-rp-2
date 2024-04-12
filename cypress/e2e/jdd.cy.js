/// <reference types='cypress'/>
import data from '../fixtures/user.json'
describe('Tests suite fixtures', ()=>{
beforeEach(()=>{
    cy.visit('https://www.saucedemo.com')
})
  it('should add one product',()=>{
   cy.connexion(data.username, data.password)
   cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

  })

  it('should add multi product',()=>{
   cy.connexion(data.username, data.password)
   cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
   cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    
  })

  it('should add multis product',()=>{
    cy.connexion(data.username, data.password)
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
     
   })

})