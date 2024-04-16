describe('Test suite login', ()=>{

    it('should login succefully',  ()=>{
      //cy.viewport(375, 812)
        cy.viewport('iphone-x')
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').clear().type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('contain', 'inventory.html')
        cy.url().should('include', 'inventory.html')
    
    })
    it('should login 2 succefully',  { viewportWidth: 375, viewportHeight: 930} , ()=>{

          cy.visit('https://www.saucedemo.com/')
          cy.get('[data-test="username"]').clear().type('standard_user')
          cy.get('[data-test="password"]').type('secret_sauce')
          cy.get('[data-test="login-button"]').click()
          cy.url().should('contain', 'inventory.html')
          cy.url().should('include', 'inventory.html')
      })
  
    })
    
    