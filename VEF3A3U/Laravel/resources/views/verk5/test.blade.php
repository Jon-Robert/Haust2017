<!DOCTYPE html>
<html>
<head>
  <title></title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css">
<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
<script src="semantic/dist/semantic.min.js"></script>
</head>
<body>
<div>
@foreach ($moviestars as $key)
  <div class="item">
    <div class="ui small image">
      <img src="{{$key['image']}}">
    </div>
    <div class="content">
      <div class="header">{{$key['name']}}</div>
      <div class="meta">
        <span class="price">$1600</span>
        <span class="stay">6 Weeks</span>
      </div>
      <div class="description">
        <p></p>
      </div>
    </div>
  </div>
  @endforeach
</div>
</body>
</html>














<