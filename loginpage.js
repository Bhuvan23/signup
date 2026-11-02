const express = require('express');
const User = require('./User');

const app = express();
app.use(express.json());

app.post('/signup', async (req, res) => {
    try {
        const {name, username, email, password, retype_password, gender, mobile_number, address} = req.body;
        const user = new User({name, username, email, password, retype_password, gender, mobile_number, address});
        await user.save();
        res.status(201).json({message: 'User created successfully'});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

app.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (email !== password) {
            return res.status(401).json({message: 'invalid email or password'});
        }
        res.json({message: 'Login successful'});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

app.listen(3000, () => {console.log('Server is running on port 3000')});