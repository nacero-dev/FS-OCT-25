const Comment = require('../models/commentModel');
const Post = require('../models/postModel');

const createComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Missing fields', message: 'text es obligatorio' });
    }

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: 'Not Found', message: 'Post no encontrado' });

    const comment = await Comment.create({
      text,
      post: postId,
      author: req.user._id,
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    const comment = await Comment.findById(id);
    if (!comment) return res.status(404).json({ error: 'Not Found', message: 'Comentario no encontrado' });

    const isOwner = String(comment.author) === String(req.user._id);
    if (!isOwner && !req.user.admin) {
      return res.status(403).json({ error: 'Forbidden', message: 'No puedes editar este comentario' });
    }

    comment.text = text ?? comment.text;
    await comment.save();

    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    const comment = await Comment.findById(id);
    if (!comment) return res.status(404).json({ error: 'Not Found', message: 'Comentario no encontrado' });

    const isOwner = String(comment.author) === String(req.user._id);
    if (!isOwner && !req.user.admin) {
      return res.status(403).json({ error: 'Forbidden', message: 'No puedes borrar este comentario' });
    }

    await Comment.deleteOne({ _id: id });
    res.json({ message: 'Comment deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { createComment, updateComment, deleteComment };
