import { checkUrl } from "../../action/checkUrl"
describe('Tests suite add to cart by product page', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com')
    })
    it('Should add to cart form product page', ()=>{
       cy.connexion('standard_user', 'secret_sauce')
       checkUrl()
       cy.addToCart('Sauce Labs Bike Light')

    })
    it('Should add to cart form product page', ()=>{
        cy.connexion('standard_user', 'secret_sauce')
        checkUrl()
        cy.addToCart('Sauce Labs Bolt T-Shirt')
 
     })
})

//pour la deuxieme facon ajout du produit depuit la home page
describe('Tests suite add to cart by home page', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com')
    })
    it('Should add to cart form home page', ()=>{
       cy.connexion('standard_user', 'secret_sauce')
       checkUrl()
       cy.addToBasket('labs-backpack')
     
     

    })
    it('Should add to cart form home page', ()=>{
        cy.connexion('standard_user', 'secret_sauce')
        checkUrl()
        cy.addToBasket('labs-backpack')
     })
})