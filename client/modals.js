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

Template.job_modal.job = function () {
	return 	Jobs.findOne({_id: Session.get("editing")});
}
Template.school_modal.school = function () {
	return 	Schools.findOne({_id: Session.get("editing")});
}
Template.skill_modal.skill = function () {
	return 	Skills.findOne({_id: Session.get("editing")});
}

Template.frontend.events({
	'click .add-job':function () {
		Session.set("showJobModal", true);
	},
	'click .add-school':function () {
		Session.set("showSchoolModal", true);
	},
	'click .add-skill':function() {
		Session.set("showSkillModal", true);
	}
});
Template.job.events({
	'dblclick .editable': function (e) {
		Session.set("showJobModal", true);
		Session.set("editing", this._id);
		$(e.currentTarget).toggleClass("editing");
	} 
});
Template.school.events({
	'dblclick .editable': function () {
		Session.set("showSchoolModal", true);
		Session.set("editing", this._id);
	}
});
Template.skill.events({
	'dblclick .editable': function (e) {
		Session.set("showSkillModal", true);
		Session.set("editing", this._id);
		$(e.currentTarget).toggleClass("editing");
	},
});

Template.job_modal.events({
	'click .cancel':function(){
		Session.set("showJobModal", false);
		Session.set("editing", null);
	},
	'click .save':function(e, tmpl){
		var position     = tmpl.find('#position').value;
		var skills       = tmpl.find('#skills').value;
		var description  = tmpl.find('#description').value;
		var company      = tmpl.find('#company').value;
		var company_link = tmpl.find('#company_link').value;
		var start        = tmpl.find('#start').value;
		var end          = tmpl.find('#end').value;

		Jobs.update({_id: Session.get("editing")}, 
					{$set: {position: position, skills: skills, description: description,
					        company: company, company_link: company_link, start: start, 
					        end: end}});

		Session.set("showJobModal", false);
		Session.set("editing", null);
	},
	'click .add':function(e, tmpl){
		var position     = tmpl.find('#position').value;
		var skills       = tmpl.find('#skills').value;
		var description  = tmpl.find('#description').value;
		var company      = tmpl.find('#company').value;
		var company_link = tmpl.find('#company_link').value;
		var start        = tmpl.find('#start').value;
		var end          = tmpl.find('#end').value;

		Jobs.insert({position: position, skills: skills, description: description,
					 company: company, company_link: company_link, start: start, 
					 end: end});

		Session.set("showJobModal", false);
	},
	'click .remove':function(e, tmpl){
		var position     = tmpl.find('#position').value;
		var skills       = tmpl.find('#skills').value;
		var description  = tmpl.find('#description').value;
		var company      = tmpl.find('#company').value;
		var company_link = tmpl.find('#company_link').value;
		var start        = tmpl.find('#start').value;
		var end          = tmpl.find('#end').value;

		Jobs.remove({_id: Session.get("editing")});

		Session.set("showJobModal", false);
		Session.set("editing", null);
	}
});
Template.school_modal.events({
	'click .cancel':function(){
		Session.set("showSchoolModal", false);
		Session.set("editing", null);
	},
	'click .save':function(e, tmpl){
		var school      = tmpl.find('#school').value;
		var meta        = tmpl.find('#meta').value;
		var description = tmpl.find('#description').value;
		var completion  = tmpl.find('#completion').value;

		Schools.update({_id: Session.get("editing")}, 
					   {$set: {school: school, meta: meta, description: description,
					           completion: completion}});

		Session.set("showSchoolModal", false);
		Session.set("editing", null);
	},
	'click .add':function(e, tmpl){
		var school      = tmpl.find('#school').value;
		var meta        = tmpl.find('#meta').value;
		var description = tmpl.find('#description').value;
		var completion  = tmpl.find('#completion').value;

		Schools.insert({school: school, meta: meta, description: description,
					    completion: completion});

		Session.set("showSchoolModal", false);
	},
	'click .remove':function(e, tmpl){
		var school      = tmpl.find('#school').value;
		var meta        = tmpl.find('#meta').value;
		var description = tmpl.find('#description').value;
		var completion  = tmpl.find('#completion').value;

		Schools.remove({_id: Session.get("editing")});

		Session.set("showSchoolModal", false);
		Session.set("editing", null);
	}
});
Template.skill_modal.events({
	'click .cancel':function(){
		Session.set("showSkillModal", false);
		Session.set("editing", null);
	},
	'click .save':function(e, tmpl){
		var skill      = tmpl.find('#skill').value;
		var confidence = tmpl.find('#confidence').value;

		Skills.update({_id: Session.get("editing")}, 
					  {$set: {skill: skill, confidence: confidence}});

		Session.set("showSkillModal", false);
		Session.set("editing", null);
	},
	'click .add':function(e, tmpl){
		var skill      = tmpl.find('#skill').value;
		var confidence = tmpl.find('#confidence').value;

		Skills.insert({skill: skill, confidence: confidence});

		Session.set("showSkillModal", false);
	},
	'click .remove':function(e, tmpl){
		var skill      = tmpl.find('#skill').value;
		var confidence = tmpl.find('#confidence').value;

		Skills.remove({_id: Session.get("editing")});

		Session.set("showSkillModal", false);
		Session.set("editing", null)
	}
});