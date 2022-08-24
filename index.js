//const cb = () => "Good morning,";
function greeting(str) {
  console.log("Good morning,", str);
}

greeting("John");

function greetingUsers(arr, cb) {
  arr.forEach((item) => {
    cb(item);
  });
}

greetingUsers(["John", "Peter", "Mark"], greeting);
