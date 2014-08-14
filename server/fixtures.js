var password = process.env.MIKEGEORGE_PASSWORD;
if (typeof(password) !== 'undefined') {
  if ( Meteor.users.find().count() === 0 ) {
    Accounts.createUser({
        username: 'mikeyg6754',
        email: 'mike@tallduck.com',
        password: password,
        profile: {
            first_name: 'Mike',
            last_name: 'George',
        }
    });
  }
}
