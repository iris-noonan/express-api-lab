const express = require('express')
const morgan = require('morgan')

// ! -- Variables
const app = express()
const port = 3000

// ! -- Models
// * Fake Database
const worldFoods = [
    { name: 'Pastel de Belém', country: 'Portugal', city: 'Lisbon', type: 'pastry' },
    { name: 'Parma ham', country: 'Italy', city: 'Parma', type: 'charcuterie' },
    { name: 'Paella Valenciana', country: 'Spain', city: 'Valenciana', type: 'main' },
    { name: 'Pintxos', country: 'Spain', city: 'Basque country', type: 'main' },
    { name: 'Cheddar', country: 'United Kingdom', city: 'Cheddar', type: 'cheese' },
    { name: 'Kanelbullar', country: 'Sweden', city: 'Gothenburg', type: 'pastry' },
]

// ! -- Middleware
app.use(express.json())

app.use(morgan('dev'))

// ! -- Route Handlers

// * -- Index
app.get('/', (req, res) => {
    try {
        return res.send(worldFoods)
    } catch (error) {
        console.log(error)
        return res.status(500).send('An error occurred')
    }
})

// * -- Show
app.get('/dishes/:dish', (req, res) => {
    try {
        const dish = req.params.dish;

        const foundDish = worldFoods.find(food => {
            return food.name === dish
        })

        if (foundDish) {
            return res.send(foundDish)
        } else {
            return res.status(404).send('Dish not found')
        }
    }
    catch (error) {
        console.log(error)
        return res.status(500).send('An error occurred')
    }
})

// * -- Create
// Body: JSON object containing "name", "country", "city" and "type"
app.post('/dishes', (req, res) => {
    try {
        req.body.id = worldFoods.length + 1
        worldFoods.push(req.body)
        return res.send(req.body)
    } catch (error) {
        console.log(error)
        return res.status(500).send('An error occurred')
    }
})

// * -- Delete
app.delete('/dishes/:dish', (req, res) => {
    try {
        const dish = req.params.dish

        const foundDish = worldFoods.find(food => {
            return food.name === dish
        })

        if (foundDish) {
            const newWorldFoods = worldFoods.filter((food) => {
                return food.name !== dish
            })
            return res.send(foundDish)
        } else {
            return res.status(404).send('Dish not found')
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send('An error occurred')
    }
})

// * -- Update
app.put('/dishes/:dish', (req, res) => {
    try {
        const dish = req.params.dish
        const patchData = req.body

        const findIndex = worldFoods.findIndex(food => {
            return food.name === dish
        })

        if (findIndex) {
            worldFoods[findIndex] = patchData
            return res.send(patchData)
        } else {
            return res.status(404).send('Dish not found')
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send('An error occurred')
    }
})

// ! -- 404 Handlers
app.get('*', (req, res) => {
    return res.status(404).send('<h1>Page not found!</h1>')
})
  
app.use((req, res) => {
    return res.status(404).send('Resource not found')
})

// Start the Express server
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`)
})
