# micro-controller-api
 A RESTful API for tracking Units and collecting data from stations inserting parts or conducting tests

## CRUD
* Create - POST Request `/units`
    * Creates a new Unit instance with given Serial Number and Type
    * Example: `data = { "serialNum": "123sd12", "type": "GAS" }`
* Read - GET Request `/units/:sn`
    * Retrieve existing Unit with given Serial Number
    * Example: `/units/123sd12`
    * Result: `{ "serialNum": "123sd12", "type": "GAS", "initialized": false, "shipped": false, station: [] }`
* Update - PATCH Request `/units/:id`
    * Update existing Unit with updated data
    * Example: *Unit was Initialized* `data = { "serialNum": "123sd12", "type": "GAS", "initialized": true, "shipped": false, station: [] }`
    * Result: `{ "serialNum": "123sd12", "type": "GAS", "initialized": true, "shipped": false, station: [] }`
* Delete - DELETE Request `/units/:id`
    * Delete an instance with given ID
    * Example: `/units/123123jkh213jkh213`
    * Result: `{ "message": "Unit deleted successfully!" }`

### Dependencies Used:
* Express - Used to Build API
* Mongoose - Used to connect to MongoDB Atlas as well as defining Schemas
* Dotenv - Loads environment variables from a .env file into process.env, allows for storing MongoDB connection URL