import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mask', function(req, res, next) {
  res.render('mask', { title: 'Express' });
});

export default router;
