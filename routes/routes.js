const express = require('express');
const router = express.Router();
const {
    autoSearch,
    search, 
    list, 
    listSimilarities, 
    tagList, 
    categoryList,
    reviewList
} = require('../controller/yummlyController')

router.get('/feeds/auto-complete', autoSearch)


  router.get('/feeds/search', search);
  router.get('/feeds/list', list);
  router.get('/feeds/list-similarities', listSimilarities);
  router.get('/tags/list', tagList);
  router.get('/categories/list', categoryList);
  router.get('/reviews/list', reviewList);



// //Get by ID Method
// router.get('/user/:id', userController.getById);

// //Update by ID Method
// router.patch('/user/:id', userController.update);


// //Delete by ID Method
// router.delete('/user/:id', userController.deleteUser)


module.exports = router;
//DATABASE_URL = mongodb+srv://nok:jiezcOtWFB6SSMUo@cluster0.1i4gfco.mongodb.net/?retryWrites=true&w=majority