module.exports = {
  apps : [{
    name:'api-principal',
    script: './api/index.js',
    watch: ['./api/']
  }, {
    name:'api-mysql',
    script: './mysql/index.js',
    watch: '.'
  },
  {
    name:'api-post',
    script: './posts/index.js',
    watch: '.'
  },
  {
    name:'api-redis',
    script: './cache/index-cache.js',
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
