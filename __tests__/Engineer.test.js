const Engineer = require("../lib/Engineer");

test("getRole() should return \"Engineer\"", () =>{
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "GithubUser");
    expect(e.getRole()).toBe(testValue);
});
