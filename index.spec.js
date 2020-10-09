const server = require('./server')
const request = require('supertest')

describe('server.js', () => {
  describe('/api/projects', () => {
    it('should return a 200 status when a get is made', async () => {
      const response = await request(server).get('/api/projects')

      expect(response.status).toEqual(200)
    });
    it('should create a new project when a post is made', async () => {
      const response = await request(server)
        .post('/api/projects')
        .send({
          name: "unit4 - sprint3 -module4",
          language: "javascript",
        })

      expect(response.body.id).toBeTruthy()
    });
  });
  describe('/api/projects/:id', () => {

    it('should return a 204 when sent a delete', async () => {
      const response = await request(server)
        .delete('/api/projects/1')
      expect(response.status).toEqual(204)
    });
    it('should return a 404 when told to delete a non existent id', async () => {
      const response = await request(server)
        .delete('/api/projects/10')

      expect(response.status).toEqual(404)
    })
    it('should return a project when sent a valid id', async () => {
      const expected = {
        name: "unit4 - sprint3 -module4",
        language: "javascript"
      }

      const response = await request(server)
        .get('/api/projects/1')

      expect(response.body.name).toMatch(expected.name)
      expect(response.body.language).toMatch(expected.language)
    });
    it('should return a 404 when sent a get with an invalid id', async () => {
      const response = await request(server)
        .get('/api/projects/10')

      expect(response.status).toEqual(404)
    });
  });
});