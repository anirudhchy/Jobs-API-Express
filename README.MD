
# Jobs API

RESTful Express API with full CRUD functionality


## Demo

https://jobs-api-wcxm.onrender.com



## Screenshot

![App Screenshot](https://res.cloudinary.com/dt30ejyew/image/upload/v1676527676/Github%20Readme%20SS/Screenshot_2023-02-16_at_11.37.35_AM_lh2vor.png)
--

#### Setup

```bash
npm install && npm start
```

#### Database Connection

1. Import connect.js
2. Invoke in start()
3. Setup .env in the root
4. Add MONGO_URI with correct value

#### Routers

- auth.js
- jobs.js

#### User Model

Email Validation Regex

```regex
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

#### Register User

- Validate - name, email, password - with Mongoose
- Hash Password (with bcryptjs)
- Save User
- Generate Token
- Send Response with Token

#### Login User

- Validate - email, password - in controller
- If email or password is missing, throw BadRequestError
- Find User
- Compare Passwords
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token
- Send Response with Token

#### Mongoose Errors

- Validation Errors (if user does not provide one of the values)
- Duplicate (Email) (email not unique)
- Cast Error (/:id syntax doesnt match exactly to what mongoose is looking for)

#### Security

- helmet {for security, to prevent possible attacks}

- cors {cross origin resource sharing, for adding ability to access api with different domains/front-ends}

- xss-clean {sanitizes the user input in body,params etc , prevent cross site scripting attacks}

- express-rate-limit {limits the amount of requests that the user can make}