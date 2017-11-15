$(document).ready(function()
{

  $("#pills-tab1 .nav-link").click(function(e)
  {
    $("#pills-tab1 .nav-link").each(function()
    {
      if(this.className.includes("active")){
        var string = this.className.substring(0, this.className.length-7);
        this.className = string;
        console.log(this.className);
      }
    });


    e.target.className += " active";

  });
});
