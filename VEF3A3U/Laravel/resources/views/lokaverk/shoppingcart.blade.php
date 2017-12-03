@extends('lokaverk.skeleton')

@section('title')
Langbest shopping cart
@endsection

@section('content')
	 <div class="row">
	 
		 	@foreach($cart as $key ) 
			  <div class="col-sm-6 col-md-4" style="height: 350px;">
			    <div class="thumbnail">
			      <img src="https://cdn.vox-cdn.com/thumbor/3lta23tKnKj-RqlFER_YSKl3VY4=/0x87:500x462/1200x900/filters:focal(0x87:500x462)/cdn.vox-cdn.com/uploads/chorus_image/image/53382189/1512822_793690010647943_107488435_n.0.0.jpg" alt="..."  class="img-responsive">
			      <div class="caption">
			        <h3>{{$key['name']}}</h3>
			        <p class="description">{{$key['info']}}</p>
			        <div class="clearfix">
			        	<div class="pull-left price">{{$key['price']}}</div>
			        	<a href="shopping/{{$key['id']}}" class="btn btn-success pull-right" role="button">Remove from Cart</a>
			        </div>
			      </div>
			    </div>
			  </div> 
			@endforeach 

	</div>
@endsection