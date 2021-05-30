const Admin = require('../models/admin');
const {
  adminloginValidation,
} = require('../middlewares/validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const admin_login = async (req, res) => {
  const { error } = adminloginValidation(req.body);
  const email = req.body.email;
  const pass  = req.body.password

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const admin = await Admin.findOne({ email: req.body.email })
  
  if(!admin){
    return res.status(400).send({ err: 'Email or password is wrong' });
  }

  const passMatching = await bcrypt.compareSync(pass,admin.password);
    if (!passMatching) {
      return res.status(400).send({ err: 'Email or password is wrong' });
    }

  //admin login
  if (
    email === req.body.email 
  ) {
    jwt.sign(
      { name: admin.name, email: admin.email },
      process.env.SECRET_TOKEN,
      { expiresIn: '3600s' },
      (err, token) => {
        if (err) {
          return res.status(400).err;
        }
        res.header('auth-token', token).send({
          name: admin.name,
          id:admin._id,
          email:admin.email,
          token: token,
          loginAt: Date.now(),
          expireTime: Date.now() + 60 * 60 * 1000,
        });
      },
    );
  } 
  };
module.exports = {
  admin_login,
};
