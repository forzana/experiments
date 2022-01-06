<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<script>
$().ready(function() {
	$("#text").html("Text added by jQuery code.");

	$.get("https://dev-rhodes.embark.com/embeddedProspects/form/rhodes/vca", function( data ) {
		console.log(data);
		$("#inquiryForm").html(`<script>window.configVariables = {nodeEnvironment: 'DEVELOPMENT', institutionSlug: 'rhodes', prospectFormSlug: 'vca'}</script ><app-root></app-root><script src="https://dkrdeyjv4bh3n.cloudfront.net/2022-01-06_15-34/prospectsEmbedded/runtime-es2015.614ed29e167e50140bc6.js" type="module"></script><script src="https://dkrdeyjv4bh3n.cloudfront.net/2022-01-06_15-34/prospectsEmbedded/runtime-es5.614ed29e167e50140bc6.js" nomodule defer></script><script src="https://dkrdeyjv4bh3n.cloudfront.net/2022-01-06_15-34/prospectsEmbedded/polyfills-es5.668a680bd4fa674bf55d.js" nomodule defer></script><script src="https://dkrdeyjv4bh3n.cloudfront.net/2022-01-06_15-34/prospectsEmbedded/polyfills-es2015.14838ec4968dd020d2ca.js" type="module"></script><script src="https://dkrdeyjv4bh3n.cloudfront.net/2022-01-06_15-34/prospectsEmbedded/main-es2015.6b29a51f061f81e6901b.js" type="module"></script><script src="https://dkrdeyjv4bh3n.cloudfront.net/2022-01-06_15-34/prospectsEmbedded/main-es5.6b29a51f061f81e6901b.js" nomodule defer></script>`);
	});
});
</script>
 
<div id="text"></div>
<div id="inquiryForm"></div>
