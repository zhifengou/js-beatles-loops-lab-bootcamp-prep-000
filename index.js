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
    i++
  }
  return str
}
function iLoveTheBeatles(num){
  var arr=[]
  var i=0
  do{
    arr.push("I love the Beatles!")
    i++
  }while(i<15)
  return arr
}