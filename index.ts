import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()
app.use(helmet())
app.use(morgan())
app.use(cors())
app.use(bodyParser.json())

type Movie = {
    title: string
    image: string
    thumbnailImage: string
    genre: string
}

const moviesList = [
    {
        title: 'The Awesome Title of a Movie',
        image: 'https://picsum.photos/1920/1080',
        thumbnailImage: 'https://picsum.photos/300/400',
        genre: 'Horror'
    },
    {
        title: 'Short Title',
        image: 'https://picsum.photos/1920/1080',
        thumbnailImage: 'https://picsum.photos/300/400',
        genre: 'Horror'
    },
    {
        title: 'Why do we do this?',
        image: 'https://picsum.photos/1920/1080',
        thumbnailImage: 'https://picsum.photos/300/400',
        genre: 'Horror'
    },
    {
        title: 'Deliberately worded!',
        image: 'https://picsum.photos/1920/1080',
        thumbnailImage: 'https://picsum.photos/300/400',
        genre: 'Horror'
    },
    {
        title: 'What?!',
        image: 'https://picsum.photos/1920/1080',
        thumbnailImage: 'https://picsum.photos/300/400',
        genre: 'Horror'
    }
]

app.use('/movies', (req: Request, res: Response): express.Response<Movie[]> => {
    return res.send(moviesList)
})

app.use('/promo', (req: Request, res: Response): express.Response<Movie> => {
    return res.send(moviesList[0])
})

app.listen(3001, () => {
    console.log('listening on port 3001')
})