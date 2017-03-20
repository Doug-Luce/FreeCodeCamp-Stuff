function uniteUnique(arr) {
  //console.log(arguments);
  args = [...arguments];
  //console.log(args);

  var flatArray = args.reduce(flattenArr,
  []
   );
  console.log(flatArray);
  return flatArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

function flattenArr(a, b){
    return a.concat(b.filter(function(i){
        return a.indexOf(i) === -1;
    }));
  };