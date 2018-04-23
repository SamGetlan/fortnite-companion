const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../db/models');

module.exports = function configurePassport(passport) {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy(
    {
      passReqToCallback: true,
    },
    (req, username, password, done) => {
      process.nextTick(() => {
        User.findOne({ username }, (err, user) => {
          if (err) { return done(err); }
          if (user) {
            console.log('Sorry, that username is already in user');
            return done(null, false, { message: 'That username is already taken' });
          }
          const newUser = new User();
          newUser.username = username;
          newUser.password = newUser.generateHash(password);

          newUser.save((error) => {
            if (error) { throw error; }
            return done(null, newUser);
          });
        });
      });
    },
  ));

  passport.use('local-login', new LocalStrategy(
    {
      passReqToCallback: true,
    },
    (req, username, password, done) => {
      User.findOne({ username }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          console.log('No user with that username');
          return done(null, false, 'No user with that username found');
        }
        if (!user.validPassword(password)) {
          console.log('Whoops! Wrong password');
          return done(null, false, 'Whoops! Wrong password');
        }
        return done(null, user);
      });
    },
  ));
};
