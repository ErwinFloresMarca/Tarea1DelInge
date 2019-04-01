function cinco(p,n){
  n=n+1;
  var suma=p;
  while(n--!=0){
    suma*=10;
  }
  suma+=p;
  suma=Math.pow(suma,2);
  var total=0;
  while(suma>0){
    total+=suma%10;
    suma=parseInt(suma/10);
  }
  return total;

}
console.log(cinco(5,1));
