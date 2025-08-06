const user = {
    name:"ashu",
    age:23,
    welcomeMessage: function(){
        return console.log(`${this.name}, welcome to the world of javascript`)
    }

}
user.welcomeMessage()
console.log(user.name);

user.name="ashutosh"
console.log(user.name);

