  
import express from 'express';
import Product from '../models/productModel';
import { isAuth, isAdmin } from '../util';


const router = express.Router();

router.get('/:id', async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found.' });
    }
  });



export default router;