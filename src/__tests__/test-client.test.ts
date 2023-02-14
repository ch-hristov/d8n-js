import { DetectedObject, DocumentClient } from '../index'

var client = new DocumentClient("YOUR-API-KEY");

test('Should upload image', async () => {
    let output = await client.Analysis('./test.jpg');
    expect(output.id.length > 0)
});

test("Should show started status", async () => {
    let output = await client.Analysis('./test.jpg');
    expect(output.id.length > 0)

    let status = await client.GetStatus(output.id)

    expect(status.status.includes("_"))
})

test('Should return output result', async () => {
    let output = await client.Analysis('./test.jpg');
    expect(output.id.length > 0)
    
    let p = new Promise<DetectedObject[]>(async (resolve, reject) =>{
        setTimeout(async () => {
            let completed = await client.GetCompleted(output.id);
            expect(completed.length > 0)
            resolve(completed)
        }, 10000);
    })

    let objects =  await p;

    objects.forEach(obj => {
        expect(obj.Class).toBeGreaterThanOrEqual(0)
    })
}, 25000)