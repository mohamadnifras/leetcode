function interpret(command) {
    return command.split("()").join("o").split("(al)").join("al");
}
console.log(interpret("G()(al)"));
console.log(interpret( "G()()()()(al)"));
