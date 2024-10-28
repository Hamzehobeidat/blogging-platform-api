import { postService } from '../../../services';

export const createPost = async (req, res, next) => {
  try {
    const { body } = req;
    const status = await postService.createPost(body);
    return res.status(status).send();
  } catch (err) {
    return next(err);
  }
};

export const getPosts = async (req, res, next) => {
  try {
    const { query } = req;
    const posts = await postService.getPosts(query);
    return res.json(posts);
  } catch (err) {
    return next(err);
  }
};

export const getPostById = async (req, res, next) => {
  const { params } = req;
  try {
    const post = await postService.getPostById(params);
    return res.json(post);
  } catch (err) {
    return next(err);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const { params, body } = req;
    const status = await postService.updatePost(params, body);
    return res.status(status).send();
  } catch (err) {
    return next(err);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const { params } = req;
    const status = await postService.deletePost(params);
    return res.status(status).send();
  } catch (err) {
    return next(err);
  }
};
