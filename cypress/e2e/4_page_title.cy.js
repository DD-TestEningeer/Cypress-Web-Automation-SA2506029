

// Page title verification test 

describe('Page Title Test Suite', () => {



// Test Case 1- Home page title check 
    it('Test Case 1- Home page title check', ()=>{

        // step 1- Home page navigation 
        cy.visit('https://dd-demo-tau.vercel.app/')

        // step 2 - Validate for the home page title check 
        // Expected Title - "Software Testing By DD"
        cy.title().should('includes', 'Software Testing By DD')

    })



 // Test Case 2- Register page title check 
    it('Test Case 2 - Register page title check', ()=>{

        // step 1- Register page navigation 
        cy.visit('https://dd-demo-tau.vercel.app/register.html')

        // step 2 - Validate for the register page title check 
        // Expected Title - "Register Demo"
        cy.title().should('includes', 'Register Demo')

    })  
    
    
  // Test Case 3- Login page title check 
    it('Test Case 3 - Login page title check', ()=>{

        // step 1- Login page navigation 
        cy.visit('https://dd-demo-tau.vercel.app/login.html')

        // step 2 - Validate for the login page title check 
        // Expected Title - "Login Page"
        cy.title().should('includes', 'Login Page')

    })   
   





})