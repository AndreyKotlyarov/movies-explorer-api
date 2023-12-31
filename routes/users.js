const router = require('express').Router();
const {
  getUserInfo,
  updateUser,
} = require('../controllers/users');
const { validateUpdateUser } = require('../middlewares/validate');

router.get('/me', getUserInfo);
router.patch('/me', validateUpdateUser, updateUser);

module.exports = router;
