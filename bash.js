const prompt = data => {
  console.log(data);
  process.stdout.write('> ');
}

prompt("Welcome to Node Shell");

process.stdin.on("data", data => {
  const entry = data.toString().trim();
  const [command, arg] = entry.split(' ');
switch (command) {
  case "pwd" :
    prompt(require("./pwd")(prompt));
  break;

  case "ls":
    prompt(require("./ls")(prompt));

  break;

  case "cat":
    require("./cat")(arg, prompt);

    break;

    case "curl":
      require("./curl")(arg, prompt);
    break;

  default:
    prompt("not found");


  }

});



