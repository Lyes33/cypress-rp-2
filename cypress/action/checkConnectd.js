export function checkconnected(){
    cy.url().should('include', 'success')
}