module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'robot@asknotbad.com',
      defaultReplyTo: 'd@asknotbad.com',
      testAddress: 'd@asknotbad.com',
    },
  },
});
