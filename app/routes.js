module.exports = function(app) {

  // server routes ======================================

  // sample api route
  app.get('/api/nerds', function(req, res) {
    // use mongoose to get the nerds out of the DB
    Nerd.find(function(err, nerds) {
      if (err)
        res.send(err);
      res.json(nerds);
    });
  });

  // routes to handle creating (app.post)
  // routes to handle deleting (app.delete)
  
  // frontend routes ====================================
  // route to handle all angular requests
  app.get('*', function(req, res){
    res.sendfile('./public/views/index.html');
  });
};
