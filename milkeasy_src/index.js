const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Milkeasy")

const add_f_a_c_form_Routes= require("./routes/add_f_a_c_form_route");
app.use("/user",add_f_a_c_form_Routes);

const feedback_routes= require("./routes/feedback_routes");
app.use("/feedback",feedback_routes);

const milkCollectionRoutes= require("./routes/milk_collection_routes");
app.use("/milk",milkCollectionRoutes);

const SetRateRoutes= require("./routes/set_rate_routes");
app.use("/setRate",SetRateRoutes);

const loginRoutes= require("./routes/login_routes");
app.use("/login",loginRoutes);


const PORT = 2000;
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));

//login




// Login endpoint
// app.post('/login', async (req, res) => {
//   const { email, password,usertype } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       // User not found
//       return res.status(404).json({ message: 'Invalid username or password.' });
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       // Invalid password
//       return res.status(401).json({ message: 'Invalid username or password.' });
//     }
//     const usertypeMatch = await compare(usertype, user.usertype);
//     if (!usertypeMatch) {
//       // Invalid usertype
//       return res.status(401).json({ message: 'Invalid user Type.' });
//     }


//     // Successful login
//     return res.status(200).json({ message: 'Login successful.' });
//   } catch (error) {
//     console.error
//   }})

// const plaintextPassword = 'password1234';

// bcrypt.hash(plaintextPassword, 10, (err, encryptedPassword) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log('Encrypted Password:', encryptedPassword);
// });


// const Password = 'password1234';
// const encryptedPassword = '$2b$10$E2bkFkyxvqkslvjr575gtuvKFSzjE420jiFWKGWm9lBqE2wGmuUha';

// bcrypt.compare(Password, encryptedPassword, (err, isMatch) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   if (isMatch) {
//     console.log('Passwords match!');
//   } else {
//     console.log('Passwords do not match!');
//   }
// });
