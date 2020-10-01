function uniqueFilter(value, index, self) {
  return self.indexOf(value) === index;
}

function unique(a) {
  return a.filter(uniqueFilter);
}

function permutations(v: string, opts?: { unique?: boolean }) {
  if (!v) return [];
  opts = opts || {};

  function p(prefix: string, s: string, acc?: Array<string>) {
    acc = acc || [];
    var n = s.length;
    if (n === 0) return acc.push(prefix);
    for (var i = 0; i < n; i++) {
      p(prefix + s.charAt(i), s.substring(0, i) + s.substring(i + 1), acc);
    }
    return opts.unique ? unique(acc) : acc;
  }

  return p("", v);
}

const checkContainRepeatedChars = (word: string): boolean => {
  const chars = word.split("");

  return chars.some((char, index) => {
    const nextChar = chars[index + 1];

    if (!nextChar) {
      return false;
    }

    return char === nextChar;
  });
};

const removeRepeatedChars = (listOfStrings: Array<string>) => {
  return listOfStrings.filter((s) => {
    return !checkContainRepeatedChars(s);
  });
};

export const permAlone = (str) => {
  const permutationResults = permutations(str);
  const removedStrings = removeRepeatedChars(permutationResults);
  return removedStrings.length;
};
