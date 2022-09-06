describe("Getting to Tic Tac Toe Game Page", () => {
  it("User visits Tic Tac Toe Game Page", () => {
    cy.visit("https://jsfiddle.net/v143afmn/#")
    cy.frameLoaded()
    cy.iframe().find('[id="number"]').should("exist")
    cy.iframe().find('[id="start"]').should("exist")
  })
})
