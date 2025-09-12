const arg = process.argv[2]; // first actual argument

if (arg === undefined) {
  console.log("No argument");
} else {
  console.log(arg);
}