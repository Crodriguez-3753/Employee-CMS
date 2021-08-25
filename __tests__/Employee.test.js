const Employee = require("../lib/Employee");

Test("Can instantiate Employee instance", ()=> {
    const e = new Employee();
    expect( e instanceof Employee).toBe(true)
});