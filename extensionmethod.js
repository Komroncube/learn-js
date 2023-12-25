const arr = [ 1, 2, 3, 4, 5, 6, 7,  8,  9, 11, 111, 1111, 45, 32, 23, 43, 78, 90, 99, 89]
Array.prototype.customSort = function(start=0, end=this.length, asc=true)
{
  let n = this.length;
        
  for(let i = start; i < end; i++) {
      let index = i;
      for(let j = i+1; j < end; j++){
        if(asc)
        {
          if(this[j] < this[index]) {
            index=j; 
          }
        }
        else{
          if(this[j] > this[index]) {
            index=j; 
          }
        } 
      }
      if (index != i) {
          let tmp = this[i]; 
          this[i] = this[index];
          this[index] = tmp;      
      }
  }
  return this;
}
arr.customSort(3, 8)
console.log(arr);
