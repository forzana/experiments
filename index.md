<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src = "https://raw.githubusercontent.com/thingsinjars/jQuery-Scoped-CSS-plugin/master/jquery.scoped.js" type = "text/javascript"></script>

<script>
$().ready(function() {
	$.scoped();
	$.get("https://dev-rhodes.embark.com/embeddedProspects/form/rhodes/vca", function( data ) {
		console.log(data);
		console.log("hello");
		$("#inquiryForm").html(data);
	});
});
</script>
 
<div id="inquiryForm"></div>

<br />
