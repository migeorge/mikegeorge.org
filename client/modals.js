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