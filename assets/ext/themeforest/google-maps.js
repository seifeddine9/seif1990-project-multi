$(function(){

	$("#gmap-1").gmap3({
	  marker:{
	    latLng: [36.7077776,10.2057168],
	    options:{
	      draggable:true
	    },
	    events:{
	      dragend: function(marker){
	        $(this).gmap3({
	          getaddress:{
	            latLng:marker.getPosition(),
	            callback:function(results){
	              var map = $(this).gmap3("get"),
	                infowindow = $(this).gmap3({get:"infowindow"}),
	                content = results && results[1] ? results && results[1].formatted_address : "no address";
	              if (infowindow){
	                infowindow.open(map, marker);
	                infowindow.setContent(content);
	              } else {
	                $(this).gmap3({
	                  infowindow:{
	                    anchor:marker, 
	                    options:{content: content}
	                  }
	                });
	              }
	            }
	          }
	        });
	      }
	    }
	  },
	  map:{
	    options:{
	      zoom: 13
	    }
	  }
	});

	
	

	

	
});