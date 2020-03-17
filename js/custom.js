document.addEventListener("DOMContentLoaded", function(event) {
  var links = document.links;
  for (var i = 0, linksLength = links.length; i < linksLength; i++) {
    if (links[i].hostname != window.location.hostname) {
      links[i].target = "_blank";
      links[i].setAttribute("rel", "noopener noreferrer");
      links[i].className += " external-link";
    } else {
      links[i].className += " local-link";
    }
  }
});

$(document).ready(function(){

  // show/hide website checkbox on contact page if business owner/employee
  if ($("#websiteCheckboxGroup").length){
    $("#websiteCheckboxGroup").hide();
  }

  if ($("#myBusinessCheckbox").length){
    $("#myBusinessCheckbox").click(function () {
      if ($(this).is(":checked")) {
        $("#websiteCheckboxGroup").show();
      } else {
        $("#websiteCheckboxGroup").hide();
      }
    });
  }
  // Show contact section when submitted
  if (window.location.href.indexOf("submission-received") > -1) {
    $('#submission-received').show();
  }

  bsCustomFileInput.init()

});
