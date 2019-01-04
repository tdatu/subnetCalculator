var ip = document.querySelectorAll(".ip-octet");
var cidr = document.querySelector(".cidr");

//Instantiate the app
var app = new Cidr(parseInt(cidr.value));

var octets = [];
for(var i = 0; i < ip.length; i++){
	octets.push(parseInt(ip[i].value));
}
app.setOctets(octets);
updateTotalIPView();
updateBinarySubnetView();
updateBinaryView();
updateSubnetMaskView();

function updateTotalIPView(){
	var el = document.querySelector(".ip-total");
	var totalIP = app.totalCount;
	el.innerHTML = totalIP;
}

function updateBinarySubnetView(){
	var el = document.querySelector(".subnet-binary");
	el.innerHTML = app.subnet;
}

function updateBinaryView(){
	var counter = 0; // marker not to pass 4
	var ipBinary = app.getBinary();
	var ipBinaryEl = document.querySelector(".ip-binary");
	ipBinaryEl.innerHTML = '';
	ipBinary.forEach(function(ipOct){
		counter += 1;
		if(counter < 4){
			ipBinaryEl.insertAdjacentText("beforeend", ipOct + " . ");
		}else{
			ipBinaryEl.insertAdjacentText("beforeend", ipOct);
		}
	});
}

function updateSubnetMaskView(){
	var el = document.querySelector(".subnet-mask");
	app.setSubnetMask();
	el.innerHTML = app.subnetmask;
}

//Register the event listeners when updating IPv4
ip.forEach(function(el){
	el.addEventListener("onkeyup", function(){
		var octets = [];
		for(var i = 0; i < ip.length; i++){
			octets.push(parseInt(ip[i].value));
		}
		app.setOctets(octets);	
		updateBinaryView();
	});
});

//Register event listener when updating CIDR
cidr.addEventListener("onkeyup", function(){
	app.setCidr(parseInt(this.value));
	updateTotalIPView();
	updateBinarySubnetView();
	updateSubnetMaskView();
});
