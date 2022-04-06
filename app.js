const models = require('./models');



// Lazy load. 
models.user.findAll().then((users) => {
  users.forEach(element => {
    console.log(element.toJSON())
    // you need to ask for the posts and this becomes async
    element.getPosts().then((posts) => {
      console.log(posts)
    })
  });
})

// eager load
models.user.findAll({ include: models.post }).then((users) => {
  users.forEach(element => {
    //posts are already part of the model and will be console log under the posts attribute.
    console.log(element.toJSON())
  });
})
