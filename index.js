function getAverage(arr){
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    total += arr[i];
  }
  const average =  Math.floor(total / arr.length);
  return average;
}