const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
    //Get token from header
    const token = req.header('x-auth-token');

    //Check if not token
    if (!token) {
        return res.status(401).json({ msg: 'No token. Authorization denied.' })
    }

    try {
        //pull out payload and put in decoded
        const decoded = jwt.verify(token, config.get('jwtSecret'))

        //Set user to payload so can access to route
        req.user = decoded.user;
        next();
    }
    catch (err) {
        res.status(401).json({ msg: 'Token is not valid' })
    }
}