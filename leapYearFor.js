

for (let i=1800;i<=2024;i++){

    if(i % 100==0 && i% 400==0 || i% 100 !=0 && i % 4==0){

        console.log(i);
    }
}