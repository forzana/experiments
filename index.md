<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<script>
$().ready(function() {
	$("#text").html("Text added by jQuery code.");

	$.get("http://cors.io/?https://dev-rhodes.embark.com/embeddedProspects/form/marshall/registration2022", function( data ) {
		console.log(data);
		$("#inquiryForm").html(data);
	});
});
</script>
 
<div id="text"></div>
<div id="inquiryForm"></div>
