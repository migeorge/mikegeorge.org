Meteor.publish("jobs", function () {
	return Jobs.find();
});

Meteor.publish("skills", function () {		
	return Skills.find();
});

Meteor.publish("schools", function () {
	return Schools.find();
})