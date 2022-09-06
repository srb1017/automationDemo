describe("Play the Tic Tac Toe Game", () => {
  it("User plays the Tic Tac Toe Game", () => {
    cy.visit("https://jsfiddle.net/v143afmn/#")
    let shouldStop = false
    cy.frameLoaded()
    cy.iframe().find('[id="number"]').should("exist").type(3)
    cy.iframe().find('[id="start"]').should("exist").click()
    cy.iframe().find('[id="table"]').should("be.visible")
    cy.iframe()
      .find("table td")
      .should("have.length.gt", 0)
      .then(($el) => {
        let squares = $el.toArray()
        let shuffledSquare = Cypress._.shuffle(squares)
        cy.wrap(shuffledSquare).each((shuffledSquare) => {
          cy.then(() => {
            if (shouldStop) {
              return
            }
            const id = shuffledSquare.attr("id")
            cy.iframe()
              .find('[id="table"]')
              .should("be.visible")
              .find("td")
              .eq(id)
              .click()
            cy.iframe()
              .find('[id="endgame"]')
              .then(($text) => {
                if ($text.is(":visible")) {
                  const winner = $text.text()
                  console.log(winner)
                  cy.iframe()
                    .find('[id="endgame"]')
                    .contains(`${winner}`)
                    .should("be.visible")
                  cy.log(`${winner}`)
                  shouldStop = true
                  console.log(shouldStop)
                } else {
                  cy.iframe().find('[id="endgame"]').should("not.be.visible")
                  cy.log("Game is a Draw")
                }
              })
          })
        })
      })
  })
})
