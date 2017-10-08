@extends('verk6/index')

@section('verk6/tonleikar')
<div class="jumbotron">
  <div class="container text-center">
    <h1>Tónleikar</h1>      
    <p>Retró, Classic & Hip-Hop</p>
  </div>
</div>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">Logo</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">Verkefni 6</a></li>
        <li><a href="#">Deals</a></li>
        <li><a href="#">Stores</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <!--
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Your Account</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
      </ul>
    -->
    </div>
  </div>
</nav>

<div class="container">    
  <div class="row">
    @foreach($json as $key)


    <div class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading">{{$key['eventDateName']}}</div>
        <div class="panel-body"><img src="{{$key['imageSource']}}" class="img-responsive" style="width:100%" alt="Image"></div>
        <div class="panel-footer">{{$key['eventHallName']}}</div>
      </div>
    </div>

    @endforeach

  </div>
</div><br>


<footer class="container-fluid text-center">
  <p>Online Store Copyright</p>  
  <form class="form-inline">Get deals:
    <input type="email" class="form-control" size="50" placeholder="Email Address">
    <button type="button" class="btn btn-danger">Sign Up</button>
  </form>
</footer>


@stop