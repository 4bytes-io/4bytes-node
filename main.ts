import axios from 'axios';
export default class fourBytes{
    
    private request: any;
    //constructor
    constructor(){
        this.request = axios.create({
            baseURL: 'https://directory.4bytes.io/api/v1/',
            timeout: 10000,
        });
    }
    //get the data from signatures endpoint
    getBySignature(signature){
        return this.request.get('signatures/' + signature);
    }
   
}