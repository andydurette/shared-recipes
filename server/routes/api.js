import { CreateRecipe } from '../models/models.js';
import express from 'express';

const apiRouter = express.Router();

apiRouter
  .route('/userRecipe')
  .post(({body}, res) => {
    console.log(body);
    const createRecipe = new CreateRecipe({
      user_id: body.user_id ? body.user_id: user_id,
      cuisine: body.cuisine,
      name: body.name
    })

    createRecipe.save()
      .then((result) => {
        res.send(result);
      }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  apiRouter
  .route('/userRecipe')
  .get(({body}, res) => {

    CreateRecipe.find({ user_id: body.user_id ? body.user_id: user_id })
    .sort({ createdAt: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

  });

  export default apiRouter;