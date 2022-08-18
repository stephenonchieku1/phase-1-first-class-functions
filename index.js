 function receivesAFunction(spy){
   spy();
 }
  function returnsANamedFunction(){
    return function foo(){}
  }
  function returnsAnAnonymousFunction(){
    return function(){};
  }