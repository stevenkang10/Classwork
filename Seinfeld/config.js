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
    db: 'seinfeld_skang'
  }
  exports.person = person






//my code along that didnt work
// const person = {
//     authInfo: { 
//         useNewUrlParser: true, 
//         useUnifiedTopology: true,
//         auth: {
//             authSource: 'admin'
//         },
//         user: 'acc',
//         pass: 'acc_rocks'
//     },
//     url: 'mongodb://mongo.accsoftwarebootcamp.com',
//     db: 'seinfeld_skang'
// }
// exports.person = person