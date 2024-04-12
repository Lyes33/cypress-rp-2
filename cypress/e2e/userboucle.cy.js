const users = require('../fixtures/userboucle.json')
describe('Tests suite login', ()=>{

 users.forEach(user=>{
    it('Should login with ' + user.username, ()=>{
        cy.visit('https://www.saucedemo.com')
        cy.connexion(user.username, user.password)
    })
 })
    
})