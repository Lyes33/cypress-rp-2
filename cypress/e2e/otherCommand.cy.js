describe('Test suite suite invoke', ()=>{
    it('should login succefully',   ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').clear().type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('contain', 'inventory.html')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="shopping-cart-link"]').invoke('text').then(nbProduct=>{
           let nb = parseInt(nbProduct)
          if (nb > 0){
            cy.get('[data-test="shopping-cart-badge"]').click()
            cy.wrap(nb).should('be.above', 0)
          while(nb > 0){
           cy.contains('Remove').first().click()
          nb --
          }
          }else{
            cy.log('y a zero produit dans le panier')
          }
        })
    })
  
    })

    describe('Test suite suite wrap', ()=>{
        it('should login succefully',   ()=>{
            cy.visit('https://www.saucedemo.com/')
            cy.get('[data-test="username"]').then(nameUser=>{
                cy.wrap(nameUser).type('standard_user')
            })
            cy.get('[data-test="password"]').type('secret_sauce')
            cy.get('[data-test="login-button"]').click()
            cy.url().should('contain', 'inventory.html')
            
            let message = 'coucou tous'
            //cy.get(message).should('eq', 'coucou tous')
            cy.wrap(message).should('eq', 'coucou tous')
          
        })
 })


 describe('Test suite suite intercepet', ()=>{
    it.only('should login succefully',   ()=>{

        cy.intercept('**/search?**').as('toot')

        cy.visit('https://www.google.com/')
     
        cy.wait('@toto')

        cy.get('#W0wltc > .QS5gu').click()
      
    })
})

    
    