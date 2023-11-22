///<reference types="cypress" />

const { futimes } = require("fs")

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

// it('save subject of the command', () => {
//    cy.visit('http://localhost:4200/')
//    cy.contains('Forms').click()
//    cy.contains('Form Layouts').click()

//    // cy.contains('nb-card','Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
//    // cy.contains('nb-card','Using the Grid').find('[for="inputPassword2"]')
   
//    cy.get('[for="exampleInputEmail1"]').then( label => {
//       const labelText = label.text()
//       expect(labelText).to.equal( 'Email address')
//    })

//    cy.get('[for="exampleInputEmail1"]').invoke('text').as('labelText').should('contain', 'Email address')
// })

// it('radio buttons', () => {
//    cy.visit('http://localhost:4200/')
//    cy.contains('Forms').click()
//    cy.contains('Form Layouts').click()

//    cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radioButtons => {
//       cy.wrap(radioButtons).eq(0).check({force: true}).should('be.checked')
//       cy.wrap(radioButtons).eq(1).check({force: true})
//       cy.wrap(radioButtons).eq(0).should({force: true}).should('not.be.checked')
//       cy.wrap(radioButtons).eq(2).should({force: true}).should('be.disabled')
//    })
// })

// it('radio buttons', () => {
//    cy.visit('http://localhost:4200/')
//    cy.contains('Modal & Overlays').click()
//    cy.contains('Forms').click()

//    // cy.get('[type="checkbox"]').uncheck({force: true})
//    cy.get('[type="checkbox"]').eq(1).check({force: true})
// })

// it.only('Date picker', () => {
   
   

//    cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {  
//       cy.wrap(input).click()

//       function selectDayFromCurrent() {
//             let date = new Date()
//             date.setDate(date.getDate() + day)
//             let futureDate = date.getDate()
//             let futureMonth = date.toLocaleDateString('en-US', { month: 'short'})
//             let futureYear = date.getFullYear()
//             let dateToAssert = `${futureMonth} ${futureDate}, ${futureYear}`

//          cy.get('nb-calendar-navigation').should('exist').invoke('attr', 'ng-reflect-date').then( dateAttribute => { if (!dateAttribute.includes(futureMonth) || !dateAttribute.includes(futureYear)) {
//             cy.get('[data-name="chevron-right"]').click()
//             selectDayFromCurrent()
//          } else { cy.get('.day-cell').should('exist').not('.bounding-month').contains(futureDate).click()
//          }
//       })

//            return dateToAssert

//       }

//       cy.visit('http://localhost:4200/')
//       cy.contains('Forms').click()
//       cy.contains('Datepicker').click()
//       cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {  
//          cy.wrap(input).click()
      
//          const dateToAssert = selectDayFromCurrent(200)
//       // selectDayFromCurrent()
//       // cy.get('nb-calendar-day-picker').contains(futureDate).click()
//       // cy.get('.day-cell').not('.bounding-month').contains(futureDate).click()

//       cy.wrap(input).invoke('prop', 'value').should('contain', dateToAssert)
//       cy.wrap(input).should('have.value', dateToAssert)
     
//    })
// })
// })

// it('Lists and dropdowns', () => {
//       cy.visit('/')
      
//       // 1
//       cy.get('nav nb-select').click()
//       cy.get('.options-list').contains('Dark').click()
//       cy.get('nav nb-select').should('contain', 'Dark')

//       // 2
//       cy.get('nav nb-select').then( dropdown => {
//          cy.wrap(dropdown).click()
//          cy.get('.options-list nb-option').each((listItem, index) => {
//              const itemText = listItem.text().trim()
//            cy.wrap(listItem).click()
//            cy.wrap(dropdown).should('contain', itemText) 
//            if (index < 3) {
//               cy.wrap(dropdown).click()
//            }
//          //   cy.wrap(dropdown).click()
//            })
//       })
   
//    })

//    it('Web tables', () => {
//       cy.visit('/')
//       cy.contains('Tables & Data').click()
//       cy.contains('Smart Table').click()

//       // 1 get
//       cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
//          cy.wrap(tableRow).find('.nb-edit').click()
//          cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('35')
//          cy.wrap(tableRow).find('.nb-checkmark').click()
//          cy.wrap(tableRow).find('td').eq(6).should('contain', '35')


//       // 2 get to row based on text of the cell
//          cy.get('thead').find('.nb-plus').click()
//          cy.get('thead').find('tr').eq(2).then( tableRow => {
//          cy.wrap(tableRow).find('[placeholder="First Name"]').type('Alex')
//          cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Kozlov')
//          cy.wrap(tableRow).find('.nb-checkmark').click()
//       })
//          cy.get('tbody tr').first().find('td').then( tableColumns => {
//             cy.wrap(tableColumns).eq(2).should('contain', 'Alex')
//             cy.wrap(tableColumns).eq(3).should('contain', 'Kozlov')
//          })

//       // 3 get each row validation
//       const age = [20, 30, 40, 200]
//       cy.wrap(age).each( age => {
//          cy.get('thead [placeholder="Age"]').clear().type(age)
//          cy.wait(500)
//          cy.get('tbody tr').each( tableRow => {
//             if (age == 200) {
//                cy.wrap(tableRow).should('contain', 'No data found')
//             } else {
//                cy.wrap(tableRow).find('td').eq(6).should('contain', age)
//             }
//          })
//       })
     
//       // cy.get('thead [placeholder="Age"]').clear().type(20) 
//       // cy.wait(500)
//       // cy.get('tbody tr').each( tableRow => {
//       //    cy.wrap(tableRow).find('td').eq(6).should('contain', '20')
//       })    
//    })
//  21.xI PopUps and Tooltips

it('tooltip', () => {
   cy.visit('/')
   cy.contains('Modal & Overlays').click()
   cy.contains('Tooltip').click()

   cy.contains('nb-card', 'Colored Tooltips').contains('Default').click()
   cy.get('nb-tooltip').should('contain', 'This is a tooltip')

   })

it.only('Dialog box', () => {
   cy.visit('/')
   cy.contains('Tables & Data').click()
   cy.contains('Smart Table').click()

   // cy.get('tbody tr').first().find('.nb-trash').click()
   // cy.on('window:confirm', (confirm) => {
   //    expect(confirm).to.equal('Are you sure you want to delete?')
   // })

   // const stub = cy.stub()
   // cy.on('window:confirm', stub)
   // cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
   //    expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
   // })
   // 3
   cy.get('tbody tr').first().find('.nb-trash').click()
   cy.on('window:confirm', () => false)
})