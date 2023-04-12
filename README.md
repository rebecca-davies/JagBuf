# JagBuf

JagBuf is a javascript wrapper for a Buffer class that implements Jagex methods for reading and writing data within their engine.

## Install & Usage
Navigate to your node project and run the command `npm i jagbuf` to add and install the dependency to your project.


#### Example:
```js
const buffer = JagBuf(bytes); // creates the buffer
console.log(buffer.g2());     // reads a short from the buffer
```

```js
while(true) {
    switch(buffer.g1()) {   // return 0      reads a single byte
        case 0:                 
          return object;
    }
}
```

```js
while(true) {
    switch(buffer.g1()) {                            
        case 6:                           
          this.name = buffer.gjstr();   // return "abyssal_whip"     reads a byte array and converts to string
          break;                          
    }
}
```
#### Fields
```js
g1() : number;          //read unsigned byte
g1s() : number;         //read signed byte
g2() : number;          //read unsigned short
g2s() : number;         //read signed short
g3() : number;          //read unsigned medium
g3s() : number;         //read signed medium
g4() : number;          //read unsigned int
g4s() : number;         //read signed int
gsmart() : number;      //read unsigned smart
gsmarts() : number;     //read signed smart
gjstr() : string;       //read jagex string
```
