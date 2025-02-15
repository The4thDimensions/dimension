function getID(i) {
    return document.getElementById(i);
  }
  function getVal(i) {
    return getID(i).value;
  }
  
  function solve() {
    var a = parseInt( getVal("a") ),
      b = parseInt( getVal("b") ),
      c = parseInt( getVal("c") );
    if ( isNaN(a) ) { a = 1; }
    if ( isNaN(b) ) { b = 0; }
    if ( isNaN(c) ) { c = 0; }
    var D = (b*b) - (4 * a * c);
    var dis = getID("DIS"),
      nos = getID("NOS"),
      s1  = getID("S1"),
      s2  = getID("S2");
    nos.style.display = "none";
    s1.innerHTML = "";
    s2.innerHTML = "";
    dis.innerHTML = 'Discriminant = <span id="D"></span>';
    var d = getID("D");
    d.innerHTML = D.toString();
    if (D < 0) {
      nos.style.display = "block";
    } 
    else if (D == 0) {
      var S = -b / (2 * a);
      s1.innerHTML = S.toString();
    } 
    else {
      var S1 = ( -b + Math.sqrt(D) ) / (2 * a),
        S2 = ( -b - Math.sqrt(D) ) / (2 * a);
      s1.innerHTML = S1.toString();
      s2.innerHTML = S2.toString();
    }
  }
  
  var submitButton = document.getElementById("submit");
  submitButton.onclick = function() {
    solve();	
  };
  const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '⛅', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();