<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<script>
$().ready(function() {
	$.post("https://dev-rhodes.embark.com/embeddedProspects/form/rhodes/vca", {content: {cscField: 'East Africa', cscField__NAME__: 'East Africa'}}, function( data ) {
		console.log(data);
		$("#inquiryForm").html(data);
	});
});
</script>
 
<div id="inquiryForm" style="height:2500px;"></div>

<br />
