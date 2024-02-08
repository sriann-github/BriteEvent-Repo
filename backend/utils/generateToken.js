import jwt from 'jsonwebtoken'

 const generateToken = (id) =>{
  jwt.sign({id: id}, process.env.JWT_SECRET_KEY, {expiresIn: '30d'})
}

export default generateToken