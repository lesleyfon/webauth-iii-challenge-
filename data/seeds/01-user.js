exports.seed = async function(knex) {
    await knex('users').insert([
      {
        username: 'user1',
        password: 'password1'
      }
    ])
  };