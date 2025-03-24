const usersCntrl = {};

const User = require('../models/Users');

usersCntrl.getUsers = async (req, res) => {

    const users = await User.find();
    res.json(users);
}

usersCntrl.createUser = async (req, res) => {
    
        const  username  = req.body;
        const newUser = new User( username);
        await newUser.save();
        console.log(newUser);
        res.send('User created');
};

usersCntrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

usersCntrl.updateUser = (req, res) => res.send('User updated');

usersCntrl.deleteUser = async (req, res) => 
    {
       await User.findByIdAndDelete(req.params.id);
       res.json('User deleted');
    };

module.exports = usersCntrl;