/**
 * Created by Daniel on 21.10.2013.
 */

'use strict';

var Story = function(Id, Name, Description, Tasks)
{
    this.Id = Id;
    this.Name = Name;
    this.Description = Description;
    this.Tasks = Tasks || [];

    this.AddTask = function(Task)
    {
        Task.StoryId = this.Id;
        this.Tasks.push(Task);
    };

    this.RemoveTask = function(Task)
    {
        this.Tasks.splice(Task.Id - 1, 1 );
    };
};

var Task = function(Id, StoryId, Name, Description, CreatedOn, DueDate)
{
    this.Id = Id;
    this.StoryId = StoryId;
    this.Name = Name;
    this.Description = Description;
    this.CreatedOn = CreatedOn;
    this.DueDate = DueDate;
};

