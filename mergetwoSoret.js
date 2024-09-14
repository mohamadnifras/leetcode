function mergeTwoLists(list1,list2){
    let newlist =  list1.concat(list2)
    newlist.sort((a,b)=>a-b)
return newlist
  
}
let mergeSort=mergeTwoLists([1,2,4],[1,3,4])
console.log(mergeSort);
 


 

