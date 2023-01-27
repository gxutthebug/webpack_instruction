
const n1=10

const n2=20

export const n3=30 /*按需导出，export后做变量声明*/

export function say(){}

const n4=40

const n5=50

function show(){
  return 2
}



export default{  //每个模块中只允许使用一次默认导出
  n1,
  show   
}
