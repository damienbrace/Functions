fetch("https://api.agify.io/?name=john")
.then(a => a.json())
.then(b => console.log(b));


