Session.set("showLoginModal", false);
Session.set("showSkillModal", false);
Session.set("showJobModal", false);
Session.set("showSchoolModal", false);

Template.modals.showLogin = function () {
	return Session.get("showLoginModal");
};
Template.modals.showSkill = function () {
	return Session.get("showSkillModal");
};
Template.modals.showJob = function () {
	return Session.get("showJobModal");
};
Template.modals.showSchool = function () {
	return Session.get("showSchoolModal");
};

Template.skill_modal.id = function () {
	return Session.get("editing");
};

Template.job.events({
	'dblclick .editable': function () {
		Session.set("showJobModal", true);
		Session.set("editing", this._id);
	} 
});
Template.school.events({
	'dblclick .editable': function () {
		Session.set("showSchoolModal", true);
		Session.set("editing", this._id);
	}
});
Template.skill.events({
	'dblclick .editable': function (e, tmpl) {
		Session.set("showSkillModal", true);
		Session.set("editing", this._id);
		console.log(e);
		$(e.currentTarget).toggleClass("editing");
	},
});

Template.job_modal.events({
	'click .cancel':function(){
		Session.set("showJobModal", false);
		Session.set("editing", null);
	}
});
Template.school_modal.events({
	'click .cancel':function(){
		Session.set("showSchoolModal", false);
		Session.set("editing", null);
	}
});
Template.skill_modal.events({
	'click .cancel':function(){
		Session.set("showSkillModal", false);
		Session.set("editing", null);
	}
});