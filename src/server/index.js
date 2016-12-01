import Express from 'express'

const app = Express()

app.get('/', (req, res) =>
  res.send('GET request')
)

export default app.listen(port, (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Backend listening at ' + uri + '\n')

  // when env is testing, don't need open it
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
}
