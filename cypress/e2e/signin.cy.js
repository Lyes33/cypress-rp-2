/// <reference types='cypress'/>
import { checkconnected } from '../action/checkConnectd';
import { fa, faker } from '@faker-js/faker';

let password =  faker.internet.password()
describe('Test suit signin', ()=>{

    it('Should create account successfully', ()=>{

       cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
       cy.get('#input-firstname').type(faker.person.firstName())
       cy.get('#input-lastname').type(faker.person.lastName())
       cy.get('#input-email').type(faker.internet.email())
       cy.get('#input-telephone').type(faker.phone.number("09########"))
       cy.get('#input-password').type(password)
       cy.get('#input-confirm').type(password)
       cy.get('[name="newsletter"]').eq(0).check()
       cy.get('[name="agree"]').check()
       cy.get('[class="btn btn-primary"]').should('be.visible').click({force:true})
       checkconnected()
      


    })
})