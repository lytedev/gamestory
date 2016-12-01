import Express from 'express'
import config from '../../config'

const app = Express()

const middleware = (req, res, next) => {
  res.send('GET request')
}

app.use middleware

export default app
export port config.server.dev.port
