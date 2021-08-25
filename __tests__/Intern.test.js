const Intern = require("../lib/Employee");

test("Can instantiate Employee instance", ()=> {
    const e = new Intern();
    expect(e instanceof Intern).toBe(true)
});