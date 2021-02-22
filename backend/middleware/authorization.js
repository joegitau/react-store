import jwt from 'jsonwebtoken';

import User from '../models/User.js';

export const authorize = async (req, res, next) => {
    let token;
    
    if (req.headers.authorization != null && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // console.log(decoded);

            // create/ add deecoded user element to request
            req.user = await User.findById(decoded.id).select('-password');
            next();
            
        } catch (error) {
            res.status(402).send('Not Authorized!')
        }
    }
}


// get the token
// verify that it matches the one provided in the req.headers
// if it matches, authorize the fucker