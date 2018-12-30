<html>
<head>
	<title>Subnet Calculator | NAT IP</title>
	<meta name="description" content="Networking tools such as NAT IP discovery and Subnet calculator, IP calculator, decimal to binary">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">


	<link rel="shortcut icon" href="images/favicon.ico">
	<link rel="icon" sizes="16x16 32x32 64x64" href="images/favicon.ico">
	<link rel="icon" type="image/png" sizes="196x196" href="images/favicon-192.png">
	<link rel="icon" type="image/png" sizes="160x160" href="images/favicon-160.png">
	<link rel="icon" type="image/png" sizes="96x96" href="images/favicon-96.png">
	<link rel="icon" type="image/png" sizes="64x64" href="images/favicon-64.png">
	<link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16.png">
	<link rel="apple-touch-icon" href="images/favicon-57.png">
	<link rel="apple-touch-icon" sizes="114x114" href="images/favicon-114.png">
	<link rel="apple-touch-icon" sizes="72x72" href="images/favicon-72.png">
	<link rel="apple-touch-icon" sizes="144x144" href="images/favicon-144.png">
	<link rel="apple-touch-icon" sizes="60x60" href="images/favicon-60.png">
	<link rel="apple-touch-icon" sizes="120x120" href="images/favicon-120.png">
	<link rel="apple-touch-icon" sizes="76x76" href="images/favicon-76.png">
	<link rel="apple-touch-icon" sizes="152x152" href="images/favicon-152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="images/favicon-180.png">
	<meta name="msapplication-TileColor" content="#FFFFFF">
	<meta name="msapplication-TileImage" content="images/favicon-144.png">
	<meta name="msapplication-config" content="/browserconfig.xml">


	<!-- will change to external css file -->
	<style>
		
		input.ip-octet, .cidr, 
		.octet-dot, .octet-slash {
			font-size: 3em;
			width: 2.5em;
			height: 1.5em;
			text-align: center;
		}	

		form.container {
			/** width: 800px; **/
		}

		.octet-dot {
			width: 40px;
		}

		h1.subnet-title {
			margin-bottom: .5em;
			margin-top: .5em;
		}
	
		div.author, div.nat {
			margin-top: 12em;
		}

		h1.remote-addr {
			background-color: #33FF3A;
			text-align: center;
		}
	
	</style>

</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-md"><h1 class="subnet-title">Subnet Calculator</h1></div>
		</div>
	</div>
	<form class="container">
	  <div class="row">
	    <div class="col-md ipv4-octet">
	      <input class="form-control ip-octet" type="text" value="192" />  
	    </div>
		<div class="col-md octet-dot">.</div>	
	    <div class="col-md ipv4-octet">
	      <input class="form-control ip-octet" type="text" value="168" />  
	    </div>
	   	<div class="col-md octet-dot">.</div>	
		<div class="col-md ipv4-octet">
	      <input class="form-control ip-octet" type="text" value="1" />  
	    </div>
		<div class="col-md octet-dot">.</div>	
	    <div class="col-md ipv4-octet">
	      <input class="form-control ip-octet" value="1" type="text" /> 
	    </div>
		<div class="col-md ipv4-octet octet-slash">/</div>	
	    <div class="col-md ipv4-octet">
	      <input class="form-control cidr" type="text" value="24"/> 
	    </div>
	  </div>
	</form>	

	<div class="container">
		<div class="row">
			<div class="col col-md-2 ip-binary-title">Binary: </div>
			<div class="col-md ip-binary"></div>
		</div>
		<div class="row">
			<div class="col col-md-2">Total IP:</div>
			<div class="col-md ip-total"></div>
		</div>
		<div class="row">
			<div class="col col-md-2">Subnet: </div>
			<div class="col-md subnet-binary"></div>
		</div>
		<div class="row">
			<div class="col col-md-2">Mask: </div>
			<div class="col-md subnet-mask"></div>
		</div>

	</div>

	
	<div class="container nat">
		<div class="row">
			<div class="col-md-3"><h1>YOUR NAT IP: </h1></div>
			<div class="col-md"><h1 class="remote-addr"><?php echo htmlentities($_SERVER['REMOTE_ADDR']); ?></h1></div>
		</div>
	</div>

	<div class="container author">
		<div class="row">
			<div class="col-md">Created by: Anthony </div>
		</div>
		<div class="row">
			<div class="col-md">Github <a href="https://github.com/tdatu/subnetCalculator" rel="Github link to source code">source</a></div>
		</div>
	</div>


	<script src="cidr.js"></script>
	<script src="app.js"></script>
</body>
</html>

