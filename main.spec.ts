// test fourBytes Class
import fourBytes from './main';
import expect from 'expect';

describe('fourBytes Class', () => {
    const fourBytesObj = new fourBytes();
    it('should return 200', () => {
        fourBytesObj.getBySignature('0x4e71d92d').then((response) => {
            expect(response.status).toBe(200);
        });
    });
    it("should return 'claim()'", () => {
        fourBytesObj.getBySignature('0x4e71d92d').then((response) => {
            expect(response.data.signature).toBe('claim()');
        });
    }
})