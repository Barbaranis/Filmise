const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: 'Accès interdit : administrateur uniquement' });
    }
  };
  
  
  module.exports = isAdmin;
  
  