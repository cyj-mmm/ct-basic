const{
Map,
List,
Seq,

}=require('immutable')


function log(imm){
    console.log(imm.toJS());
}

/* const map=Map({x:0,y:1,z:2})


let result=map.flip().map(v=>v.toUpperCase())

console.log(result.join(',')); */

/* const map1 = Map({
    x: 0,
    y: 1,
    z: {
      o: 230,
      w: 10
    }
  })
  
  const map2 = Map({
    a: 100,
    y: 200,
    z: {
      w: 300
    }
  })
  
  const obj = {
    y: 300
  }
  
  const map3 = map1.mergeDeep(map2, obj)
  console.log(map3) */

 /*  const list1=List(['a','b','c'])
  const list2=List(['c','d'])
  const list3=list1.concat(list2)
  log(list3) */
/* 
  const obj={x:0,y:1,z:2}
  const seq=Seq(obj).map((value,key)=>{
     console.log(value);
  })
  console.log(seq.toObject());
 */
/* const obj = {
    x: 0,
    y: [
      {
        z: {
          a: 100
        }
      },
      ['100', '200', {
        w: 3000
      }]
    ]
  }
 console.log(obj) */


 /* let list=[1,2,3,4,5,6,7,8]
 let result=list.filter(v=>v%2===0).map(v=>v*v)
 let result1=Seq(list).filter(v=>v%2===0).map(v=>v*v)
 console.log(result);
 console.log(result1.toJS()); */


 