# d8n-js

## How to start:

// Initialize client
let client = new DocumentClient("YOUR-API-KEY");


// Analyse file
let output = await client.Analysis('./test.jpg');


// Check status
let status = await client.GetStatus(output.id)

// Get identified objects
let completed = await client.GetCompleted(output.id);
