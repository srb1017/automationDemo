describe("Initializing Tic Tac Toe Game", () => {
  it("User visits Tic Tac Toe Game and Initializes", () => {
    cy.visit("https://jsfiddle.net/v143afmn/#")
    cy.frameLoaded()
    cy.iframe().find('[id="number"]').should("exist").type(3)
    cy.iframe().find('[id="start"]').should("exist").click()
    cy.iframe().find('[id="table"]').should("be.visible")
  })
})
