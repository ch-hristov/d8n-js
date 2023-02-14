import { DocumentClient } from '../index'

var client = new DocumentClient();

test('Should upload image', async () => {
    let output = await client.Analysis('/Users/christosavovchristov/Downloads/test.jpeg');
    expect(output.id.length > 0)
});

test("Should show started status", async() =>{
    let output = await client.Analysis('/Users/christosavovchristov/Downloads/test.jpeg');
    expect(output.id.length > 0)

    let status = await client.GetStatus(output.id)

    expect(status.status.includes("_"))
})


test('Should return output result', async() => {
    let output = await client.Analysis('/Users/christosavovchristov/Downloads/test.jpeg');
    expect(output.id.length > 0)

    await new Promise((r) => setTimeout(r, 2000));

    await new Promise(async () =>{
        let completed = await client.GetCompleted(output.id);
        expect(completed.length > 0)
        return true;
    })

})