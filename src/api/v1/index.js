import express from 'express';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import multiFileSwagger from '../../helpers/multiFileSwagger';
import authRouter from './authentication';
import postsRouter from './posts';

const router = express.Router();

const dirname = path.resolve();
async function initializeSwagger() {
  try {
    const swaggerDocument = YAML.load(path.join(dirname, './docs/api.yaml'));
    const results = await multiFileSwagger(swaggerDocument);
    router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(results));
  } catch (error) {
    throw error;
  }
}
initializeSwagger();

router.use('/authentication', authRouter);
router.use('/posts', postsRouter);

export default router;
