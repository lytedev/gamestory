import server, port from './server'

import config from '../../config'

const serverInstance = app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Backend listening at ' + uri + '\n')
})

export default serverInstance

console.log(serverInstance.close)
