function createCookie(c,d,b,a){a=void 0===a?{}:a;if(b){var e=new Date;e.setTime(e.getTime()+864E5*b);b="; expires="+e.toGMTString()}else b="";c=c+"="+encodeURIComponent(d)+b+"; path=/";for(var f in a)c+="; "+f,d=a[f],!0!==d&&(c+="="+d);document.cookie=c}function readCookie(c){c+="=";for(var d=document.cookie.split(";"),b=0;b<d.length;b++){for(var a=d[b];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(c))return a.substring(c.length,a.length)}return null}
function eraseCookie(c){createCookie(c,"",-1)}
