const person = {
    authInfo: { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        auth: {
            authSource: 'admin'
        },
        user: 'acc',
        pass: 'acc_rocks'
    },
    url: 'mongodb://mongo.accsoftwarebootcamp.com',
    db: 'stevenk'
  }
  exports.person = person