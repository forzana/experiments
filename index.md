<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<script>
$().ready(function() {

	$.get("https://dev-rhodes.embark.com/embeddedProspects/form/rhodes/vca", function( data ) {
		console.log(data);
		console.log("hello");
		var alternateHtml = "<script>window.configVariables = {nodeEnvironment: 'DEVELOPMENT', institutionSlug: 'rhodes', prospectFormSlug: 'vca', envPrefix: 'dev-'}</script ><app-root></app-root><script src='https://dkrdeyjv4bh3n.cloudfront.net/2022-01-07_10-37/prospectsEmbedded/runtime-es2015.9b0244db2fbe9d19f2ac.js' type='module'></script><script src='https://dkrdeyjv4bh3n.cloudfront.net/2022-01-07_10-37/prospectsEmbedded/runtime-es5.9b0244db2fbe9d19f2ac.js' nomodule defer></script><script src='https://dkrdeyjv4bh3n.cloudfront.net/2022-01-07_10-37/prospectsEmbedded/polyfills-es5.668a680bd4fa674bf55d.js' nomodule defer></script><script src='https://dkrdeyjv4bh3n.cloudfront.net/2022-01-07_10-37/prospectsEmbedded/polyfills-es2015.14838ec4968dd020d2ca.js' type='module'></script><script src='https://dkrdeyjv4bh3n.cloudfront.net/2022-01-07_10-37/prospectsEmbedded/main-es2015.20e6a26012cc1efdbc44.js' type='module'></script><script src='https://dkrdeyjv4bh3n.cloudfront.net/2022-01-07_10-37/prospectsEmbedded/main-es5.20e6a26012cc1efdbc44.js' nomodule defer></script></body>";
		$("#inquiryForm").html(alternateHtml);
	});
});
</script>
 
<div id="inquiryForm"></div>

<br />
