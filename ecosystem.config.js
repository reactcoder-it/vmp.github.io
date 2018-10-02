module.exports = {
  apps : [{
    name      : 'pxstudio',
    script    : './app.js',
    cwd       : './',
    env: {
      NODE_ENV: 'development',
      PORT    : 8080
    },
    env_production : {
      NODE_ENV: 'production',
      PORT    : 8080
    }
  }]
};
