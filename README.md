# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Local Express App Lab

This lab will allow you to practice Express middleware by creating a fully CRUD RESTful API.

## Tasks

1. Your application should have a dummy database with a different theme to the users lesson. It should look similar to this with your own data:
```js
const events = [
  { type: 'music', location: 'Royal Festival Hall', name: 'Mahler’s Resurrection' },
  { type: 'sport', location: 'Tower Bridge', name: 'London Half Marathon' },
  { type: 'film', location: 'Rio Cinema', name: 'Barbie' }
]
```

2. You should have a logger middleware, either using [morgan](https://www.npmjs.com/package/morgan) or custom building your own.

3. You should have a Route Not Found middleware that catches any requests that don't match the ones your API offers.

4. Your API should have the following capabilities for data manipulation: 
  - An index route
  - A show route (single entry)
  - A create route
  - A delete route
  - An update route.

5. Your statuses should match the action being performed, if you're not sure which is appropriate, then use google!

## BONUS

1. Have an error fallback for when an entry is not found