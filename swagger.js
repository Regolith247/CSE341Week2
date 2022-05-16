const { Linter } = require('eslint');

const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'https://cs341week2.herokuapp.com/git remote',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./index.js'];



swaggerAutogen(outputFile, endpointsFiles, doc);