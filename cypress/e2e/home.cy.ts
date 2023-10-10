describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.get("#__next").should("be.visible")
  })
  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading").contains("Testing Next.js Applications with Cypress")
    })

    it.only("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })
  context("Courses section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })
    it("Course: Testing Foundation", () => {
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })
    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})