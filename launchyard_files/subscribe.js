function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toGMTString();
    }
    document.cookie = name+"="+value+expires+"; path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
$(document).ready(function() {
  subscribeUrl = "http://refer.launchyard.com/manage";
  if (location.search) {
    code = location.search.split("code=")[1].split("&")[0]
    setCookie('code', code)
  }

    // subscribeUrl = "";
    $("[id*=email-]").keypress(function(e){
        var keyCode = (e.keyCode ? e.keyCode : e.which);
        if (keyCode === 13) {
            $("[for*=" + this.id + "]").click();
            $("#submit-email").click();
        }
    });
    $(".get-in-touch").click(function (e) {
        e.preventDefault();
        for_elem = $(this).attr("for");
        var email = $.trim($("#" + for_elem).val());
        var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
            $("#error-" + for_elem).show();
            $("#" + for_elem).focus();
            return false;
        }
        // setCookie('subscriber_email', email, 1);
      code = getCookie("code")
      data = {'email': email}
      
      if (code) {
        data['code'] = code
      }
      $.ajax({
            url: subscribeUrl,
            dataType: 'jsonp',
            crossDomain: true,
            jsonpCallback: 'launchyard',
            data: data,
            success: function(data) {
                if (data.success == true) {
                    $("#error-" + for_elem).attr("class", "success");
                    $("#error-" + for_elem).text("Thanks for signing up. We will get back to you shortly.");
                    $("#error-" + for_elem).show();
                    $("#" + for_elem).val("");
                } else {
                    $("#error-" + for_elem).show();
                    $("#" + for_elem).focus();
                }
            }
        });
    });
});
