'use strict';

angular.module('otisApp')
  .service('Users', function Users() {
    // AngularJS will instantiate a singleton by calling "new" on this function
        var users = [
            new User(1, "bdaniel7", "Daniel", "Blendea"),
            new User(2, "user1", "User1", "Name1"),
            new User(3, "user2", "User2", "Name2")
        ];

        return users;
  });
