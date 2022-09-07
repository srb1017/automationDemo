describe("Initialize Tic Tac Toe Game", () => {
  it("User visits Tic Tac Toe Game and Initializes", () => {
    cy.visit("https://jsfiddle.net/sbajus/be054c26/")
    let gameSize = 3
    cy.frameLoaded()
    cy.iframe().find('[id="number"]').should("be.visible").type(gameSize)
    cy.iframe().find('[id="start"]').should("be.visible").click()
    cy.iframe().find('[id="table"]').should("be.visible")
    cy.iframe()
      .find("table td")
      .should("have.lengthOf", gameSize * gameSize)
  })
})
