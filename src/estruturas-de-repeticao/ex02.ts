/*Mostrar apenas os pares.*/

async function main(){
  let i: number;
  for(i = 1; i <= 100; i++){
    if(i % 2 == 0){
      console.log(i);
    }
  }
}
main();