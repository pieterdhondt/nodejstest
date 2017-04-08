module.exports = {
  apps: [{
    name: 'nodejstest',
    script: './app.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-54-93-40-39.eu-central-1.compute.amazonaws.com',
      key: '~/.ssh/pieter-mac-key.pem',
      ref: 'origin/master',
      repo: 'https://github.com/pieterdhondt/nodejstest.git',
      path: '/home/ec2-user/nodejstest',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}