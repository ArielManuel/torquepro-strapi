export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'http:', 'blob:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://res.cloudinary.com'],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['*'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    },
  },
  {
    name: 'strapi::body',
    config: {
      formidable: {
        maxFileSize: 50 * 1024 * 1024, // 50MB
      },
    },
  },
  'strapi::logger',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
