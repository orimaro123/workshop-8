# Welcome to workshop-8
Today you will practice Layered Structure, Middlewares and Schema Validation

1. Go to ```'./controllers/jediController.js'``` and replace client response errors to proper Error with status
   (TODO 1-4)
2. Go to ```'./middleware/validation/jediSchema.js'``` and all missing fields to schema validation. (TODO 5)
   1. height - should be between 0 and 300
   2. mass - should be greater than 0
   3. hair_color - string more than 3 chars
   4. skin_color - string more than 3 chars
   5. birth_year - string more than 4 chars
   6. eye_color - string more than 4 chars
   7. gender - string
   For validation schema option check docs: [https://express-validator.github.io/docs/schema-validation.html](https://express-validator.github.io/docs/schema-validation.html)

3. Add Jedi Schema Validation (TODO 6) for missing route (think which one)
4. Add auth middleware in ```./middleware/auth.js``` (TODO 7)
   1. The main idea is to check that request has header "Authorization" and it contains secret republic key "may_the_force_be_with_you"
   2. Use in Postman "Bearer" authorization and get rid of "Bearer" substring in your middleware in the beginning of the value of authorization key
   3. Don't forget to export auth middleware function
   4. Go to ```jediRoutes.jb``` and import auth middleware (TODO 8)
   5. Add auth middleware to all our routes. We want only those that with a key access our jedis 
5. Test that everything is working!