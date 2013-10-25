'use strict';

angular.module('otisApp')
  .service('Tasks', function Tasks() {
    // AngularJS will instantiate a singleton by calling "new" on this function
        var tasks = [
            new Task(1, 1, 'Design Otis', 'Make new UI design for OTIS', new Date(2013, 10, 21), new Date(2013, 10, 25)),
            new Task(2, 1, 'Make Otis draft app', 'Make first draft of the application', new Date(2013, 10, 25), new Date(2013, 10, 30)),
            new Task(3, 1, 'Write some documentation', 'Write some functional documentation for the application', new Date(2013, 10, 19), new Date(2013, 10, 15))
        ];

        return tasks;
  })
    .service('Stories', function Stories(){
        var stories = [];
        return stories;
    })
;