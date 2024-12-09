//The test for label and font size if fixed to be for macbook Air M1 display size.
describe("Contact Page", () => {
   beforeEach(() => {
      cy.visit("/contactPage.html");
   });

   it("should fill out the form and submit", () => {
      cy.get(".input-name").type("John Doe");
      cy.get(".input-name").should("have.value", "John Doe");

      cy.get(".input-email").type("john.doe@example.com");
      cy.get(".input-email").should("have.value", "john.doe@example.com");

      cy.get(".input-number").type("1234567890");
      cy.get(".input-number").should("have.value", "1234567890");

      cy.get(".input-message").type("This is a test message.");
      cy.get(".input-message").should("have.value", "This is a test message.");

      cy.get(".submit-btn").click();
   });

   it("should move the label above the input when focused", () => {
      cy.get(".input-name").focus();
      cy.get(".label-input-name")
         .should("have.css", "top", "0px")
         .and("have.css", "left", "15px")
         .and("have.css", "font-size", "16px");
   });

   it("should move the label above the input when not empty", () => {
      cy.get(".input-name").type("John Doe");
      cy.get(".label-input-name")
         .should("have.css", "top", "0px")
         .and("have.css", "left", "15px")
         .and("have.css", "font-size", "12.8px");
   });

   it("should reset the label position when input is cleared", () => {
      cy.get(".input-name").type("John Doe").clear();
      cy.get(".label-input-name")
         .should("have.css", "top", "0px")
         .and("have.css", "left", "15px")
         .and("have.css", "font-size", "16px");
   });

   it("should move the label above the input when focused", () => {
      cy.get(".input-name").focus();
      cy.get(".label-input-name")
         .should("have.css", "top", "0px")
         .and("have.css", "left", "15px")
         .and("have.css", "font-size", "16px");
   });

   it("should move the label above the input when not empty", () => {
      cy.get(".input-name").type("John Doe");
      cy.get(".label-input-name")
         .should("have.css", "top", "0px")
         .and("have.css", "left", "15px")
         .and("have.css", "font-size", "12.8px");
   });

   it("should reset the label position when input is cleared", () => {
      cy.get(".input-name").type("John Doe").clear();
      cy.get(".label-input-name")
         .should("have.css", "top", "0px")
         .and("have.css", "left", "15px")
         .and("have.css", "font-size", "16px");
   });
   //--------test email form------------
   it("should move the label above the input when focused", () => {
      cy.get(".input-email").focus();
      cy.get(".label-email")
         .should("have.css", "top", "0px")
         .and("have.css", "left", "15px")
         .and("have.css", "font-size", "16px");
   });

   it("should move the label above the input when not empty", () => {
      cy.get(".input-email").type("john.doe@example.com");
      cy.get(".label-email")
         .should("have.css", "top", "0px")
         .and("have.css", "left", "15px")
         .and("have.css", "font-size", "12.8px");
   });
   it("should reset the label position when input is cleared", () => {
      cy.get(".input-email").type("John Doe").clear();
      cy.get(".label-email")
         .should("have.css", "top", "0px")
         .and("have.css", "left", "15px")
         .and("have.css", "font-size", "16px");
   });
    //-------------test for phone nm form---------------
    it("should move the label above the input when focused", () => {
        cy.get(".input-number").focus();
        cy.get(".label-number")
           .should("have.css", "top", "0px")
           .and("have.css", "left", "15px")
           .and("have.css", "font-size", "16px");
     });
  
     it("should move the label above the input when not empty", () => {
        cy.get(".input-number").type("072333398");
        cy.get(".label-number")
           .should("have.css", "top", "0px")
           .and("have.css", "left", "15px")
           .and("have.css", "font-size", "12.8px");
     });
     it("should reset the label position when input is cleared", () => {
        cy.get(".input-number").type("072333398").clear();
        cy.get(".label-number")
           .should("have.css", "top", "0px")
           .and("have.css", "left", "15px")
           .and("have.css", "font-size", "16px");
     });
});
