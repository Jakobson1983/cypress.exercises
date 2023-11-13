///<reference types="cypress" />

// const cypress = require("cypress")

// // it('First test suite', () => {

// //    it('first test', () => {

// //     cy.visit('http://localhost:4200/')
// //     cy.contains('Forms').click()
// //     cy.contains('Form Layouts').click()

// //     // by Tag name
// //     cy.get('input')

// //     // by ID
// //     cy.get('#inputEmail1')
// //     // by Attribute name
// //     cy.get('[fullwidth]')
// //     // by Attribute anf value
// //     // cy.get() 
// //    })

// // })

// it('Second test', () => {

//     cy.visit('http://localhost:4200/')
//     cy.contains('Forms').click()
//     cy.contains('Form Layouts').click()


//    //  Theory
//    // get() -find elements by locator globaly
//    // find() -find element b locator
//    //  contains() - find html text by text and locator

//    cy.contains('Sign in')
//    cy.contains('[status="warning"]','Sign in')

//    // Cypres chain and dom

//    cy.get('#"inputEmail3"')
//       .parents

// });

it('save subject of the command', () => {
   cy.visit('http://localhost:4200/')
   cy.contains('Forms').click()
   cy.contains('Form Layouts').click()

   // cy.contains('nb-card','Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
   // cy.contains('nb-card','Using the Grid').find('[for="inputPassword2"]')
   
   cy.get('[for="exampleInputEmail1"]').then( label => {
      const labelText = label.text()
      expect(labelText).to.equal( 'Email address')
   })

   cy.get('[for="exampleInputEmail1"]').invoke('text').as('labelText').should('contain', 'Email address')
})

it('radio buttons', () => {
   cy.visit('http://localhost:4200/')
   cy.contains('Forms').click()
   cy.contains('Form Layouts').click()

   cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radioButtons => {
      cy.wrap(radioButtons).eq(0).check({force: true}).should('be.checked')
      cy.wrap(radioButtons).eq(1).check({force: true})
      cy.wrap(radioButtons).eq(0).should({force: true}).should('not.be.checked')
      cy.wrap(radioButtons).eq(2).should({force: true}).should('be.disabled')
   })
})

it.only('radio buttons', () => {
   cy.visit('http://localhost:4200/')
   cy.contains('Modal & Overlays').click()
   cy.contains('Toastr').click()

   // cy.get('[type="checkbox"]').uncheck({force: true})
   cy.get('[type="checkbox"]').eq(1).check({force: true})
})