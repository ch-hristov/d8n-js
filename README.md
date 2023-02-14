# d8n-js

## How to start:

Install package: 
```npm i d8n-nodejs```

```js

import { DetectedObject, DocumentClient } from 'd8n-js'

// Initialize client
let client = new DocumentClient("YOUR-API-KEY");

// Analyse file
let output = await client.Analysis('./test.jpg');

// Check status
let status = await client.GetStatus(output.id)

// Get identified objects
// Returns objects in the form:

// export class DetectedObject {
//    public Class = ''
//    public x1 = 0;
//    public x2 = 0;
//    public y1 = 0;
//    public y2 = 0;
//    public segment = ''
//    public confidence = 0;
//    public type = ''
//    public text = '';
//    public id = '';
//}

let completed = await client.GetCompleted(output.id);

```
