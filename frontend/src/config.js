const config = {
  SENTRY_DSN:
    "https://afad4ef66521479780055f8099a3794c@o1126737.ingest.sentry.io/6168013",
  STRIPE_KEY:
    "pk_test_51KJ1GQGbeK7vaI50yzGrKcGI2m22LIaI0yt80QD0tTUdKu1FQVQSXXeZYfd42i1p8MnVZGfms5DviiVGzQT4XaY200O3rg9UrM",
  MAX_ATTACHMENT_SIZE: 5000000,
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
