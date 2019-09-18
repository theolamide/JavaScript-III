/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When the 'this' keyword is used in the global scope. it refers to the window. (Window Binding)
* 2. When the 'this' keyword is used with a preceding dot, it refers to the word before the dot. (Implicit Binding)
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
    function Howdy (){
        console.log(this.YouAlright)
    }
    // Howdy();
    const YouAlright = 'Are you alright?'
    Howdy();
// code example for Window Binding

// Principle 2
    let Greeting={
        Morning: 'Good Morning',
        Afternoon: 'Good Afternoon',
        InvokeGreeting: function(){
            console.log(this.Afternoon);
        }
    }
        Greeting.InvokeGreeting();


        //OR
    
    const Person = {
        name: 'Dan',
        Age: 23,
        Sex: 'Male',
        Location: 'New York',
        Hobby: 'Travel',
        Loveto: function(){
            return `Hi my name is ${this.name}, I am a ${this.Age} year old ${this.Sex} living in ${this.Location} and I love to ${this.Hobby}`
        }
    }
        console.log(Person.Loveto());
// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding