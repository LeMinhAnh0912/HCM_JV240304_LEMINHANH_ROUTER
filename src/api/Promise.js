async function load() {
  let a = 11;
  let doubleA = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a > 10) {
        resolve({
          message: "Lỗi",
          value: null,
        });
      } else {
        let result = a + a;
        resolve({
          message: "Thành công",
          value: result,
        });
      }
    }, 2000);
  })
    .then((res) => res)
    .catch((err) => err);
  doubleA.value ? console.log(doubleA.value) : console.log(doubleA.message);
}
await load();
console.log("Đã chạy hết ");
