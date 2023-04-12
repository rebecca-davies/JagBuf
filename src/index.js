export class JagBuf {
    constructor(src) {
        this.pos = 0;
        this.data = new Int8Array(src);
    }
    
    get length() {
        return this.data.length;
    }

    get available() {
        return this.length - this.pos;
    }
    
    g1() {
        return this.data[this.pos++] & 0xff;
    }

    g1b() {
        return this.data[this.pos++];
    }

    g2() {
        this.pos += 2;
        return ((this.data[this.pos - 2] & 0xff) << 8) | (this.data[this.pos - 1] & 0xff);
    }

    g2b() {
        this.pos += 2;
        let val = ((this.data[this.pos - 2] & 0xff) << 8) | (this.data[this.pos - 1] & 0xff);
        if(val > 32767) {
            val -= 65536;
        }
        return val;
    }

    g3() {
        this.pos += 3;
        return ((this.data[this.pos - 3] & 0xff) << 16) | ((this.data[this.pos - 2] & 0xff) << 8) | (this.data[this.pos - 1] & 0xff);
    }

    g3b() {
        this.pos += 3;
        let val = ((this.data[this.pos - 3] & 0xff) << 16) | ((this.data[this.pos - 2] & 0xff) << 8) | (this.data[this.pos - 1] & 0xff);
        if(val > 8388607) {
            val -= 16777216;
        }
        return val;
    }

    g4() {
        this.pos += 4;
        return ((this.data[this.pos - 4] & 0xff) << 24) | ((this.data[this.pos - 3] & 0xff) << 16) | ((this.data[this.pos - 2] & 0xff) << 8) | (this.data[this.pos - 1] & 0xff);
    }

    g4s() {
        this.pos += 4;
        let val = ((this.data[this.pos - 4] & 0xff) << 24) | ((this.data[this.pos - 3] & 0xff) << 16) | ((this.data[this.pos - 2] & 0xff) << 8) | (this.data[this.pos - 1] & 0xff);
        if(val > 2147483647) {
            val -= 4294967296;
        }
        return val;
    }

    gjstr() {
        let start = this.pos;
        while(this.data[this.pos++] != 10);
        return this.data.slice(start, this.pos).toString();
    }

    gsmart() {
        let val = this.data[this.pos];
        return (val < 128) ? this.g1() : (this.g2() - 32768);
    }

    gsmarts() {
        let val = this.data[this.pos];
        return (val < 128) ? (this.g1() - 64) : (this.g2() - 49152);
    }
}