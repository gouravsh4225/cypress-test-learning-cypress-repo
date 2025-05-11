/// <reference types="cypress" />

describe("PortV2 test cases", () => {
     const pageLoadUrl = Cypress.config().baseUrl;
     console.info("pageLod",pageLoadUrl)
       it("navigating to index page", () => {
    cy.visit(pageLoadUrl);
  });

    it("should have left side title", () => {
     cy.visit(pageLoadUrl);
    cy.get("[data-cy='left_title']").contains("Hello, I'm Gourav Sharma");
  });
    it("should have left side description", () => {
     cy.visit(pageLoadUrl);
    cy.get("[data-cy='left_heading']").contains("I'm a Senior System Engineer based in Gurgaon, India specializing in building exceptional, high-quality websites and applications.");
  });
    it("should have left side social links", () => {
     cy.visit(pageLoadUrl);
    cy.get("[data-cy='left_socials_links']").children().should("have.length",4);
  });
    it("should have left side content section", () => {
     cy.visit(pageLoadUrl);
    cy.get("[data-cy='left_content_section']").children().should("have.length",2);
  });
    it("should have left side content section have email address", () => {
     cy.visit(pageLoadUrl);
    cy.get("[data-cy='left_content_email']").contains("gouravsh4225@gmail.com");
  });
    it("should have left side content section have phone number", () => {
     cy.visit(pageLoadUrl);
    cy.get("[data-cy='left_content_phonenumber']").contains("9416284225");
  });

  /** Right Side Content Testing */
  it("should have right side right_content_heading", () => {
     cy.visit(pageLoadUrl);
    cy.get("[data-cy='right_content_heading']").contains("Senior System Engineer");
  });
  it("should have right side right_content_skills", () => {
     cy.visit(pageLoadUrl);
    cy.get("[data-cy='right_content_skills']").contains("Skills");
  });
  it("should have right side right_content_skills_catergory have length of 3", () => {
     cy.visit(pageLoadUrl);
    cy.get("[data-cy='right_content_skills_catergory']").children().should("have.length",3);
  });
  it("should have right side right_content_experience title", () => {
     cy.visit(pageLoadUrl);
    cy.get("[data-cy='right_content_experience']").contains("EXPERIENCE");
  });
  
//   it("should submit the contact form", () => {
//     const delay = {
//       timeout: 100,
//     }; 
//     cy.visit("http://localhost:5173/about");
//     cy.get('[data-cy="contact-input-message"]').type("New Input Message");
//     cy.get('[data-cy="contact-input-name"]').type("Gourav");
//     cy.get('[data-cy="contact-input-email"]').type("gouravsh4225@gmail.com");
//     cy.get('[data-cy="contact-btn-submit"]').contains("Send Message");
//     cy.get('[data-cy="contact-btn-submit"]').should(
//       "not.have.attr",
//       "disabled"
//     );
//     cy.get('[data-cy="contact-btn-submit"]').click();
//     cy.get('[data-cy="contact-btn-submit"]').contains("Sending...");
//     cy.get('[data-cy="contact-btn-submit"]').should("have.attr", "disabled");

//     /** Alternate way for merging the function */
//     //     cy.get('[data-cy="contact-btn-submit"]')
//     //       .contains("Send Message")
//     //       .should("not.have.attr", "disabled");
//     //     cy.get('[data-cy="contact-btn-submit"]')
//     //       .contains("Send Message")
//     //       .and("not.have.attr", "disabled");
//   });

//   it("should use the alias", () => {
//     cy.visit("http://localhost:5173/about");
//     cy.get('[data-cy="contact-btn-submit"]').as("btnSubmit");
//     cy.get("@btnSubmit").contains("Send Message");
//     cy.get("@btnSubmit").should("not.have.attr", "disabled");
//     cy.get("@btnSubmit").click();
//   });
});