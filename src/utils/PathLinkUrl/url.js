export const urlRoute = url => {
  const routingPrefix = '/';
  return url
    ? `${routingPrefix ? `${routingPrefix}` : ''}${url}`.replace(/\/\//g, '/')
    : '';
};