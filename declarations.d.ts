// biome-ignore-all lint/complexity/noBannedTypes: declarations file

declare type PrimitiveType = boolean | number | bigint | string | symbol | null | undefined;

declare type DeepReadonly<out T> = Readonly<{
  [K in keyof T]: T[K] extends PropertyKey
    ? Readonly<T[K]>
    : T[K] extends Array<infer A>
      ? Readonly<Array<DeepReadonly<A>>>
      : DeepReadonly<T[K]>;
}>;

declare type DeepPartial<out T> = {
  [K in keyof T]?: T[K] extends PropertyKey
    ? T[K]
    : T[K] extends Array<infer A>
      ? Array<DeepPartial<A>>
      : DeepPartial<T[K]>;
};

declare type Values<out T> = T extends
  | PrimitiveType
  | Date
  | RegExp
  | ((...args: any[]) => any)
  | Error
  ? T
  : T extends readonly (infer U)[]
    ? Values<U>
    : T extends object
      ? Values<T[keyof T]>
      : never;

declare type Numeric = number | bigint;
declare type NumericString = `${Numeric}`;
declare type NumericLike = Numeric | NumericString;
declare type TrueFalse<out T, out U> = T extends U ? true : false;
declare type Without<out T, out K> = T extends any ? (K extends keyof T ? Omit<T, K> : T) : T;
declare type WithOwnProps<out P, out O> = O extends any ? Without<P, keyof O> & O : P & O & {};
declare type Nullable<out T> = T | null;
declare type Nullish<out T> = T | null | undefined;
declare type Mandatory<out T, out P extends keyof T> = Partial<T> & {
  [K in P]-?: T[K];
};
declare type Many<out T> = T | T[];
declare type ReadonlyMany<out T> = T | readonly T[];
declare type Resolvable<out T> = T | (() => T);
declare type ResolvableFrom<out T, in U> = T | ((arg: U) => T);
declare type BoolCallback<in T = unknown> = (arg: T) => boolean;
declare type NonEmptyArray<out T = unknown> = [T, ...(T | undefined)[]];
declare type ReadonlyNonEmptyArray<out T = unknown> = readonly [T, ...(T | undefined)[]];
declare type TypeOrArrayMembers<out T, out U> = T extends U
  ? T
  : T extends readonly (infer V extends U)[]
    ? V
    : never;
declare type StringOrStringArrayMember<out T> = TypeOrArrayMembers<T, string>;
declare type Tagged<out T, out Tag extends string> = T & { __tag: Tag };
declare type Serializer<in T> = (value: T) => string;
declare type Deserializer<out T> = (value: string) => T;

declare type PickOne<out T, out F extends keyof T> = { [P in F]: T[P] } & {
  [K in keyof Omit<T, F>]?: never;
};
declare type PickOneOptional<out T, out F extends keyof T> = {
  [P in F]?: T[P];
} & {
  [K in keyof Omit<T, F>]?: never;
};
declare type SelectOne<out T, out F extends keyof T, R extends boolean = true> = R extends true
  ? PickOne<T, F>
  : PickOneOptional<T, F>;

declare type AtLeastOne<out T> = {
  [K in keyof T]: Pick<T, K>;
}[keyof T];
declare type RequireAtLeastOne<out T, out K extends keyof T = keyof T> = K extends unknown
  ? Required<Pick<T, K>> & Omit<T, K>
  : never;

declare type MutuallyExclusiveProps<
  out P extends [string, string, ...string[]],
  out T = unknown,
  out R extends boolean = true,
> = {
  [K in P[number]]: SelectOne<Record<K, T>, K, R> & {
    [Key in Exclude<P[number], K>]?: never;
  };
}[P[number]];

declare type MergeTypes<out TypesArray extends any[], out Res = {}> = TypesArray extends [
  infer Head,
  ...infer Rem,
]
  ? MergeTypes<Rem, Res & Head>
  : Res;

declare type OneOf<
  out TypesArray extends any[],
  out Res = never,
  out AllProperties = MergeTypes<TypesArray>,
> = TypesArray extends [infer Head, ...infer Rem]
  ? OneOf<Rem, Res | OnlyFirst<Head, AllProperties>, AllProperties>
  : Res;

declare type SimpleOneOf<out F, out S> = OnlyFirst<F, S> | OnlyFirst<S, F>;

declare type OnlyFirst<out F, out S> = F & {
  [Key in keyof Omit<S, keyof F>]?: never;
};

declare type RecordLike = Record<PropertyKey, unknown>;
declare type RecordWithNonNullableValues<R extends RecordLike> = {
  [K in keyof R]: R[K] extends {} ? R[K] : never;
};
declare type EnumLike = Readonly<Record<string, string | number>>;
declare type EnumValues<out T extends EnumLike> = T[keyof T];
declare type StateWithSlot<out T extends string, out S = Record<string, unknown>> = WithOwnProps<
  S,
  { slot: T | (string & {}) }
>;
declare type PartialPick<out T, out K extends keyof T> = { [P in K]?: T[P] | undefined };
