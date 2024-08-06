

//1. Find the median of two sorted arrays.
function medean (arr1,arr2){
    let sum=(arr1.concat(arr2));
    let sum1=sum.sort();
    let n=sum1.length;
    let i,j,result
    
        if(n%2!==0){
           i=n/2;
            j=Math.ceil(i);
             result=(sum1[j]);
        }
     
      else
        {
        i=n/2;
       j=i+1;
        result=(sum1[i]+sum1[j]/2)
        }
    console.log(result);
        
    }
    medean([3,6,8,9],[1,2,3,4])