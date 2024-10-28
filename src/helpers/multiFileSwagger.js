import path from 'path';
import YAML from 'yamljs';
import { resolveRefs } from 'json-refs';
import logger from '../../utils/logger';

const dirname = path.resolve();

const multiFileSwagger = root => {
  const options = {
    filter: ['relative', 'remote'],
    loaderOptions: {
      processContent(res, callback) {
        callback(null, YAML.parse(res.text));
      }
    },
    location: path.join(dirname, './docs/api.yaml')
  };

  return resolveRefs(root, options).then(
    results => results.resolved,
    err => {
      logger.error(err.stack);
    }
  );
};

export default multiFileSwagger;
