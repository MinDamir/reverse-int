module.exports = function reverse (n) {
  if(n<0){
    n=n*(-1);
  }
  n=n+"";
  var i=0;
  var n1="";
  while(i<n.length){
    n1= n.charAt(i)+n1 
    i=i+1;
  }
  n1=(n1+1-1)/10;
  return n1;
}
