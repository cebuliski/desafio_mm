import express from 'express'
import { AppDataSource } from './data-source'
import routes from './routes'
import cors from 'cors'

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(cors())

  app.use(express.json())

  app.use(routes)

  return app.listen(process.env.PORT)
}).then(() => {
  console.log("Data Source has been initialized!")
}).catch((err) => {
  console.error("Error during Data Source initialization", err)
})