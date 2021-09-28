module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'robot@promresurs-ul.ru',
      defaultReplyTo: 'info@promresurs-ul.ru',
      testAddress: 'd@asknotbad.com',
    },
  },
});
