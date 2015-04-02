if (Meteor.isClient) {

	Template.multipleSelect.onRendered(function() {
		this.subscribe("options");
		var settings = _.extend({}, this.data.settings);
		$('select[multiple]').multipleSelect(settings);
		var self = this;
		self.autorun(function () {
			var dataContext = Template.currentData();
			self.subscribe("options", dataContext.options);
			var select = $('select[multiple]');
			$('select[multiple]').multipleSelect('refresh');
		});
	});
}
