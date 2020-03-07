describe("Entrar al root de la app", () => {
  it("Visita la pagina Home, y chequea que las tablas se hayan cargado", () => {
    cy.visit("/");
    cy.get(".v-data-table.theme--light");
  });
});