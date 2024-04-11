describe('Test suite login', ()=>{

it('should login succefully', ()=>{

    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').clear().type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    //with should
    cy.url().should('contain', 'inventory.html')
    cy.url().should('include', 'inventory.html')
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

    cy.get('.app_logo').should('be.visible').and('have.text', 'Swag Labs')

    cy.get('[data-test="inventory-item"]').should('have.length', 6)

    cy.get('[data-test="inventory-item-price"]').should('exist')
    //with expect

    cy.url().then(urls =>{
        expect(urls).include('inventory.html')
    })

    cy.url().then(url=>{
        expect(url).contain('inventory.html')
    })

    cy.url().then(url=>{
        expect(url).to.eq('https://www.saucedemo.com/inventory.html')
    })

    cy.get('[data-test="inventory-item"]').then(items=>{
        expect(items).to.have.length(6)
        expect(items).lengthOf(6)
    })


})
/*it('Should login failed', ()=>{
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

})*/

})


