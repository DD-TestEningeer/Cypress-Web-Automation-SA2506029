// this is the first test case to open the url

const { describe } = require("node:test");

// test suite => packages => com.demo.tests

// Test Suite => Group of test cases
// 1) test suite name
// 2) callback function => test cases

describe('Web_Automation', () => {
  // add test cases to the test suite
  it('Test Case 1: Open the Google URL', () => {
    // cy => Cypress driver
    // visit() => open the URL

    cy.visit('https://www.google.com'); // 
  });
});

