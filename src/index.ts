const axios = require('axios')
var FormData = require('form-data');

export class DetectedObject {
    public Class = ''
    public x1 = 0;
    public x2 = 0;
    public y1 = 0;
    public y2 = 0;
    public segment = ''
    public confidence = 0;
    public type = ''
    public text = '';
    public id = '';
}

export class DocumentResponse {
    status: string;
    id: string
    api_version: string;
    help: string;

    constructor(request: any) {
        this.status = request.status;
        this.id = request.id;
        this.api_version = request.api_version
        this.help = request.help;
    }
}


export class DocumentClient {

    public async GetCompleted(id: string) {
        var config = {
            method: 'get',
            url: 'https://d8n.host/api/completed?id='+id,
            headers: {
                'API-KEY': 'YOUR-API-KEY'
            }
        };

        let response = await axios(config)
        if (response.status.toString() === "200") {
            let output: DetectedObject[] = []
            response.data.forEach((element: any) => {
                let next: DetectedObject = {
                    Class: element['_class'],
                    x1: element['x1'],
                    x2: element['x2'],
                    y1: element['y1'],
                    y2: element['y2'],
                    segment: element['segment'],
                    type: element['type'],
                    id: '',
                    confidence: element['confidence'],
                    text: element['text']
                }
                output.push(next)
            });
            return output;
        }
        else {
            throw new Error("Request failed " + response.body)
        }
    }

    public async Analysis(path: string) {
        var fs = require('fs');
        var data = new FormData();
        data.append('file', fs.createReadStream('./test.jpeg'));

        var config = {
            method: 'post',
            url: 'https://d8n.host/api/analysis',
            headers: {
                'API-Key': 'YOUR-API-KEY',
                ...data.getHeaders()
            },
            data: data
        };

        let response = await axios(config)

        if (response.status.toString() === "200") {
            return new DocumentResponse(response.data);
        }
        else {
            throw new Error("Request failed " + response.body)
        }

    }


    public async GetStatus(id: string) {
        var data = new FormData();

        var config = {
            method: 'get',
            url: 'https://d8n.host/api/get_status?id=' + id,
            headers: {
                'API-KEY': 'YOUR-API-KEY',
                ...data.getHeaders()
            },
            data: data
        };

        let response = await axios(config)

        if (response.status.toString() === "200") {
            return new DocumentResponse(response.data);
        }
        else {
            throw new Error("Request failed " + response.body)
        }
    }
}


module.exports = { DocumentClient, DocumentResponse, DetectedObject }