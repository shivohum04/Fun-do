import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import noterouter from './notes.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/notes', noterouter);

  return router;
};

export default routes;
