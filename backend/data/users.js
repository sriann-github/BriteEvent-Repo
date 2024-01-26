import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'adminuser@gmail.com',
    password: bcrypt.hashSync('123456',10),
    isAdmin: true
  },
  {
    name: 'Jane Doe',
    email: 'janedoe@gmail.com',
    password: bcrypt.hashSync('123456',10),
    isAdmin: true
  },
  {
    name: 'John Do',
    email: 'johndo@gmail.com',
    password: bcrypt.hashSync('123456',10),
    isAdmin: true
  }
]

export default users