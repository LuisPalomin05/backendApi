const usersCntrl = {};
const User = require('../models/usuarios');

usersCntrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

usersCntrl.createUser = async (req, res) => {
  try {
    const { nombreUsuario, email, contraseña } = req.body;

    const newUser = new User({
      nombreUsuario,
      email,
      contraseña,
    });

    await newUser.save();
    console.log(newUser);
    res.status(201).json({ message: 'Usuario creado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear usuario', error });
  }
};

usersCntrl.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
  res.json(user);
};

usersCntrl.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json('Usuario eliminado');
};

usersCntrl.loginUser = async (req, res) => {
  try {
    const { usuario, contraseña } = req.body;

    const user = await User.findOne({ nombreUsuario: usuario });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    if (user.contraseña !== contraseña) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    res.json({
      message: 'Inicio de sesión exitoso',
      usuario: user.nombreUsuario,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error });
  }
};

module.exports = usersCntrl;
