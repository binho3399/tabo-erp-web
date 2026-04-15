import 'dotenv/config'

import express from 'express'
import payload from 'payload'
import config from './payload.config'

const app = express()
const port = Number(process.env.PAYLOAD_PORT ?? 3001)

if (!process.env.PAYLOAD_SECRET) {
  process.env.PAYLOAD_SECRET = 'tabo-cms-local-secret'
}

const start = async () => {
  await payload.init({
    config,
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: () => {
      payload.logger.info(`Payload CMS is running at ${process.env.PAYLOAD_PUBLIC_URL || `http://localhost:${port}`}`)
    },
  })

  app.listen(port, () => {
    payload.logger.info(`CMS API listening on port ${port}`)
  })
}

start().catch((error) => {
  console.error(error)
  process.exit(1)
})
