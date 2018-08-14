// add solution here
function theBeatlesPlay(musicians,instruments){
  var arr=[]
  for(var i=0;i<musicians.length;i++){
    arr.push(musicians[i]+" plays "+instruments[i])
  }
  return arr
}
function johnLennonFacts(arr){
  var str=[]
  var i=0
  while(i<arr.length){
    str.push(arr[i]+"!!!")
  }
  return str
}