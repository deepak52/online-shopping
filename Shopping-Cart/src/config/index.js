const node_env = process.env.NODE_ENV || 'development';

export const env = {

  'serviceUrl': (node_env==='production')?'https://service.joyce.pwc.delivery/':'http://localhost:8001/',
  'userUrl':(node_env==='production')?'https://users.joyce.pwc.delivery/':'http://localhost:3000/'
}


export const dataUrl = {
  'getOffers': 'offers-list',
}
