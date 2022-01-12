<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<script>
$().ready(function() {
	$.post("https://dev-rhodes.embark.com/embeddedProspects/form/rhodes/vca", {content: {cscField: 'East Africa', cscField__NAME__: 'East Africa'}}, function( data ) {
		console.log(data);
		console.log("hello");
		$("#inquiryForm").html(data);
	});
});
</script>
 
<div id="inquiryForm"></div>

<br />
