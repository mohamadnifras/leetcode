var expect = function(val) {
    return {
        toBe:function(otherVal){
            if (val === otherVal) return true;
            else throw new Error("Not Equal");
        },
        notToBe:function(otherVal){
            if(val !== otherVal) return true
            else throw new Error("Equal");
        }
    }
};

try {
    console.log({ value: expect(5).toBe(5) }); // { value: true }
} catch (e) {
    console.log({ error: e.message });
}

try {
    console.log({ value: expect(5).toBe(null) }); // Error: "Not Equal"
} catch (e) {
    console.log({ error: e.message });
}

try {
    console.log({ value: expect(5).notToBe(null) }); // { value: true }
} catch (e) {
    console.log({ error: e.message });
}
