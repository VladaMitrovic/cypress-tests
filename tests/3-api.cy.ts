describe('Task 3 - API Test', () => {
  it('GET /posts returns valid data', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.be.an('array')
        expect(res.body.length).to.be.greaterThan(0)
        expect(res.body[0]).to.have.property('id')
      })
  })
})