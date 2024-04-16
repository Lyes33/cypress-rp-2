/// <reference types='cypress'/>
import {data} from '../fixtures/datas.json'
describe.only('Tests suite fixtures', ()=>{
beforeEach(()=>{
    cy.visit('https://www.saucedemo.com')
})
  it('should add one product',()=>{
   cy.connexion(data.users[0].username, data.users[0].password)
   cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
   cy.screenshot()

  })

  it('should add multi product',()=>{
   cy.connexion(data.users[1].username, data.users[1].password)
   cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
   cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    
  })

})