class GrandParent{

    m0(){
        console.log("m0 method");
    }
}


class Parent extends GrandParent{

    m1(){
        console.log("inside parent m1 method");
    }
}

class Child extends Parent{

    m2(){
        console.log("inside child method m2");
    }
}

const ch=new Child();

ch.m2();

ch.m1();

ch.m0();

