describe("Getting to Tic Tac Toe Game Page", () => {
  it("User visits Tic Tac Toe Game Page", () => {
    cy.visit("https://jsfiddle.net/sbajus/be054c26/")
    cy.frameLoaded()
    cy.iframe().find('[id="number"]').should("be.visible")
    cy.iframe().find('[id="start"]').should("be.visible")
  })
})
