const userService = require('../services/user.service');

function isLoggedIn(req, res, next) {

  if(!req.body?.userId || !req.body?.token) {
    res.send('token or user are invalid')
    return next()
  }

  const user = userService.getUserById(req.body.userId);

  if (user.token === req.body.token) {
    console.log('the user is authenticated')
    return next();
  }
  console.log('not authenticated, redirecting to /login')
  return res.redirect('/login');
}

module.exports = isLoggedIn;
