/// <reference types="cypress" />

describe("About Contact Form", () => {
  it("should submit the contact form", () => {
    const delay = {
      timeout: 100,
    }; 
    cy.visit("http://localhost:5173/about");
    cy.get('[data-cy="contact-input-message"]').type("New Input Message");
    cy.get('[data-cy="contact-input-name"]').type("Gourav");
    cy.get('[data-cy="contact-input-email"]').type("gouravsh4225@gmail.com");
    cy.get('[data-cy="contact-btn-submit"]').contains("Send Message");
    cy.get('[data-cy="contact-btn-submit"]').should(
      "not.have.attr",
      "disabled"
    );
    cy.get('[data-cy="contact-btn-submit"]').click();
    cy.get('[data-cy="contact-btn-submit"]').contains("Sending...");
    cy.get('[data-cy="contact-btn-submit"]').should("have.attr", "disabled");

    /** Alternate way for merging the function */
    //     cy.get('[data-cy="contact-btn-submit"]')
    //       .contains("Send Message")
    //       .should("not.have.attr", "disabled");
    //     cy.get('[data-cy="contact-btn-submit"]')
    //       .contains("Send Message")
    //       .and("not.have.attr", "disabled");
  });

  it("should use the alias", () => {
    cy.visit("http://localhost:5173/about");
    cy.get('[data-cy="contact-btn-submit"]').as("btnSubmit");
    cy.get("@btnSubmit").contains("Send Message");
    cy.get("@btnSubmit").should("not.have.attr", "disabled");
    cy.get("@btnSubmit").click();
  });
});
