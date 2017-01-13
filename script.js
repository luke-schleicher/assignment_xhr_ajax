var $ = {

  ajax: function(options) {



    var xhr = new XMLHttpRequest();

    var complete = function(xhr, string) {
      
    };

    if (options.complete) {
      xhr.addEventListener( "load", complete);      
    }

    xhr.open(options.method, options.url, options.async);

    xhr.send();

  },


};

var sampleOptions = {

  url: 'https://reqres.in/api/users',
  data: { name: "Morpheus", job: "leader" },
  async: true,
  method: 'POST',
  headers: { },

  complete: function(xhr, string) {
    console.log(xhr);
    console.log(JSON.parse(xhr.responseText));
    console.log(string);
  },

  success: function() {
    console.log("success");
  },

  error: function() {
    console.log("error");
  },

};







// Create a post
// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     console.log( this.responseText );
// });
// xhr.open("POST", "http://reqres.in/api/posts", true);
// xhr.send("title=Foo&body=Bar&userId=1");

