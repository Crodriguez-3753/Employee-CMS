const Manager = require("../lib/Manager");

test("Can instantiate Manager instance", ()=> {
    const e = new Manager();
    expect(e instanceof Manager).toBe(true)
});