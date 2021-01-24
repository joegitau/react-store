import bcryptjs from 'bcryptjs';

const users = [
    { 
        name: 'Super Admin',
        email: 'admin@joegitau.com',
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true,
    },
    { 
        name: 'Joe Gitau',
        email: 'joe@joegitau.com',
        password: bcryptjs.hashSync('123456', 10),
    },
    { 
        name: 'Mason Gitau',
        email: 'mason@joegitau.com',
        password: bcryptjs.hashSync('123456', 10),
    }
];

export default users;
