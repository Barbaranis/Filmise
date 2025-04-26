module.exports = (req, res, next) => {
    const userId = parseInt(req.params.id);
    const isOwner = req.user.id === userId;
    const isAdmin = req.user.role === 'admin';
  
  
    if (isOwner || isAdmin) {
      return next();
    }
  
  
    return res.status(403).json({ message: 'Accès interdit : réservé au propriétaire ou à un administrateur' });
  };
  
  