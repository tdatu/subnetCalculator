class Cidr{
	
	constructor(cidr){
		this.count = 1;
		this.decimals = [];
		this.cidr = cidr;
		this.subnet = '';
		this.subnetmask = '';
		this.setSubnet();
	}

	setCidr(cidr){
		this.cidr = cidr;
		this.getBinary();
		this.setSubnet();
	}

	setOctets(octets){
		this.allOctets = octets;
	}

	//subnet in binary form
	setSubnet(){
		var subnet = '';
		for (var i = 1; i <= 32; i++){
			if(i <= this.cidr){
				subnet += '1';
				if(i % 8 == 0){
					subnet += ' . ';
				}
			}else if(i > this.cidr){
				subnet += '0';
				if(i % 8 == 0 && i < 25){
					subnet += ' . ';
				}
			}
		}
		this.subnet = subnet;
	}

	setSubnetMask(){
		var bits = [128, 64, 32, 16, 8, 4, 2, 1];
		this.subnetmask = '';
		var repeater = 0;
		var mask = 0;

		if(app.cidr <= 8){
			repeater = app.cidr
			for(var i = 0; i < repeater; i++){
				mask += bits[i];				
			}
			this.subnetmask = mask + '.0.0.0';
		}else if(app.cidr <= 16){
			repeater = app.cidr - 8;
			for(var i = 0; i < repeater; i++){
				mask += bits[i];
			}
			this.subnetmask = '255.' + mask + '.0.0';
			
		}else if(app.cidr <= 24){
			repeater = app.cidr - 16;
			for(var i = 0; i < repeater; i++){
				mask += bits[i];
			}
			this.subnetmask += '255.255.' + mask + '.0';
		}else{
			repeater = app.cidr - 24;
			for(var i = 0; i < repeater; i++){
				mask += bits[i];
			}
			this.subnetmask = '255.255.255.' + mask;
		}

	}

	get totalCount(){
		return this.calcTotalIP();
	}

	//Need all 4 octets arguments 
	//e.g. 192.168.1.1
	//then pass 192,168,1,1	
	getBinary(){
		//set the octets
		//this.allOctets = [octet1,octet2,octet3,octet4];
		return this.calcDecimalToBinary();
	}

	calcTotalIP(){
		this.decimals = [];
		this.count = 1;
		//Store all the decimals
		var diffCidr = 32 - this.cidr;
		for(var i = 1; i <= diffCidr; i++){
			if(i == 1){
				this.decimals.push(this.count);
			}else{
				this.count = this.count + this.count;
				this.decimals.push(this.count);
			}
		}

		//Calculate the total IP
		var sumVal = 0;
		this.decimals.forEach(function(x){
			sumVal = sumVal + x;
		});

		return sumVal + 1;
	}

	calcDecimalToBinary(){
		var binaryCollection = [];
		var binaryString = '';
		var powerOf2 = [128, 64, 32, 16, 8, 4, 2, 1];
		var allOctetBinaries = [];
		var remaining = 0;
		var ipv4 = this.allOctets;

		//allOctets that form ipv4 	
		for(var i = 0; i < ipv4.length; i++){
			powerOf2.forEach(function(powerN){
				if(ipv4[i] > powerN || ipv4[i] == powerN){
					binaryString = binaryString + '1';
					ipv4[i] = ipv4[i] - powerN;
				}else{
					binaryString = binaryString + '0';
				}
			});
			//add to the collection
			binaryCollection.push(binaryString);
			//reset binaryString to empty
			binaryString = '';
		}
		return binaryCollection;
	}
	
}
