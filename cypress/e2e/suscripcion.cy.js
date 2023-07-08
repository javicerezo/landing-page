/// <reference types="cypress"/>

describe('probando seccion5', () => {
    it('submit al formulario y mostrar alerta de error', () => {
        cy.visit('/index.html');
        cy.get('[data-cy=js-seccion5__form]')
            .submit();
        cy.get('[data-cy=mensaje]')
            .invoke('text')
            .should('equal', 'Error al rellenar los campos');
        cy.get('[data-cy=mensaje]')
            .should('have.class', 'u-mensaje--alerta');
    })
    it('rellenar formulario correctamente y lo envia', () => {
        cy.visit('/index.html');
        cy.get('[data-cy=js-seccion5__nombre]')
            .type('correo');
        cy.get('[data-cy=js-seccion5__correo]')
            .type('correo@correo.es');
        cy.get('[data-cy=js-seccion5__form]')
            .submit();
        cy.get('[data-cy=mensaje]')
            .invoke('text')
            .should('equal', 'Se ha enviado correctamente');
        cy.get('[data-cy=mensaje]')
            .should('have.class', 'u-mensaje--exito');
    })
})