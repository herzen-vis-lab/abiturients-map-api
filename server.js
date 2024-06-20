//server.js
const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const apiRouter = require('./app/apiRouter');
const sequelize = require('./app/sequelize');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Technopark API",
      version: '1.0.0',
    },
  },
  apis: ["server.js", "./app/*.js", "./app/*/*.js" ], // Paths where JSDoc is present
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.get('/', (req, res) => {
  console.log(req.connection);	
  res.send('API работает, Адрес swagger /api/docs')
});
app.use('/api', apiRouter);

/**
 * @swagger
 * tags:
 *   - name: Point
 *     description: Точки
 *   - name: Point type
 *     description: Типы точек
 */

app.listen(3000);
