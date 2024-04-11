
export function checkUrl(){
    cy.url().should('contain', 'inventory.html')

}

