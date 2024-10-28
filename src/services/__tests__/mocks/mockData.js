export const mockPost = {
  id: '1',
  title: 'Sample Post',
  content: 'This is a sample post content',
  userId: 7,
  createdAt: new Date(),
  updatedAt: new Date()
};

// export const mockUser = {
//   id: 7,
//   firstName: 'John',
//   lastName: 'Doe',
//   email: 'john.doe@example.com',
//   password: 'hashedpassword123'
// };

export const mockUser = {
  id: 7,
  email: 'john.doe@example.com',
  password: '$2b$10$exampleHashedPassword', // Use a hashed password for bcrypt comparison
  first_name: 'John',
  last_name: 'Doe'
};

export const mockToken = 'your.jwt.token.here';
