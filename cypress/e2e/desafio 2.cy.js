/// <reference types="cypress" />
describe('Hooks', () => {
  let datosUsuario, datosTarea;

  before("before", () => {
    cy.fixture('datosUsuario').then(data => {
      datosUsuario = data
    })
    cy.fixture('datosTarea').then(data => {
     datosTarea = data
    })
 });

 beforeEach("beforeEach", () => {
     cy.visit("")
     cy.get("#registertoggle").dblclick()
     cy.get('#user').type(datosUsuario.datosValidos.usuario)
     cy.get('#pass').type(datosUsuario.datosValidos.contraseña)
     cy.get('#submitForm').click()
 })

  it("Deberia escribir las 5 tareas satisfactoriamente", () => {
    cy.get("#todolistlink").click()
    cy.get('#task').type(datosTarea.tarea1)
    cy.get('#sendTask').click()
    cy.get('#task').type(datosTarea.tarea2)
    cy.get('#sendTask').click()
    cy.get('#task').type(datosTarea.tarea3)
    cy.get('#sendTask').click()
    cy.get('#task').type(datosTarea.tarea4)
    cy.get('#sendTask').click()
    cy.get('#task').type(datosTarea.tarea5)
    cy.get('#sendTask').click()
})
it("Verificar que existan los botones “All”, “Completed”, “Active” y “Remove all”", () => {
  cy.get("#todolistlink").click();
  cy.get("#all").should("exist");
  cy.get("#completed").should("exist");
  cy.get("#active").should("exist");
  cy.get("#removeAll").should("exist");
})
it("Agregar 2 tareas, completarlas y eliminar la segunda tarea completada", () => {
  cy.get("#todolistlink").click()
  cy.get('#task').type(datosTarea.tarea1)
  cy.get('#sendTask').click()
  cy.get('#task').type(datosTarea.tarea2)
  cy.get('#sendTask').click()
  // cy.get('p').contains(datosTarea.tarea1).click();
  cy.xpath(`//p[text()='${datosTarea.tarea1}']`).click();
  cy.xpath(`//p[text()='${datosTarea.tarea2}']`).click();
  cy.xpath(`//p[text()='${datosTarea.tarea1}']`).siblings("button").click();
})
it("Agregar 2 tareas y eliminar la primera tarea", () => {
  cy.get("#todolistlink").click()
  cy.get('#task').type(datosTarea.tarea1)
  cy.get('#sendTask').click()
  cy.get('#task').type(datosTarea.tarea2)
  cy.get('#sendTask').click()
  cy.get('p').contains(datosTarea.tarea1).siblings("button").click();
})

})