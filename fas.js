

let person={name:'Hedayet',age:23}
let wset=new WeakSet()
wset.add(person)

wset.delete(person)
let map=new Map([['name','Hedayet'],['age',23]])
let emap=new Map()
emap.set('name','shamim')
emap.set('age',22)
map.set('age',17)

document.write(map.has('nam'))
for(let e of map){
    document.write('<br>'+e+'<br>')
}
let arr=[3,4,5,6]
function myit(){
    let val=1;
    return{
        next:function(){
            val+=1;
            return {value:val,done:false};
        }
    }
}
let n=myit()
n.next()
n.next()

document.write(n.next().value)
