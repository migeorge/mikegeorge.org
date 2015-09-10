Meteor.publish("jobs", function () {
	return Jobs.find({}, {sort: {index: -1}});
});

Meteor.publish("skills", function () {
	return Skills.find({}, {sort: {confidence: -1}});
});

Meteor.publish("schools", function () {
	return Schools.find();
});
