Session.set("loginError", false);

Template.frontend.events({
	'click .login':function () {
		Session.set("showLoginModal", true);
	},
	'click .logout':function () {
		Meteor.logout();
	}
});

function loginCallback(e)
{
	if(e){
		Session.set("loginError", true);
	}
	else{
		Session.set("loginError", false);
		Session.set("showLoginModal", false);
	}
}

Template.login_modal.loginError = function () {
	return Session.get("loginError");
}

Template.login_modal.events({
	'click .login':function(e, tmpl){
		var username = tmpl.find("#username").value;
		var password = tmpl.find("#password").value;

		Meteor.loginWithPassword(username, password, loginCallback);
	},
	'click .cancel':function(){
		Session.set("showLoginModal", false);
	}
});