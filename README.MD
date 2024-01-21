

#Model View Controller
Model View Controller architecture is a common design pattern used to organize code and separate concerns. The MVC pattern helps in achieving a clean and modular codebase, making it easier to maintain and scale your application. <hr>


> Controller ----> Model (controller manipulate model)
<hr>

> Model ----> View (model manipulate view)
<hr>

![model_view_controler](/assets/model_view_controler_hxearzgx3.png)

##Model
- Model represents the application data and business logic.
- It responsible for interacting with database , processing data , and eforcing business rules.
```sh
// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

```

##View
 - View is responsible for rendering the use interface and presenting data to the user.
- In a Node.js application, views are often implemented using template engines like EJS, Pug, or Handlebars.
- Views should be kept as simple as possible and focus on displaying data provided by the controller.
 ```sh
<!-- views/users.ejs -->
<html>
  <head>
    <title>User List</title>
  </head>
  <body>
    <h1>User List</h1>
    <ul>
      <% users.forEach(user => { %>
        <li><%= user.username %></li>
      <% }); %>
    </ul>
  </body>
</html>
 ```

##Controller
 - Controller handles user input, processes requests, and communicates with the model to update the data. 
- It is responsible for controlling the flow of the application
- controllers handle HTTP requests, extract data from the request, interact with the model to retrieve or update data, and then pass the data to the view.
 ```sh
// controllers/userController.js
const User = require('../models/user');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.render('users', { users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAllUsers,
};

 ```
 <hr>

##Router 
- Routes define the mapping between URLs and controllers. 
- They direct incoming requests to the appropriate controller method.
-  In a Node.js application, Express is commonly used to handle routing.

```sh
// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);

module.exports = router;

```

