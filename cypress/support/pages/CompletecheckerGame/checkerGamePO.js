export class game{
        checkerGamePageVerify(){
            cy.get('.page').should('contain','Checkers')
        }
        clickOnRestartButton(){
            return cy.get('a').contains('Restart...')
        }
        checkerGameMove1(){
            return cy.get('[name="space02"]')
        }
        changePOsitionOfMove1(){
            return cy.get('[name="space13"]')
        }
        checkerGameMove2(){
            return cy.get('[name="space11"]')
        }
        changePositionOfMove2(){
            return cy.get('[name="space02"]')
        }
        checkerGameMove3(){
            return cy.get('[name="space00"]')
        }
        changePositionOfMove3(){
            return cy.get('[name="space11"]')
        }
        checkerGameMove4(){
            return cy.get('[name="space42"]')
        }
        changePositionOfMove4(){
            return cy.get('[name="space24"]')
        }
        checkerGameMove5(){
            return cy.get('[name="space31"]')
        }
        changePositionOfMove5(){
            return cy.get('[name="space42"]')
        }
        checkerGameMove6(){
            return cy.get('[name="space42"]')
        }
        changePositionOfMove6(){
            return cy.get('[name="space53"]')
        }
        checkerGameMove7(){
            return cy.get('[name="space22"]')
        }
        changePositionOfMove7(){
            return cy.get('[name="space44"]')
        }
        checkerGameMove8(){
            return cy.get('[name="space24"]')
        }
        changePositionOfMove8(){
            return cy.get('[name="space35"]')
        }
        checkerGameMove9(){
            return cy.get('[name="space13"]')
        }
        changePositionOfMove9(){
            return cy.get('[name="space35"]')
        }
        checkerGameMove10(){
            return cy.get('[name="space11"]')
        }
        changePositionOfMove10(){
            return cy.get('[name="space22"]')
        }
        checkerGameMove11(){
            return cy.get('[name="space20"]')
        }
        changePositionOfMove11(){
            return cy.get('[name="space11"]')
        }
        checkerGameMove12(){
            return cy.get('[name="space40"]')
        }
        changePositionOfMove12(){
            return cy.get('[name="space31"]')
        }
        checkerGameMove13(){
            return cy.get('[name="space22"]')
        }
        changePositionOfMove13(){
            return cy.get('[name="space13"]')
        }
        checkerGameMove14(){
            return cy.get('[name="space13"]')
        }
        changePositionOfMove14(){
            return cy.get('[name="space04"]')
        }
        checkerGameMove15(){
            return cy.get('[name="space35"]')
        }
        changePositionOfMove15(){
            return cy.get('[name="space26"]')
        }
        checkerGameMove16(){
            return cy.get('[name="space26"]')
        }
        changePositionOfMove16(){
            return cy.get('[name="space17"]')
        }
        checkerGameMove17(){
            return cy.get('[name="space04"]')
        }
        changePositionOfMove17(){
            return cy.get('[name="space26"]')
        }
        checkerGameMove18(){
            return cy.get('[name="space31"]')
        }
        changePositionOfMove18(){
            return cy.get('[name="space42"]')
        }
        checkerGameMove19(){
            return cy.get('[name="space36"] ')
        }
        changePositionOfMove19(){
            return cy.get('[name="space37"]')
        }
        checkerGameMove20(){
            return cy.get('[name="space37"]')
        }
        changePositionOfMove20(){
            return cy.get('[name="space46"]')
        }
        checkerGameMove21(){
            return cy.get('[name="space26"]')
        }
        changePositionOfMove21(){
            return cy.get('[name="space37"]')
        }
        checkerGameMove22(){
            return cy.get('[name="space37"]')
        }
        changePositionOfMove22(){
            return cy.get('[name="space46"]')
        }
        checkerGameMove23(){
            return cy.get('[name="space02"]')
        }
        changePositionOfMove23(){
            return cy.get('[name="space24"]')
        }
        checkerGameMove24(){
            return cy.get('[name="space02"]')
        }
        changePositionOfMove24(){
            return cy.get('[name="space24"]')
        }
        checkerGameMove25(){
            return cy.get('[name="space11"]')
        }
        changePositionOfMove25(){
            return cy.get('[name="space33"]')
        }
        
        VerifyWonMassage(){
            return cy.get('#message').should('contain','You have won!')
        }

        checkGamePlayMoves(){
            this.checkerGamePageVerify()
            this.clickOnRestartButton().click()
            this.checkerGameMove1().click()
            this.changePOsitionOfMove1().click().wait(2000)
            this.checkerGameMove2().click()
            this.changePositionOfMove2().click().wait(2000)
            this.checkerGameMove3().click()
            this.changePositionOfMove3().click().wait(2000)
            this.checkerGameMove4().click()
            this.changePositionOfMove4().click().wait(2000)
            this.checkerGameMove5().click()
            this.changePositionOfMove5().click().wait(2000)
            this.checkerGameMove6().click()
            this.changePositionOfMove6().click().wait(2000)
            this.checkerGameMove7().click()
            this.changePositionOfMove7().click().wait(2000)
            this.checkerGameMove8().click()
            this.changePositionOfMove8().click().wait(2000)
            this.checkerGameMove9().click()
            this.changePositionOfMove9().click().wait(2000)
            this.checkerGameMove10().click()
            this.changePositionOfMove10().click().wait(2000)
            this.checkerGameMove11().click()
            this.changePositionOfMove11().click().wait(2000)
            this.checkerGameMove12().click()
            this.changePositionOfMove12().click().wait(2000)
            this.checkerGameMove13().click()
            this.changePositionOfMove13().click().wait(2000)
            this.checkerGameMove14().click()
            this.changePositionOfMove14().click().wait(2000)
            this.checkerGameMove15().click()
            this.changePositionOfMove15().click().wait(2000)
            this.checkerGameMove16().click()
            this.changePositionOfMove16().click().wait(2000)
            this.checkerGameMove17().click()
            this.changePositionOfMove17().click().wait(2000)
            this.checkerGameMove18().click()
            this.changePositionOfMove18().click().wait(2000)
            this.checkerGameMove19().click()
            this.changePositionOfMove19().click().wait(2000)
            this.checkerGameMove20().click()
            this.changePositionOfMove20().click().wait(2000)
            this.checkerGameMove21().click()
            this.changePositionOfMove21().click().wait(2000)
            this.checkerGameMove22().click()
            this.changePositionOfMove22().click().wait(2000)
            this.checkerGameMove23().click()
            this.changePositionOfMove23().click().wait(2000)
            this.checkerGameMove24().click()
            this.changePositionOfMove24().click().wait(2000)
            this.checkerGameMove25().click()
            this.changePositionOfMove25().click().wait(2000)
            this.VerifyWonMassage()

        }
}