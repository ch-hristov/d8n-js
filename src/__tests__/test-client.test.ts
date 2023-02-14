import { DocumentClient } from '../index'

var client = new DocumentClient("YOUR-API-KEY");

test('Should upload image', async () => {
    let output = await client.Analysis('./test.jpg');
    expect(output.id.length > 0)
});

// test("Should show started status", async () => {
//     let output = await client.Analysis('/Users/christosavovchristov/Downloads/test.jpeg');
//     expect(output.id.length > 0)

//     let status = await client.GetStatus(output.id)

//     expect(status.status.includes("_"))
// })


// test('Should return output result', async () => {
//     let output = await client.Analysis('/Users/christosavovchristov/Downloads/test.jpeg');
//     expect(output.id.length > 0)
//     let completed = await client.GetCompleted(output.id);

//     setTimeout(() => {
//         expect(completed.length > 0)
//         console.log(completed[0])
//     }, 3000);

// }, 10000)