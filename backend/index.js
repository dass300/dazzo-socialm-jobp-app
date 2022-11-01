import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()

app.use(bodyParser.json({ limit : "30mb", extended :true}))
app.use(bodyParser.urlencoded({ limit :"30mb",extended :true}))
app.use(cors())

const CONNECTION_URL = "mongodb+srv://dazzo:12345@cluster0.5rrvaai.mongodb.net/?retryWrites=true&w=majority"