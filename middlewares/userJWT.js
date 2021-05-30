const jwt = require('jsonwebtoken');
const User = require('../models/user')

const userJWT = async (request, response, next) => {
    const authHeader = request.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return response.status(401).send('Token is missing')
  
    try {
      var decoded = jwt.verify(token, process.env.SECRET_TOKEN)
    } catch (err) {
      return response.status(401).send(err)
    }
    const user = await User.findOne({ email: decoded.email })
    if (!user) return response.status(404).send('User not found')
  
    request.user = user
    next()
  }

module.exports = userJWT;
