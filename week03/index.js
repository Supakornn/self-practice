function once(fn) {
    let called = false;
    let result;
    return function () {
        if (!called) {
            called = true;
            result = fn();
        }
        return result;
    };
}

const fetchApi = () => {
    console.log("Fetching api");
    return {
        status: "success",
        data: {
            id: Math.random()
        }
    };
};

const getData = once(fetchApi);

const data1 = getData();
const data2 = getData();

console.log(data1);
console.log(data2);
console.log(data1 === data2); // true
