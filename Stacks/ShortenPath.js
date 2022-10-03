// Time Complextiy: O(n) - where n is the length of the pathname
// Space Complexity: O(n)

function shortenPath(path) {
  const isAbsolute = path[0] === "/";
  const splitPath = path.split("/");
  const upDirectory = "..";
  const sameDirectory = ".";
  const result = [];

  for (let idx = 0; idx < splitPath.length; idx++) {
    const command = splitPath[idx];

    switch (command) {
      case upDirectory:
        if (
          !isAbsolute &&
          (result.length === 0 || result[result.length - 1] === upDirectory)
        ) {
          result.push(upDirectory);
        } else {
          result.pop();
        }
        break;
      case sameDirectory:
      case "":
        break;
      default:
        result.push(command);
        break;
    }
  }

  return (isAbsolute ? "/" : "") + result.join("/");
}
