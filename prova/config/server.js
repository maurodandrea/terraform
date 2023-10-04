module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',['XAv1+cYcuz21l5dHA7aDlw==','QqgYEaji081vFU477qwuUA==','DQOMFNmMupXrWZhD5KAQDA==','vvG4guYGdgUoO++jpiUEvg==']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
