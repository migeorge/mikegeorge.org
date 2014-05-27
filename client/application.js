Meteor.subscribe("jobs");
Meteor.subscribe("skills");
Meteor.subscribe("schools");

Template.frontend.jobs = function () {
	return Jobs.find();
};

Template.frontend.skills = function () {
	return Skills.find();
};

Template.frontend.schools = function () {
	return Schools.find();
};

Template.skill.rendered = function () {
	$('.skill-pie').easyPieChart( {
		barColor: '#f08b65',
		trackColor: '#cccccc',
		scaleColor: false,
		lineWidth: 5,
		size: 120
	});
};