if (Meteor.isClient) {

	Template.multipleSelect.onRendered(function() {
		this.subscribe("options");
		var settings = _.extend({
			onFocus : function(){
				$('select').multipleSelect('refresh');
			}
		}, this.data.settings);
		$('select').multipleSelect(settings);
		var self = this;
		self.autorun(function () {
			var dataContext = Template.currentData();
			self.subscribe("options", dataContext.options);
			var select = $('select');
			$('select').multipleSelect('refresh');
		});
	});
}
