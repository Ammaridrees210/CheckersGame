export class checkerGamePlay{
    checkerGamePageVerify(){
        cy.get('.page').should('contain','Checkers')
    }
    clickOnRestartButton(){
        return cy.get('a').contains('Restart...')
    }
    pieceToMove(position){
        return cy.get(`[name="space${position}"]`)
    }
    positionToMovePiece(position){
        return cy.get(`[name="space${position}"]`)
    }
    VerifyWonMassage(){
        return cy.get('#message').should('contain','You have won!')
    }

    checkGamePlayMoves() {
        cy.fixture('moves').then((data) => {
            // Verify the checker game page and restart the game
            this.checkerGamePageVerify();
            this.clickOnRestartButton().click();
            // Iterate through the moves and perform the actions
            data.moves.forEach(({ piece, position }) => {
                this.pieceToMove(piece).click();
                this.positionToMovePiece(position).click().wait(2000);
            });

            // Verify the winning message
            this.VerifyWonMassage();
        });
    }
}