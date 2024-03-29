export class game{
    checkerGamePageVerify(){
        cy.get('.page').should('contain','Checkers')
    }
    clickOnRestartButton(){
        return cy.get('a').contains('Restart...')
    }
    pieceToMoveSelector(position){
        return cy.get(`[name="space${position}"]`)
    }
    positionToMovePieceSelector(position){
        return cy.get(`[name="space${position}"]`)
    }
    VerifyWonMassage(){
        return cy.get('#message').should('contain','You have won!')
    }
    checkGamePlayMoves(){
        this.checkerGamePageVerify()
        this.clickOnRestartButton().click()
        this.pieceToMoveSelector('02').click()
        this.positionToMovePieceSelector('13').click().wait(2000)
        this.pieceToMoveSelector('11').click()
        this.positionToMovePieceSelector('02').click().wait(2000)
        this.pieceToMoveSelector('00').click()
        this.positionToMovePieceSelector('11').click().wait(2000)
        this.pieceToMoveSelector('42').click()
        this.positionToMovePieceSelector('24').click().wait(2000)
        this.pieceToMoveSelector('31').click()
        this.positionToMovePieceSelector('42').click().wait(2000)
        this.pieceToMoveSelector('42').click()
        this.positionToMovePieceSelector('53').click().wait(2000)
        this.pieceToMoveSelector('22').click()
        this.positionToMovePieceSelector('44').click().wait(2000)
        this.pieceToMoveSelector('24').click()
        this.positionToMovePieceSelector('35').click().wait(2000)
        this.pieceToMoveSelector('13').click()
        this.positionToMovePieceSelector('35').click().wait(2000)
        this.pieceToMoveSelector('11').click()
        this.positionToMovePieceSelector('22').click().wait(2000)
        this.pieceToMoveSelector('20').click()
        this.positionToMovePieceSelector('11').click().wait(2000)
        this.pieceToMoveSelector('40').click()
        this.positionToMovePieceSelector('31').click().wait(2000)
        this.pieceToMoveSelector('22').click()
        this.positionToMovePieceSelector('13').click().wait(2000)
        this.pieceToMoveSelector('13').click()
        this.positionToMovePieceSelector('04').click().wait(2000)
        this.pieceToMoveSelector('35').click()
        this.positionToMovePieceSelector('26').click().wait(2000)
        this.pieceToMoveSelector('26').click()
        this.positionToMovePieceSelector('17').click().wait(2000)
        this.pieceToMoveSelector('04').click()
        this.positionToMovePieceSelector('26').click().wait(2000)
        this.pieceToMoveSelector('31').click()
        this.positionToMovePieceSelector('42').click().wait(2000)
        this.pieceToMoveSelector('36').click()
        this.positionToMovePieceSelector('37').click().wait(2000)
        this.pieceToMoveSelector('37').click()
        this.positionToMovePieceSelector('46').click().wait(2000)
        this.pieceToMoveSelector('26').click()
        this.positionToMovePieceSelector('37').click().wait(2000)
        this.pieceToMoveSelector('37').click()
        this.positionToMovePieceSelector('46').click().wait(2000)
        this.pieceToMoveSelector('02').click()
        this.positionToMovePieceSelector('24').click().wait(2000)
        this.pieceToMoveSelector('02').click()
        this.positionToMovePieceSelector('24').click().wait(2000)
        this.pieceToMoveSelector('11').click()
        this.positionToMovePieceSelector('33').click().wait(2000)
        this.VerifyWonMassage()
    }
}