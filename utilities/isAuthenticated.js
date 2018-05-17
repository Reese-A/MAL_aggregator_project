module.exports = function (req, res, next) {
  console.log('Authenticator');

  if (req.isAuthenticated()) {
    next();
  } else {
    return res.json({
      message: 'Please sign in'
    });
  }
};

