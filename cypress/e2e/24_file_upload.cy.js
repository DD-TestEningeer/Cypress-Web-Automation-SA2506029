



describe('File Upload Demo', ()=>{


    it("Verify the file upload test", ()=>{


        // visit the url 

        cy.visit('https://the-internet.herokuapp.com/upload')

        // find the upload button and send the file 

        cy.get('#file-upload').attachFile('testData.txt');

        // click on the upload button 
        cy.get('#file-submit').click()

        // Verify that the file is uploaded successfully 
        cy.get('h3').should('have.text', 'File Uploaded!')


    })



})
