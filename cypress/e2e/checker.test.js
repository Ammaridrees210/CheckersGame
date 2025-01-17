import {checkerInitial5Steps} from "../support/pages/checkerGame5Moves/CheckerGamePO";
import { checkerGamePlay } from "../support/pages/CompletecheckerGame/checkerGamePO";
import { negativeCases } from "../support/pages/checkerGameNeagtiveCases/negativeCasesPO"
const checkerCases = new negativeCases
const intialGameSteps = new checkerInitial5Steps()
const checkerGame = new checkerGamePlay()
describe("CheckMate Game", () => {
    beforeEach(() => {
        // Visit the CheckerGame page
        cy.visit("/");
    });
    
    it("User should visit the CheckerGame and Play 5 Move", () => {
        // POM "CheckerGamePO"
        intialGameSteps.checker5StepsGame();
    });
        //negative testing Senarios 
    it('Should redirect to the correct Checkers game URL',() => {
        checkerCases.ensureCheckerGameUrl();
    })    
    it('User should allow a simple move for a Piece', () => {
         // POM "negativeCasesPO.js"
        checkerCases.ensureForwardMoves();
    });

    it('User should not allow a piece to move Backward', () => {
         // POM "negativeCasesPO.js"
        checkerCases.ensureReverseMoves();
    })

    it('User should not allow a piece to move on Opponent Piece', () => {
         // POM "negativeCasesPO.js"
        checkerCases.ensureMoveOnOpponentPiece();
    })

    it("User should visit, play complete Checker Game, and Win", () => {
        // POM "checkerGamePO.js"
        checkerGame.checkGamePlayMoves();
    });

});