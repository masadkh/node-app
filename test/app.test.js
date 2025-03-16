const app = require('../app');
const request = require('supertest');

test('GET / returns "Hello World!"', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello World!');
});
