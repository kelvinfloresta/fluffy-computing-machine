const { default: axios } = require("axios");
const server = require("./server");

it("should persist", async () => {
  await server.start();

  const uri = "http://localhost:3000/transactions";
  const id = await axios.post(uri, {
    amount: 1000,
    description: "description",
  });

  const { data } = await axios.get(uri);
  expect(data.length).toBe(1);
  const transaction = data[0];
  expect(transaction.id).toBe(id);
  expect(transaction.amount).toBe(1000);
  expect(transaction.description).toBe("description");
});
