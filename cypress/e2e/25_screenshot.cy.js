



describe("Screenshot Demo", ()=>{

it("Test 1: Capture the Screenshots Manually", ()=>{


// open the url 

cy.visit('https://dd-demo-tau.vercel.app/login.html')

// full page screenshot
cy.screenshot('Login_Page')

// area specific screenshot
cy.xpath('//form[@method="post"]').screenshot('Login_Form')

// element specific screenshot
cy.xpath('//button[@onclick="submitForm()"]').screenshot('Login Button Screenshot')



})


})