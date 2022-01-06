<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<script>
$().ready(function() {
	$("#text").html("Text added by jQuery code.");

	$.get("https://dev-rhodes.embark.com/embeddedProspects/form/rhodes/vca", function( data ) {
		console.log(data);
		$("#inquiryForm").html(data);
	});
});
</script>
 
<div id="text"></div>
<div id="inquiryForm"></div>
