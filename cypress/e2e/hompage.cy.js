describe('homepage', () => {
   beforeEach(() => {
     cy.visit('http://localhost:3000/')
     cy.viewport(390,844)
    })
    
    it('should load the page', () => {
      cy.findByRole('heading', {name: /Where do you want to live?/i}).should('exist')
    })
    
    it('should fetch and display 4 cities', () => {
      cy.intercept('GET', '**/urban_areas/', { fixture: 'urbanAreas.json'})
      cy.wait(3000)
      cy.findByText(/Albuquerque/i).should('exist')
      cy.findByText(/Anchorage/i).should('exist')
      cy.findByText(/Asheville/i).should('exist')
      cy.findByText(/Atlanta/i).should('exist')
    })
    
    it('should be able to click on a city image and get details', () => {
      cy.intercept('GET', '**/urban_areas/', { fixture: 'urbanAreas.json'})
      cy.findByRole('img', { name: /Albuquerque, New Mexico skyline/})
      .click()
      cy.intercept('GET', '**/slug:**', { fixture: 'cityDetails.json'})
      cy.intercept('GET', '**/scores', { fixture: 'cityScores.json'})
      cy.intercept('GET', '**/geonameid:**', { fixture: 'geonameid.json'})
      cy.findByRole('img', {  name: /back button icon/i}).should('exist')
    })
    
    it('should accept a text input and \'enter\' action to search by', () => {
      cy.intercept('GET', '**/urban_areas/', { fixture: 'urbanAreas.json'})
      cy.findByRole('combobox').type('Atlanta').type('{enter}').type('{enter}')
      cy.findByRole('img', {  name: /back button icon/i}).should('exist')
    })

    it('should accept a text input and \'button\' click to search by', () => {
      cy.intercept('GET', '**/urban_areas/', { fixture: 'urbanAreas.json'})
      cy.findByRole('combobox').type('Asheville').type('{enter}')
      cy.findByRole('img', {  name: /blue magnifying glass search icon\./i}).click()
      cy.findByRole('img', {  name: /back button icon/i}).should('exist')
    })

    it('should be able to navigate back to the homepage upon \'button\' click', () => {
      cy.intercept('GET', '**/urban_areas/', { fixture: 'urbanAreas.json'})
      cy.findByRole('combobox').type('Asheville').type('{enter}')
      cy.findByRole('img', {  name: /blue magnifying glass search icon\./i}).click()
      cy.findByRole('img', {  name: /back button icon/i}).should('exist').click()
      cy.findByRole('heading', {name: /Where do you want to live?/i}).should('exist')
    })

    it('should navigate to google maps upon click of location coordinates', () => {
      cy.intercept('GET', '**/urban_areas/', { fixture: 'urbanAreas.json'})
      cy.findByRole('combobox').type('Asheville').type('{enter}').type('{enter}')
      cy.findByRole('heading', {  name: /location/i}).click()
    })
    
})