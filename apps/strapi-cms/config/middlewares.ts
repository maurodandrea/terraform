export default ({ env }: any) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        // useDefaults: true,
        directives: {
          // 'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'strapi.io',
            env('AWS_BUCKET_FULL_URL'),
          ],
          // 'media-src': [
          //   "'self'",
          //   'data:',
          //   'blob:',
          //   'market-assets.strapi.io',
          //   env('AWS_BUCKET_FULL_URL'),
          // ],
          // upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::query',
  'strapi::body',
  'strapi::public',
  'strapi::favicon',
];
