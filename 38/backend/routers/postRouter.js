const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const {
  listPosts,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/postController');

// Público
router.get('/', listPosts);

// Protegidas
router.post('/', auth, createPost);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

module.exports = router;
