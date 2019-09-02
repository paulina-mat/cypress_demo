import * as url from "../../common/urlList"

import { Given, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('I request nameday app', () => {
 cy.request(url.GET_TODAY)
   .then((resp) => {
    expect(resp.status).to.eq(200)
  })
})

Then('The day is today', () => {
  var date = new Date();
  var day = date.getDate();
  cy.request(url.GET_TODAY)
    .its('body')
    .its('data')
    .its('day')
    .should('be.equal', day)
})

And('The month equals current month', () => {
  var month = new Date()
  var currentMonth = month.getMonth() + 1 
  cy.request(url.GET_TODAY)
    .its('body')
    .its('data')
    .its('month')
    .should('be.equal', currentMonth)
})