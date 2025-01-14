const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) => res.send('All index'));
indexRouter.get('/:indexID', (req, res) => {
  const { indexID } = req.params;
  res.send(`Index ID: ${indexId}`);
});

module.exports = indexRouter;
