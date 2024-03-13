export class checker{
    checkerPageVerify(){
        cy.get('.page').should('contain','Checkers')
    }

    clickOnRestartButton(){
        return cy.get('a').contains('Restart...')
    }

    clickOnFirstMate(){
        return cy.get('[name="space42"]')
    }

    ClickedMateONlocation1(){
        return cy.get('[name="space33"]')
    }

    ClickedMateONlocation2(){
        return cy.get('[name="space33"]')
    }

    ClickedMateONlocation3(){
        return cy.get('[name="space24"]')
    }

    clickOnSecondMate(){
        return cy.get('[name="space02"]')
    }
    ClickedMateONlocation4(){
        return cy.get('[name="space24"]')
    }

    clickOnThirdMate(){
        return cy.get('[name="space62"]')
    }

    clickedMateOnLocation5(){
        return cy.get('[name="space53"]')
    }

    clickOnFourthMate(){
        return cy.get('[name="space31"]')
    }

    clickedMateOnLocation6(){
        return cy.get('[name="space53"]')
    }
    checker5StepsGame(){
        this.checkerPageVerify()
        this.clickOnRestartButton().click()
        this.clickOnFirstMate().click()
        this.ClickedMateONlocation1().click().wait(2000)
        this.ClickedMateONlocation2().click().wait(2000)
        this.ClickedMateONlocation3().click().wait(2000)
        this.clickOnSecondMate().click()
        this.ClickedMateONlocation4().click().wait(2000)
        this.clickOnThirdMate().click()
        this.clickedMateOnLocation5().click().wait(2000)
        this.clickOnFourthMate().click()
        this.clickedMateOnLocation6().click()
    }
}