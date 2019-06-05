const express = require('express');

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  burger.all(function(data) {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);

    // if (err) {
    //     return res.status(500).end();
    //   }
    // console.log(data);
    res.render('index', hbsObject);
    // res.render('index', { burger: data });
    
  });
});

router.post('/api/burger', function(req, res) {
    burger.create(['burger_name', 'devoured'], [req.body.name, 0], function(result) {
    // Send back the ID of the new quote
    // res.json({ id: result.insertId });
     res.json(result);
  });

});

router.put('/api/burger/:id', function(req, res) {
    console.log(req.param.id)
  const condition = {id: req.params.id}
//   const condition = {id: req.params.burgerid}

  console.log('condition', condition);

  // sleepy is sent as a string to our server
  // convert it to a boolean before passing it to the database
  let devoured = true;
//   if (req.body.devoured === 'false') {
//     hungry = true;
//   } 
//   else {
//     hungry = false;
//   }

  burger.update(
    {
        devoured: devoured
    },
    condition,
    function(result) {
        console.log(devoured);
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
      console.log()

    }
  );
});

// router.delete("/api/cats/:id", function(req, res) {
//   const condition = { id: req.params.id }

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
