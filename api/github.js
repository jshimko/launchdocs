import fetch from 'isomorphic-fetch';

export function getConfig() {
  return fetch('https://raw.githubusercontent.com/reactioncommerce/reaction-docs/master/redoc.json').then((res) => res.json());
}

export function getTree() {
  return fetch('https://api.github.com/repos/reactioncommerce/reaction-docs/git/trees/master?recursive=1');
}

export function getHtml(path) {
  return fetch(`https://api.github.com/repos/reactioncommerce/reaction-docs/contents/${path}`, {
    headers: {
      Accept: 'application/vnd.github.v3.html'
    }
  }).then((res) => res.text());
}
