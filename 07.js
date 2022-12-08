const { sortAsc, sum } = require('./helpers.js');

class Directory {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  find(name) {
    return this.items.find(x => x.name === name);
  }

  add(item) {
    item.parent = this;
    this.items.push(item);
  }

  size() {
    return sum(this.items.map(x => x.size()));
  }
}

class File {
  constructor(name, size) {
    this.name = name;
    this.filesize = size;
  }

  size() {
    return this.filesize;
  }
}

module.exports = (input) => {

  const homeDirectory = new Directory('/');
  let currentDirectory = homeDirectory;
  const diskSize = 70000000;
  const updateSize = 30000000;
  let readList = false;
  const directories = [];

  const goUp = () => {
    directories.push(currentDirectory.size());
    currentDirectory = currentDirectory.parent;
  }

  input.shift(); // we don't need the first "$ cd /", it's assumed
  input.forEach(line => {
    if (line.startsWith('$')) {
      readList = false;
      const command = line.substr(2);
      const [fn, arg] = command.split(' ');
      if (fn === 'cd') {
        if (arg === '..') {
          goUp();
        } else {
          currentDirectory = currentDirectory.find(arg);
        }
      } else if (fn === 'ls') {
        // do nothing?
        readList = true;
      }
    } else {
      if (!readList) console.log('hmm this is weird...');
      const [a, b] = line.split(' ');
      if (a === 'dir') {
        currentDirectory.add(new Directory(b));
      } else {
        currentDirectory.add(new File(b, parseInt(a)));
      }
    }
  });

  // after we've gone through all, lets just back up to the top for simplicity
  while (currentDirectory.name != '/') {
    goUp();
  }
  // and now that we're at the top add this one even though that is pointless
  // i'm just doing it for completeness because i'm stubborn
  directories.push(currentDirectory.size());

  const directoriesLessThan100000 = directories.filter(size => size <= 100000);
  
  const totalUsedDiskSpace = homeDirectory.size();
  const minimumSpaceToRecover = updateSize - (diskSize - totalUsedDiskSpace);  
  const directoryToDelete = directories.sort(sortAsc).find(size => size >= minimumSpaceToRecover);

  const part1 = sum(directoriesLessThan100000);
  const part2 = directoryToDelete;

  return {
    part1,
    part2,
  };
}