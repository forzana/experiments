<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<script>
$().ready(function() {
	$("#text").html("Text added by jQuery code.");

	$.get("https://dev-rhodes.embark.com/embeddedProspects/form/marshall/registration2022", function( data ) {
		console.log(data);
		$("#inquiryForm").html(data);
	});
});
</script>
 
<div id="text"></div>
<div id="inquiryForm"></div>

<app-root></app-root><script src = "https://dkrdeyjv4bh3n.cloudfront.net/2022-01-05_17-11/prospectsEmbedded/runtime-es2015.550e030edc99bd1ce437.js" type = "module" ></script><script src="https://dkrdeyjv4bh3n.cloudfront.net/2022-01-05_17-11/prospectsEmbedded/runtime-es5.550e030edc99bd1ce437.js" nomodule defer></script><script src="https://dkrdeyjv4bh3n.cloudfront.net/2022-01-05_17-11/prospectsEmbedded/polyfills-es5.668a680bd4fa674bf55d.js" nomodule defer></script><script src="https://dkrdeyjv4bh3n.cloudfront.net/2022-01-05_17-11/prospectsEmbedded/polyfills-es2015.14838ec4968dd020d2ca.js" type="module"></script><script src="https://dkrdeyjv4bh3n.cloudfront.net/2022-01-05_17-11/prospectsEmbedded/main-es2015.46db51d2c64161f360cd.js" type="module"></script><script src="https://dkrdeyjv4bh3n.cloudfront.net/2022-01-05_17-11/prospectsEmbedded/main-es5.46db51d2c64161f360cd.js" nomodule defer></script>
