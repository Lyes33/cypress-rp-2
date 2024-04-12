/// <reference types='cypress'/>

describe('Tests suite fixtures', ()=>{
beforeEach(()=>{
    cy.visit('https://www.saucedemo.com')

    cy.fixture('users').then(function(user){
      this.user = user
    })
})
  it('should add one product',function(){
   cy.connexion(this.user[0].username, this.user[0].password)
   cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

  })

  it('should add multi product',function(){
   cy.connexion(this.user[1].username, this.user[1].password)
   cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
   cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    
  })

})