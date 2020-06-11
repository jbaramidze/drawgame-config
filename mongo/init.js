db.createUser({
  user: 'u',
  pwd: 'p',
  roles: [
    {
      role: 'readWrite',
      db: 'drawgame'
    }
  ]
})

db.words.insert({ word: 'სიტყვა 1', lang: 'ge' });
db.words.insert({ word: 'სიტყვა 2', lang: 'ge' });
db.words.insert({ word: 'სიტყვა 3', lang: 'ge' });
db.words.insert({ word: 'სიტყვა 3', lang: 'ge' });

db = connect("localhost:27017/drawgameTest");

db.createUser({
  user: 'u',
  pwd: 'p',
  roles: [
    {
      role: 'readWrite',
      db: 'drawgameTest'
    }
  ]
})