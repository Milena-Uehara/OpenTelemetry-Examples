'use strict'

const redis = require('redis')
const client = redis.createClient({ host: 'redis-svc.otel.svc.cluster.local' })

client.on('error', () => {})
client.on('ready', () => {
  client.set('jwks', '{}')
})

module.exports = client
