const browsers = ["Chrome", "Firefox", "Edge"];

const available = browsers.includes("Chrome");
console.log(available); // true

const results = ["PASS", "FAIL", "PASS", "SKIP", "PASS"];

const passed = results.filter(result => result === "PASS");
console.log(passed); // ["PASS", "PASS", "PASS"]

const employees = ["alice", "bob", "charlie"];

const upperNames = employees.map(name => name.toUpperCase());
console.log(upperNames); // ["ALICE", "BOB", "CHARLIE"]

const results2 = ["PASS", "PASS", "FAIL", "PASS"];

const hasFailure = results2.some(result => result === "FAIL");
console.log(hasFailure); // true

const results3 = ["PASS", "PASS", "PASS"];

const allPassed = results3.every(result => result === "PASS");
console.log(allPassed); // true

const marks = [70, 80, 90, 60];

const total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total); // 300