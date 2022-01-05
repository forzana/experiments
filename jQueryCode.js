$().ready(function() {
	$("#text").html("Text added by jQuery code.");

	$.get("https://dev-rhodes.embark.com/embeddedProspects/form/marshall/registration2022", function( data ) {
		console.log(data);
		$("#inquiryForm").html(data);
	});
});
