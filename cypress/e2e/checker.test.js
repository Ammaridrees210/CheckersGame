import {checker} from "../support/pages/checkerGame5Moves/CheckerGamePO";
import { game } from "../support/pages/CompletecheckerGame/checkerGamePO";
const landingPage = new checker()
const checkerGame = new game()
describe("CheckMate Game", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    
    it("should visit the CheckerGame Page and Play 5 Move", () => {
        // Assertion
        landingPage.checker5StepsGame();
    });

    it.only("Checker Game should be completed and Win", () => {
        checkerGame.checkGamePlayMoves();
    });
});