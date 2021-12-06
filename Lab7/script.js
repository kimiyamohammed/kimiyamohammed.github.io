//Question: 1
/* The previous code lead to error because 'this' keyword refers to the object that calls the function/method. 
And when askPassword is called in the code, it is called like this 'Window.askPassword()', which means now the method
calling object is Window and 'this' will start to refer Window. And Window object doesn't have a property called name.
So it will become undefined.*/


function askPassword(ok,fail){
    let password = prompt("password?",'');
    if(password == "rockstar") ok();
    else fail();

}
let user ={
    name:'john',
    loginOk(){
        alert(`${this.name} logged In`);
    },
    loginFail(){
        alert(`${this.name} Failed to log In`);
    }
};
askPassword(user.loginOk.bind(this),user.loginFail.bind(this));



//Question: 2
let group ={
    title: "our group",
    students:["John", "Pete", "Alice"],
    showList:function(){
        this.students.forEach(function(student){console.log(this.title +': '+ student)}.bind(this));
    }
};
group.showList();

let group ={
    title: "our group",
    students:["John", "Pete", "Alice"],
    showList:function(){
        this.students.forEach((student) => function(student){console.log(this.title +': '+ student)}.call(this,student));
    }
};
group.showList();

let group ={
    title: "our group",
    students:["John", "Pete", "Alice"],
    showList:function(){
        this.students.forEach(student => function(student){console.log(this.title +': '+ student)}.apply(this,[student]));
    }
};
group.showList();

let group ={
    title: "our group",
    students:["John", "Pete", "Alice"],
    showList:function(){
        const self = this;
        this.students.forEach(function(student){console.log(self.title +': '+ student)});
    }
};
group.showList();


