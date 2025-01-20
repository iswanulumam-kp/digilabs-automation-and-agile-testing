const request = require('supertest'); // Import supertest
const API_URL = 'https://gorest.co.in/public/v2/users'; // External API endpoint

// Reusable function to send GET request to the users endpoint
const getUsers = async () => {
    const response = await request(API_URL).get('/');
    return response;
};
  
// Expected user fields for validation
const userFields = ['id', 'name', 'email', 'gender', 'status'];

describe('External API Testing with Jest and Supertest', () => {

    it('should return a 200 status and a list of users', async () => {

        const response = await getUsers();

        // Assertions
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);

    });

    it('should return a user with required fields ', async () => {
        const response = await getUsers();

        // Validate that the first user has the expected fields
        const user = response.body[0];
        userFields.forEach(field => expect(user).toHaveProperty(field));
    });

    it('should return a 404 status for a non-existent user', async () => {
        const invalidUserId = '999999';
        const response = await request(API_URL).get(`/${invalidUserId}`);

        // Assertions for 404 status when user doesn't exist
        expect(response.status).toBe(404);
    });

});