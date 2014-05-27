Jobs = new Meteor.Collection("jobs");
Skills = new Meteor.Collection("skills");
Schools = new Meteor.Collection("schools");

Jobs.allow({
	'insert':function (userId){
		if(userId) {
			return true;
		}
		else {
			return false;
		}
	},
	'update':function (userId){
		if(userId) {
			return true;
		}
		else {
			return false;
		}
	},
	'remove':function (userId){
		if(userId) {
			return true;
		}
		else {
			return false;
		}
	}
});
Skills.allow({
	'insert':function (userId){
		if(userId) {
			return true;
		}
		else {
			return false;
		}
	},
	'update':function (userId){
		if(userId) {
			return true;
		}
		else {
			return false;
		}
	},
	'remove':function (userId){
		if(userId) {
			return true;
		}
		else {
			return false;
		}
	}
});
Schools.allow({
	'insert':function (userId){
		if(userId) {
			return true;
		}
		else {
			return false;
		}
	},
	'update':function (userId){
		if(userId) {
			return true;
		}
		else {
			return false;
		}
	},
	'remove':function (userId){
		if(userId) {
			return true;
		}
		else {
			return false;
		}
	}
});