/**
 * Created by Daniel on 21.10.2013.
 */

'use strict';

var Story = function(Id, Name, Description, UserId, Tasks)
{
    this.Id = Id;
    this.Name = Name;
    this.OwnerId = UserId;
    this.Description = Description;
    this.Tasks = Tasks || [];

    this.AddTask = function(Task)
    {
        Task.StoryId = this.Id;
        this.Tasks.push(Task);
    };

    this.RemoveTask = function(Task)
    {
        Task.StoryId = undefined;
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

var User = function (Id, UserName, FirstName, LastName, Stories)
{
    this.Id = Id;
    this.UserName = UserName;
    this.FirstName = FirstName;
    this.LastName = LastName;

    this.Stories = Stories || [];

    this.AddStory = function(Story)
    {
        Story.UserId = this.Id;
        this.Stories.push(Story);
    };

    this.RemoveStory = function(Story)
    {
        Story.UserId = undefined;
        this.Stories.splice(Story.Id - 1, 1);
    }

    this.listName = function()
    {
        return this.LastName + " " + this.FirstName;
    }
};

User.prototype.toString = function()
{
    return this.FirstName + " " + this.LastName;
};

