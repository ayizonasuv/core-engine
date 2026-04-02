// types.ts
import { Type } from './runtime/type';

export enum ErrorKind {
  NONE = 0,
  ARG_ERROR = 1,
  INIT_ERROR = 2,
  EXEC_ERROR = 3,
  MEM_ERROR = 4,
  OTHER_ERROR = 5,
}

export enum CharCode {
  EOF = 0,
  MIN = 1,
  MAX = 127,
}

export enum WCHARCode {
  EOF = 0,
  MIN = 1,
  MAX = 65535,
}

export enum IntegerCode {
  MIN = -2147483648,
  MAX = 2147483647,
}

export enum LongCode {
  MIN = -2147483648,
  MAX = 2147483647,
}

export enum ULongCode {
  MIN = 0,
  MAX = 4294967295,
}

export enum UIntegerCode {
  MIN = 0,
  MAX = 4294967295,
}

export enum RGBA {
  RED = 0,
  GREEN,
  BLUE,
  ALPHA,
}

export enum HSB {
  HUE = 0,
  SATURATION,
  BRIGHTNESS,
}

export enum HSL {
  HUE = 0,
  SATURATION,
  LIGHTNESS,
}

export enum FloatCode {
  MIN = -3.4028234663852886e+38,
  MAX = 3.4028234663852886e+38,
}

export enum DoubleCode {
  MIN = -1.7976931348623157e+308,
  MAX = 1.7976931348623157e+308,
}

export class IPointer<T> {
  private readonly underlying: T;

  constructor(underlying: T) {
    this.underlying = underlying;
  }

  public get underlying(): T {
    return this.underlying;
  }
}

export interface IArray<T> {
  length: number;
  elements: T[];
}

export interface IMap {
  [key: string]: any;
}

export interface IDict<T> {
  [key: string]: T;
}

export interface ISet<T> {
  [key: T]: boolean;
}

export interface INumber {
  value: number;
  valueOf(): number;
}

export interface IString {
  value: string;
  valueOf(): string;
}

export interface IChar {
  value: string;
  valueOf(): string;
}

export interface IBool {
  value: boolean;
  valueOf(): boolean;
}

export interface IWord<T> {
  value: T;
  valueOf(): T;
}

export interface ISymbol {
  value: Symbol;
  valueOf(): Symbol;
}

export interface IDate {
  value: Date;
  valueOf(): Date;
}

export interface ITime {
  value: Date;
  valueOf(): Date;
}

export interface IDateTime {
  value: Date;
  valueOf(): Date;
}

export interface IFile {
  path: string;
  value: Uint8Array;
}

export interface IFunction {
  name: string;
  args: Type[];
  return: Type;
  body: string;
}

export interface IClass {
  name: string;
  fields: Type[];
  methods: IFunction[];
}

export interface IType {
  name: string;
}

export interface ICallable {
  call(...args: any[]): any;
}

export interface IIndexable {
  get(index: number): any;
  set(index: number, value: any): any;
}

export interface IComparable {
  compare(other: any): number;
}

export interface IHashable {
  hash(): number;
}

export interface ICloneable {
  clone(): this;
}

export interface ISerializable {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): this;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IEnum<T> {
  T: T;
}

export interface IValue<T> {
  value: T;
}

export interface IKeyedCollection {
  get(key: any): any;
  set(key: any, value: any): void;
}

export interface IKeyedIterable {
  get(key: any): any;
}

export interface IKeyedEnumerator {
  get(key: any): any;
  moveNext(): boolean;
}

export interface IKeyedIterator {
  get(key: any): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection {
  get(key: any): any;
  set(key: any, value: any): void;
}

export interface IKeyedOrdinalIterable {
  get(key: any): any;
}

export interface IKeyedOrdinalEnumerator {
  get(key: any): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator {
  get(key: any): any;
  moveNext(): boolean;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedIterable<T> {
  get(index: number): T;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalCollection<T> {
  get(index: number): T;
  set(index: number, value: T): void;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalIterable<T> {
  get(index: number): T;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalEnumerator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface IIndexedOrdinalIterator<T> {
  get(index: number): T;
  moveNext(): boolean;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface ISequence<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnumerable<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface IEnum<T> {
  get(index: number): T;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface ISet<T> {
  contains(key: T): boolean;
  add(key: T): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IMap<T> {
  contains(key: T): boolean;
  get(key: T): any;
  set(key: T, value: any): void;
  remove(key: T): void;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface ILinkedList<T> {
  get(index: number): T;
  remove(index: number): void;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IBinarySearch<T> {
  lower_bound(key: T): number;
  upper_bound(key: T): number;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IRange<T> {
  lower: T;
  upper: T;
  contains(value: T): boolean;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IComparable<T> {
  compare(other: T): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface IHashable<T> {
  hash(): number;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface ISerializable<T> {
  serialize(): Uint8Array;
  deserialize(data: Uint8Array): T;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedIterable<T> {
  get(key: T): any;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedIterator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalCollection<T> {
  get(key: T): any;
  set(key: T, value: any): void;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalIterable<T> {
  get(key: T): any;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext(): boolean;
}

export interface IKeyedOrdinalEnumerator<T> {
  get(key: T): any;
  moveNext():