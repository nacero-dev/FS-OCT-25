const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

const listPosts = async (req, res) => {
  try {
    // Público: devuelve posts + comentarios
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate('author', 'username email');

    const postIds = posts.map(post => post._id);
    const comments = await Comment.find({ post: { $in: postIds } })
      .sort({ createdAt: 1 })
      .populate('author', 'username');

    // Agrupar comentarios por post
    const map = new Map();
    for (const c of comments) {
      const key = String(c.post);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(c);
    }

    const result = posts.map(p => ({
      ...p.toObject(),
      comments: map.get(String(p._id)) || [],
    }));

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content, imageBase64 } = req.body;

    if (!title || !content || !imageBase64) {
      return res.status(400).json({ error: 'Missing fields', message: 'title, content e imageBase64 son obligatorios' });
    }

    const post = await Post.create({
      title,
      content,
      imageBase64,
      author: req.user._id,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, imageBase64 } = req.body;

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ error: 'Not Found', message: 'Post no encontrado' });

    // Permiso: solo dueño (o admin)
    const isOwner = String(post.author) === String(req.user._id);
    if (!isOwner && !req.user.admin) {
      return res.status(403).json({ error: 'Forbidden', message: 'No puedes editar este post' });
    }

    // Imagen sigue siendo obligatoria: si no la mandas, mantenemos la anterior.
    post.title = title ?? post.title;
    post.content = content ?? post.content;
    post.imageBase64 = imageBase64 ?? post.imageBase64;

    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ error: 'Not Found', message: 'Post no encontrado' });

    const isOwner = String(post.author) === String(req.user._id);
    if (!isOwner && !req.user.admin) {
      return res.status(403).json({ error: 'Forbidden', message: 'No puedes borrar este post' });
    }

    await Comment.deleteMany({ post: post._id });
    await Post.deleteOne({ _id: post._id });

    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { listPosts, createPost, updatePost, deletePost };
