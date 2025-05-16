import express from 'express'
import cookieParser from 'cookie-parser'
import api from './routes/api'

const app = express()
app.use(cookieParser())
app.use(api)

const port = 3000

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})