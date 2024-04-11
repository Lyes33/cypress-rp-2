import { checkUrl } from "../action/checkUrl"

describe('Test suite login', ()=>{
beforeEach(()=>{
    cy.visit('https://www.saucedemo.com')
})
 it('should login with standard profil', ()=>{
    cy.connexion('standard_user', 'secret_sauce')
    checkUrl()
 })

 it('should login with problem profil', ()=>{
    cy.connexion('problem_user', 'secret_sauce') 
    checkUrl()
 })
 it('should login with erro profil', ()=>{
    cy.connexion('error_user', 'secret_sauce')
    checkUrl()
 })

})