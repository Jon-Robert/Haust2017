<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
  <div class="row">
  	@foreach ($moviestars as $key)
    <div class="col-sm-4">
    <h3><a href="/json/{{$key['id']}}">{{$key['name']}}</a></h3>
  	<img src="{{$key['image']}}" height="150" width="150">
    </div>
    @endforeach
  </div>
</div>
</body>
</html>