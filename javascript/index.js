var app = new Vue({
  el: '#app',
  data: {
    display: "",
    register: 0,
    operation: ""
  },

  methods: {
    number: function(number){
      if(this.display.length < 8){
        this.display += number;
      }
      console.log(this.display.length);
    },

    operate: function(operation) {
      this.register += parseInt(this.display, 10);
      this.display = "";
      this.operation = operation;
    },

    equals: function() {
      switch(this.operation) {
        case "+":
          this.display = (this.register + parseInt(this.display, 10)).toString(10);
        break;
        case "-":
          this.display = (this.register - parseInt(this.display, 10)).toString(10);
        break;
        case "*":
          this.display = (this.register * parseInt(this.display, 10)).toString(10);
        break;        
        case "/":
          this.display = (this.register / parseInt(this.display, 10)).toString(10);
        break;
        default:
          alert("default case reached");
        break;
      }
      this.register = 0;
      this.operation = "";
    }

  }
})

