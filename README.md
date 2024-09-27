# Server setup with MongoDB

### - First: Install dependencies 

```
npm install
```

### - Second: Configure MongoDB connection 

 Create environment files (***`.env`***) you can copy ***`.env.sample`*** files as starters (**don't** delete them)

### - And to start it: Run the server using 

```
npm run start
```
---

#### This server is built to interact with a MongoDB database for managing user data and communication with the 'WildWeather_APP' front-end, employing the MVC architecture.

# Security

- Password: Use Argon2 for hashing passwords.
- JsonWebToken: Used for secure authentication and information exchange.
