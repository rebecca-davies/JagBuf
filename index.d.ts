/**
 * A Buffer class for JavaScript that implements common jagex buffer utilities
 * in order to handle data more accurately.
 */
export declare class JagBuf {
    /**
     * A Buffer class implementing common jagex buffer utilities
     * @param src The data to be wrapped in this buffer class
     */
    constructor(src: ArrayBuffer);
  
    /**
     * Returns the size of the buffer's byte array
     * @returns The number of bytes in the buffer byte array
     */
    readonly length: number;
  
    /**
     * Returns the remaining length between the current position and the end of the array
     * @returns The number of bytes remaining to be read
     */
    readonly available: number;
  
    /**
     * Returns the data at the current position in the array
     * @returns An unsigned int8 (byte)
     */
    g1(): number;
  
    /**
     * Returns the data at the current position in the array
     * @returns A signed int8 (byte)
     */
    g1b(): number;
  
    /**
     * Returns the data at the current position in the array
     * @returns An unsigned int16 (short)
     */
    g2(): number;
  
    /**
     * Returns the data at the current position in the array
     * @returns A signed int16 (short)
     */
    g2b(): number;
  
    /**
     * Returns the data at the current position in the array
     * @returns An unsigned 24-bit integer (medium)
     */
    g3(): number;
  
    /**
     * Returns the data at the current position in the array
     * @returns A signed 24-bit integer (medium)
     */
    g3b(): number;
  
    /**
     * Returns the data at the current position in the array
     * @returns An unsigned int32 (integer)
     */
    g4(): number;
  
    /**
     * Returns the data at the current position in the array
     * @returns A signed int32 (integer)
     */
    g4s(): number;
  
    /**
     * Returns a string decoded from a portion of the byte array
     * @returns A string decoded from a byte array
     */
    gjstr(): string;
  
    /**
     * Returns data at the current position of the array that may be an unsigned byte or short
     * @returns An unsigned int8 (byte) or int16 (short)
     */
    gsmart(): number;
  
    /**
     * Returns data at the current position of the array that may be a signed byte or short
     * @returns A signed int8 (byte) or int16 (short)
     */
    gsmarts(): number;
  }
  