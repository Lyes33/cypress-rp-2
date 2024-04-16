describe('Test suite login', ()=>{

    it('should login succefully',{browser: '!chrome'},   ()=>{

        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').clear().type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('contain', 'inventory.html')
    
    })

    it('should login 2 succefully', ()=>{

        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="usernamee"]', {timeout: 10000} ).clear().type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('contain', 'inventory.html')
       
    
    })


  
    })
    
    