const commit = [["https://github.com/leanprover-community/mathlib/blob/master/src/", "https://github.com/leanprover-community/mathlib/blob/67f92b6f60865717e0811128b77d49ab4c07f7f1/src/"], ["https://github.com/leanprover-community/mathlib/blob/master/archive/", "https://github.com/leanprover-community/mathlib/blob/67f92b6f60865717e0811128b77d49ab4c07f7f1/archive/"], ["https://github.com/leanprover-community/mathlib/blob/master/counterexamples/", "https://github.com/leanprover-community/mathlib/blob/67f92b6f60865717e0811128b77d49ab4c07f7f1/counterexamples/"]];
function redirectTo(tgt) {
  let loc = tgt;
  for (const [prefix, replacement] of commit) {
    if (tgt.startsWith(prefix)) {
      loc = tgt.replace(prefix, replacement);
      break;
    }
  }
  window.location.replace(loc);
}
