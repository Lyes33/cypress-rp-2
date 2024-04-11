describe('Test suite login sauce demo', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com')
    })

    before(()=>{
        cy.log('Exécuté une fois avant tous les tests')
    })

    afterEach(()=>{
        cy.get('[data-test="login-button"]').click()
    })
    after(()=>{
        cy.log('Exécuté apres tous les tests')
    })
    it('Should login successfully', ()=>{
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        
    })

    it('Should login failed', ()=>{
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
       

    })

    it('Should login failed with incorrect password', ()=>{
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('machin')
       

    })

})