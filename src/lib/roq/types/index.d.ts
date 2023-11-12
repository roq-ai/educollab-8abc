/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model educational_content
 *
 */
export type educational_content = $Result.DefaultSelection<Prisma.$educational_contentPayload>;
/**
 * Model freelance_educator
 *
 */
export type freelance_educator = $Result.DefaultSelection<Prisma.$freelance_educatorPayload>;
/**
 * Model learning_module
 *
 */
export type learning_module = $Result.DefaultSelection<Prisma.$learning_modulePayload>;
/**
 * Model lesson_plan
 *
 */
export type lesson_plan = $Result.DefaultSelection<Prisma.$lesson_planPayload>;
/**
 * Model school
 *
 */
export type school = $Result.DefaultSelection<Prisma.$schoolPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Educational_contents
 * const educational_contents = await prisma.educational_content.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Educational_contents
   * const educational_contents = await prisma.educational_content.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.educational_content`: Exposes CRUD operations for the **educational_content** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Educational_contents
   * const educational_contents = await prisma.educational_content.findMany()
   * ```
   */
  get educational_content(): Prisma.educational_contentDelegate<ExtArgs>;

  /**
   * `prisma.freelance_educator`: Exposes CRUD operations for the **freelance_educator** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Freelance_educators
   * const freelance_educators = await prisma.freelance_educator.findMany()
   * ```
   */
  get freelance_educator(): Prisma.freelance_educatorDelegate<ExtArgs>;

  /**
   * `prisma.learning_module`: Exposes CRUD operations for the **learning_module** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Learning_modules
   * const learning_modules = await prisma.learning_module.findMany()
   * ```
   */
  get learning_module(): Prisma.learning_moduleDelegate<ExtArgs>;

  /**
   * `prisma.lesson_plan`: Exposes CRUD operations for the **lesson_plan** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Lesson_plans
   * const lesson_plans = await prisma.lesson_plan.findMany()
   * ```
   */
  get lesson_plan(): Prisma.lesson_planDelegate<ExtArgs>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **school** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Schools
   * const schools = await prisma.school.findMany()
   * ```
   */
  get school(): Prisma.schoolDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    educational_content: 'educational_content';
    freelance_educator: 'freelance_educator';
    learning_module: 'learning_module';
    lesson_plan: 'lesson_plan';
    school: 'school';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'educational_content' | 'freelance_educator' | 'learning_module' | 'lesson_plan' | 'school' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      educational_content: {
        payload: Prisma.$educational_contentPayload<ExtArgs>;
        fields: Prisma.educational_contentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.educational_contentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educational_contentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.educational_contentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educational_contentPayload>;
          };
          findFirst: {
            args: Prisma.educational_contentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educational_contentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.educational_contentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educational_contentPayload>;
          };
          findMany: {
            args: Prisma.educational_contentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educational_contentPayload>[];
          };
          create: {
            args: Prisma.educational_contentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educational_contentPayload>;
          };
          createMany: {
            args: Prisma.educational_contentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.educational_contentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educational_contentPayload>;
          };
          update: {
            args: Prisma.educational_contentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educational_contentPayload>;
          };
          deleteMany: {
            args: Prisma.educational_contentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.educational_contentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.educational_contentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educational_contentPayload>;
          };
          aggregate: {
            args: Prisma.Educational_contentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEducational_content>;
          };
          groupBy: {
            args: Prisma.educational_contentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Educational_contentGroupByOutputType>[];
          };
          count: {
            args: Prisma.educational_contentCountArgs<ExtArgs>;
            result: $Utils.Optional<Educational_contentCountAggregateOutputType> | number;
          };
        };
      };
      freelance_educator: {
        payload: Prisma.$freelance_educatorPayload<ExtArgs>;
        fields: Prisma.freelance_educatorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.freelance_educatorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelance_educatorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.freelance_educatorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelance_educatorPayload>;
          };
          findFirst: {
            args: Prisma.freelance_educatorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelance_educatorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.freelance_educatorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelance_educatorPayload>;
          };
          findMany: {
            args: Prisma.freelance_educatorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelance_educatorPayload>[];
          };
          create: {
            args: Prisma.freelance_educatorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelance_educatorPayload>;
          };
          createMany: {
            args: Prisma.freelance_educatorCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.freelance_educatorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelance_educatorPayload>;
          };
          update: {
            args: Prisma.freelance_educatorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelance_educatorPayload>;
          };
          deleteMany: {
            args: Prisma.freelance_educatorDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.freelance_educatorUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.freelance_educatorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelance_educatorPayload>;
          };
          aggregate: {
            args: Prisma.Freelance_educatorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFreelance_educator>;
          };
          groupBy: {
            args: Prisma.freelance_educatorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Freelance_educatorGroupByOutputType>[];
          };
          count: {
            args: Prisma.freelance_educatorCountArgs<ExtArgs>;
            result: $Utils.Optional<Freelance_educatorCountAggregateOutputType> | number;
          };
        };
      };
      learning_module: {
        payload: Prisma.$learning_modulePayload<ExtArgs>;
        fields: Prisma.learning_moduleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.learning_moduleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.learning_moduleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload>;
          };
          findFirst: {
            args: Prisma.learning_moduleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.learning_moduleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload>;
          };
          findMany: {
            args: Prisma.learning_moduleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload>[];
          };
          create: {
            args: Prisma.learning_moduleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload>;
          };
          createMany: {
            args: Prisma.learning_moduleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.learning_moduleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload>;
          };
          update: {
            args: Prisma.learning_moduleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload>;
          };
          deleteMany: {
            args: Prisma.learning_moduleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.learning_moduleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.learning_moduleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload>;
          };
          aggregate: {
            args: Prisma.Learning_moduleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLearning_module>;
          };
          groupBy: {
            args: Prisma.learning_moduleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Learning_moduleGroupByOutputType>[];
          };
          count: {
            args: Prisma.learning_moduleCountArgs<ExtArgs>;
            result: $Utils.Optional<Learning_moduleCountAggregateOutputType> | number;
          };
        };
      };
      lesson_plan: {
        payload: Prisma.$lesson_planPayload<ExtArgs>;
        fields: Prisma.lesson_planFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.lesson_planFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.lesson_planFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload>;
          };
          findFirst: {
            args: Prisma.lesson_planFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.lesson_planFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload>;
          };
          findMany: {
            args: Prisma.lesson_planFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload>[];
          };
          create: {
            args: Prisma.lesson_planCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload>;
          };
          createMany: {
            args: Prisma.lesson_planCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.lesson_planDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload>;
          };
          update: {
            args: Prisma.lesson_planUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload>;
          };
          deleteMany: {
            args: Prisma.lesson_planDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.lesson_planUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.lesson_planUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload>;
          };
          aggregate: {
            args: Prisma.Lesson_planAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLesson_plan>;
          };
          groupBy: {
            args: Prisma.lesson_planGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Lesson_planGroupByOutputType>[];
          };
          count: {
            args: Prisma.lesson_planCountArgs<ExtArgs>;
            result: $Utils.Optional<Lesson_planCountAggregateOutputType> | number;
          };
        };
      };
      school: {
        payload: Prisma.$schoolPayload<ExtArgs>;
        fields: Prisma.schoolFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.schoolFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.schoolFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          findFirst: {
            args: Prisma.schoolFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.schoolFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          findMany: {
            args: Prisma.schoolFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>[];
          };
          create: {
            args: Prisma.schoolCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          createMany: {
            args: Prisma.schoolCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.schoolDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          update: {
            args: Prisma.schoolUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          deleteMany: {
            args: Prisma.schoolDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.schoolUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.schoolUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSchool>;
          };
          groupBy: {
            args: Prisma.schoolGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SchoolGroupByOutputType>[];
          };
          count: {
            args: Prisma.schoolCountArgs<ExtArgs>;
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    user: number;
  };

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SchoolCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    educational_content: number;
    freelance_educator: number;
    learning_module: number;
    lesson_plan: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    educational_content?: boolean | UserCountOutputTypeCountEducational_contentArgs;
    freelance_educator?: boolean | UserCountOutputTypeCountFreelance_educatorArgs;
    learning_module?: boolean | UserCountOutputTypeCountLearning_moduleArgs;
    lesson_plan?: boolean | UserCountOutputTypeCountLesson_planArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEducational_contentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: educational_contentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFreelance_educatorArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: freelance_educatorWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLearning_moduleArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: learning_moduleWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLesson_planArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: lesson_planWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model educational_content
   */

  export type AggregateEducational_content = {
    _count: Educational_contentCountAggregateOutputType | null;
    _avg: Educational_contentAvgAggregateOutputType | null;
    _sum: Educational_contentSumAggregateOutputType | null;
    _min: Educational_contentMinAggregateOutputType | null;
    _max: Educational_contentMaxAggregateOutputType | null;
  };

  export type Educational_contentAvgAggregateOutputType = {
    grade_level: number | null;
  };

  export type Educational_contentSumAggregateOutputType = {
    grade_level: number | null;
  };

  export type Educational_contentMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    subject: string | null;
    grade_level: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Educational_contentMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    subject: string | null;
    grade_level: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Educational_contentCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    subject: number;
    grade_level: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Educational_contentAvgAggregateInputType = {
    grade_level?: true;
  };

  export type Educational_contentSumAggregateInputType = {
    grade_level?: true;
  };

  export type Educational_contentMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    subject?: true;
    grade_level?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Educational_contentMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    subject?: true;
    grade_level?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Educational_contentCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    subject?: true;
    grade_level?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Educational_contentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which educational_content to aggregate.
     */
    where?: educational_contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of educational_contents to fetch.
     */
    orderBy?: educational_contentOrderByWithRelationInput | educational_contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: educational_contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` educational_contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` educational_contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned educational_contents
     **/
    _count?: true | Educational_contentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Educational_contentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Educational_contentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Educational_contentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Educational_contentMaxAggregateInputType;
  };

  export type GetEducational_contentAggregateType<T extends Educational_contentAggregateArgs> = {
    [P in keyof T & keyof AggregateEducational_content]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducational_content[P]>
      : GetScalarType<T[P], AggregateEducational_content[P]>;
  };

  export type educational_contentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: educational_contentWhereInput;
    orderBy?: educational_contentOrderByWithAggregationInput | educational_contentOrderByWithAggregationInput[];
    by: Educational_contentScalarFieldEnum[] | Educational_contentScalarFieldEnum;
    having?: educational_contentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Educational_contentCountAggregateInputType | true;
    _avg?: Educational_contentAvgAggregateInputType;
    _sum?: Educational_contentSumAggregateInputType;
    _min?: Educational_contentMinAggregateInputType;
    _max?: Educational_contentMaxAggregateInputType;
  };

  export type Educational_contentGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    subject: string;
    grade_level: number;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Educational_contentCountAggregateOutputType | null;
    _avg: Educational_contentAvgAggregateOutputType | null;
    _sum: Educational_contentSumAggregateOutputType | null;
    _min: Educational_contentMinAggregateOutputType | null;
    _max: Educational_contentMaxAggregateOutputType | null;
  };

  type GetEducational_contentGroupByPayload<T extends educational_contentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Educational_contentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Educational_contentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Educational_contentGroupByOutputType[P]>
          : GetScalarType<T[P], Educational_contentGroupByOutputType[P]>;
      }
    >
  >;

  export type educational_contentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        description?: boolean;
        subject?: boolean;
        grade_level?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['educational_content']
    >;

  export type educational_contentSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    subject?: boolean;
    grade_level?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type educational_contentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $educational_contentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'educational_content';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        subject: string;
        grade_level: number;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['educational_content']
    >;
    composites: {};
  };

  type educational_contentGetPayload<S extends boolean | null | undefined | educational_contentDefaultArgs> =
    $Result.GetResult<Prisma.$educational_contentPayload, S>;

  type educational_contentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    educational_contentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Educational_contentCountAggregateInputType | true;
  };

  export interface educational_contentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['educational_content'];
      meta: { name: 'educational_content' };
    };
    /**
     * Find zero or one Educational_content that matches the filter.
     * @param {educational_contentFindUniqueArgs} args - Arguments to find a Educational_content
     * @example
     * // Get one Educational_content
     * const educational_content = await prisma.educational_content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends educational_contentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, educational_contentFindUniqueArgs<ExtArgs>>,
    ): Prisma__educational_contentClient<
      $Result.GetResult<Prisma.$educational_contentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Educational_content that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {educational_contentFindUniqueOrThrowArgs} args - Arguments to find a Educational_content
     * @example
     * // Get one Educational_content
     * const educational_content = await prisma.educational_content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends educational_contentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, educational_contentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__educational_contentClient<
      $Result.GetResult<Prisma.$educational_contentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Educational_content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educational_contentFindFirstArgs} args - Arguments to find a Educational_content
     * @example
     * // Get one Educational_content
     * const educational_content = await prisma.educational_content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends educational_contentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, educational_contentFindFirstArgs<ExtArgs>>,
    ): Prisma__educational_contentClient<
      $Result.GetResult<Prisma.$educational_contentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Educational_content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educational_contentFindFirstOrThrowArgs} args - Arguments to find a Educational_content
     * @example
     * // Get one Educational_content
     * const educational_content = await prisma.educational_content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends educational_contentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, educational_contentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__educational_contentClient<
      $Result.GetResult<Prisma.$educational_contentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Educational_contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educational_contentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educational_contents
     * const educational_contents = await prisma.educational_content.findMany()
     *
     * // Get first 10 Educational_contents
     * const educational_contents = await prisma.educational_content.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const educational_contentWithIdOnly = await prisma.educational_content.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends educational_contentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, educational_contentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$educational_contentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Educational_content.
     * @param {educational_contentCreateArgs} args - Arguments to create a Educational_content.
     * @example
     * // Create one Educational_content
     * const Educational_content = await prisma.educational_content.create({
     *   data: {
     *     // ... data to create a Educational_content
     *   }
     * })
     *
     **/
    create<T extends educational_contentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, educational_contentCreateArgs<ExtArgs>>,
    ): Prisma__educational_contentClient<
      $Result.GetResult<Prisma.$educational_contentPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Educational_contents.
     *     @param {educational_contentCreateManyArgs} args - Arguments to create many Educational_contents.
     *     @example
     *     // Create many Educational_contents
     *     const educational_content = await prisma.educational_content.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends educational_contentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, educational_contentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Educational_content.
     * @param {educational_contentDeleteArgs} args - Arguments to delete one Educational_content.
     * @example
     * // Delete one Educational_content
     * const Educational_content = await prisma.educational_content.delete({
     *   where: {
     *     // ... filter to delete one Educational_content
     *   }
     * })
     *
     **/
    delete<T extends educational_contentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, educational_contentDeleteArgs<ExtArgs>>,
    ): Prisma__educational_contentClient<
      $Result.GetResult<Prisma.$educational_contentPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Educational_content.
     * @param {educational_contentUpdateArgs} args - Arguments to update one Educational_content.
     * @example
     * // Update one Educational_content
     * const educational_content = await prisma.educational_content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends educational_contentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, educational_contentUpdateArgs<ExtArgs>>,
    ): Prisma__educational_contentClient<
      $Result.GetResult<Prisma.$educational_contentPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Educational_contents.
     * @param {educational_contentDeleteManyArgs} args - Arguments to filter Educational_contents to delete.
     * @example
     * // Delete a few Educational_contents
     * const { count } = await prisma.educational_content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends educational_contentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, educational_contentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Educational_contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educational_contentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educational_contents
     * const educational_content = await prisma.educational_content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends educational_contentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, educational_contentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Educational_content.
     * @param {educational_contentUpsertArgs} args - Arguments to update or create a Educational_content.
     * @example
     * // Update or create a Educational_content
     * const educational_content = await prisma.educational_content.upsert({
     *   create: {
     *     // ... data to create a Educational_content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Educational_content we want to update
     *   }
     * })
     **/
    upsert<T extends educational_contentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, educational_contentUpsertArgs<ExtArgs>>,
    ): Prisma__educational_contentClient<
      $Result.GetResult<Prisma.$educational_contentPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Educational_contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educational_contentCountArgs} args - Arguments to filter Educational_contents to count.
     * @example
     * // Count the number of Educational_contents
     * const count = await prisma.educational_content.count({
     *   where: {
     *     // ... the filter for the Educational_contents we want to count
     *   }
     * })
     **/
    count<T extends educational_contentCountArgs>(
      args?: Subset<T, educational_contentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Educational_contentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Educational_content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Educational_contentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Educational_contentAggregateArgs>(
      args: Subset<T, Educational_contentAggregateArgs>,
    ): Prisma.PrismaPromise<GetEducational_contentAggregateType<T>>;

    /**
     * Group by Educational_content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educational_contentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends educational_contentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: educational_contentGroupByArgs['orderBy'] }
        : { orderBy?: educational_contentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, educational_contentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEducational_contentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the educational_content model
     */
    readonly fields: educational_contentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for educational_content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__educational_contentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the educational_content model
   */
  interface educational_contentFieldRefs {
    readonly id: FieldRef<'educational_content', 'String'>;
    readonly title: FieldRef<'educational_content', 'String'>;
    readonly description: FieldRef<'educational_content', 'String'>;
    readonly subject: FieldRef<'educational_content', 'String'>;
    readonly grade_level: FieldRef<'educational_content', 'Int'>;
    readonly user_id: FieldRef<'educational_content', 'String'>;
    readonly created_at: FieldRef<'educational_content', 'DateTime'>;
    readonly updated_at: FieldRef<'educational_content', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * educational_content findUnique
   */
  export type educational_contentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educational_content
     */
    select?: educational_contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educational_contentInclude<ExtArgs> | null;
    /**
     * Filter, which educational_content to fetch.
     */
    where: educational_contentWhereUniqueInput;
  };

  /**
   * educational_content findUniqueOrThrow
   */
  export type educational_contentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the educational_content
     */
    select?: educational_contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educational_contentInclude<ExtArgs> | null;
    /**
     * Filter, which educational_content to fetch.
     */
    where: educational_contentWhereUniqueInput;
  };

  /**
   * educational_content findFirst
   */
  export type educational_contentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educational_content
     */
    select?: educational_contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educational_contentInclude<ExtArgs> | null;
    /**
     * Filter, which educational_content to fetch.
     */
    where?: educational_contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of educational_contents to fetch.
     */
    orderBy?: educational_contentOrderByWithRelationInput | educational_contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for educational_contents.
     */
    cursor?: educational_contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` educational_contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` educational_contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of educational_contents.
     */
    distinct?: Educational_contentScalarFieldEnum | Educational_contentScalarFieldEnum[];
  };

  /**
   * educational_content findFirstOrThrow
   */
  export type educational_contentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the educational_content
     */
    select?: educational_contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educational_contentInclude<ExtArgs> | null;
    /**
     * Filter, which educational_content to fetch.
     */
    where?: educational_contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of educational_contents to fetch.
     */
    orderBy?: educational_contentOrderByWithRelationInput | educational_contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for educational_contents.
     */
    cursor?: educational_contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` educational_contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` educational_contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of educational_contents.
     */
    distinct?: Educational_contentScalarFieldEnum | Educational_contentScalarFieldEnum[];
  };

  /**
   * educational_content findMany
   */
  export type educational_contentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educational_content
     */
    select?: educational_contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educational_contentInclude<ExtArgs> | null;
    /**
     * Filter, which educational_contents to fetch.
     */
    where?: educational_contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of educational_contents to fetch.
     */
    orderBy?: educational_contentOrderByWithRelationInput | educational_contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing educational_contents.
     */
    cursor?: educational_contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` educational_contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` educational_contents.
     */
    skip?: number;
    distinct?: Educational_contentScalarFieldEnum | Educational_contentScalarFieldEnum[];
  };

  /**
   * educational_content create
   */
  export type educational_contentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educational_content
     */
    select?: educational_contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educational_contentInclude<ExtArgs> | null;
    /**
     * The data needed to create a educational_content.
     */
    data: XOR<educational_contentCreateInput, educational_contentUncheckedCreateInput>;
  };

  /**
   * educational_content createMany
   */
  export type educational_contentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many educational_contents.
     */
    data: educational_contentCreateManyInput | educational_contentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * educational_content update
   */
  export type educational_contentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educational_content
     */
    select?: educational_contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educational_contentInclude<ExtArgs> | null;
    /**
     * The data needed to update a educational_content.
     */
    data: XOR<educational_contentUpdateInput, educational_contentUncheckedUpdateInput>;
    /**
     * Choose, which educational_content to update.
     */
    where: educational_contentWhereUniqueInput;
  };

  /**
   * educational_content updateMany
   */
  export type educational_contentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update educational_contents.
     */
    data: XOR<educational_contentUpdateManyMutationInput, educational_contentUncheckedUpdateManyInput>;
    /**
     * Filter which educational_contents to update
     */
    where?: educational_contentWhereInput;
  };

  /**
   * educational_content upsert
   */
  export type educational_contentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educational_content
     */
    select?: educational_contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educational_contentInclude<ExtArgs> | null;
    /**
     * The filter to search for the educational_content to update in case it exists.
     */
    where: educational_contentWhereUniqueInput;
    /**
     * In case the educational_content found by the `where` argument doesn't exist, create a new educational_content with this data.
     */
    create: XOR<educational_contentCreateInput, educational_contentUncheckedCreateInput>;
    /**
     * In case the educational_content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<educational_contentUpdateInput, educational_contentUncheckedUpdateInput>;
  };

  /**
   * educational_content delete
   */
  export type educational_contentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educational_content
     */
    select?: educational_contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educational_contentInclude<ExtArgs> | null;
    /**
     * Filter which educational_content to delete.
     */
    where: educational_contentWhereUniqueInput;
  };

  /**
   * educational_content deleteMany
   */
  export type educational_contentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which educational_contents to delete
     */
    where?: educational_contentWhereInput;
  };

  /**
   * educational_content without action
   */
  export type educational_contentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educational_content
     */
    select?: educational_contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educational_contentInclude<ExtArgs> | null;
  };

  /**
   * Model freelance_educator
   */

  export type AggregateFreelance_educator = {
    _count: Freelance_educatorCountAggregateOutputType | null;
    _avg: Freelance_educatorAvgAggregateOutputType | null;
    _sum: Freelance_educatorSumAggregateOutputType | null;
    _min: Freelance_educatorMinAggregateOutputType | null;
    _max: Freelance_educatorMaxAggregateOutputType | null;
  };

  export type Freelance_educatorAvgAggregateOutputType = {
    experience_years: number | null;
  };

  export type Freelance_educatorSumAggregateOutputType = {
    experience_years: number | null;
  };

  export type Freelance_educatorMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    expertise: string | null;
    experience_years: number | null;
    education_level: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Freelance_educatorMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    expertise: string | null;
    experience_years: number | null;
    education_level: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Freelance_educatorCountAggregateOutputType = {
    id: number;
    user_id: number;
    expertise: number;
    experience_years: number;
    education_level: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Freelance_educatorAvgAggregateInputType = {
    experience_years?: true;
  };

  export type Freelance_educatorSumAggregateInputType = {
    experience_years?: true;
  };

  export type Freelance_educatorMinAggregateInputType = {
    id?: true;
    user_id?: true;
    expertise?: true;
    experience_years?: true;
    education_level?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Freelance_educatorMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    expertise?: true;
    experience_years?: true;
    education_level?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Freelance_educatorCountAggregateInputType = {
    id?: true;
    user_id?: true;
    expertise?: true;
    experience_years?: true;
    education_level?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Freelance_educatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which freelance_educator to aggregate.
     */
    where?: freelance_educatorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of freelance_educators to fetch.
     */
    orderBy?: freelance_educatorOrderByWithRelationInput | freelance_educatorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: freelance_educatorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` freelance_educators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` freelance_educators.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned freelance_educators
     **/
    _count?: true | Freelance_educatorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Freelance_educatorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Freelance_educatorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Freelance_educatorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Freelance_educatorMaxAggregateInputType;
  };

  export type GetFreelance_educatorAggregateType<T extends Freelance_educatorAggregateArgs> = {
    [P in keyof T & keyof AggregateFreelance_educator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFreelance_educator[P]>
      : GetScalarType<T[P], AggregateFreelance_educator[P]>;
  };

  export type freelance_educatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: freelance_educatorWhereInput;
    orderBy?: freelance_educatorOrderByWithAggregationInput | freelance_educatorOrderByWithAggregationInput[];
    by: Freelance_educatorScalarFieldEnum[] | Freelance_educatorScalarFieldEnum;
    having?: freelance_educatorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Freelance_educatorCountAggregateInputType | true;
    _avg?: Freelance_educatorAvgAggregateInputType;
    _sum?: Freelance_educatorSumAggregateInputType;
    _min?: Freelance_educatorMinAggregateInputType;
    _max?: Freelance_educatorMaxAggregateInputType;
  };

  export type Freelance_educatorGroupByOutputType = {
    id: string;
    user_id: string;
    expertise: string;
    experience_years: number;
    education_level: string;
    created_at: Date;
    updated_at: Date;
    _count: Freelance_educatorCountAggregateOutputType | null;
    _avg: Freelance_educatorAvgAggregateOutputType | null;
    _sum: Freelance_educatorSumAggregateOutputType | null;
    _min: Freelance_educatorMinAggregateOutputType | null;
    _max: Freelance_educatorMaxAggregateOutputType | null;
  };

  type GetFreelance_educatorGroupByPayload<T extends freelance_educatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Freelance_educatorGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Freelance_educatorGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Freelance_educatorGroupByOutputType[P]>
          : GetScalarType<T[P], Freelance_educatorGroupByOutputType[P]>;
      }
    >
  >;

  export type freelance_educatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        expertise?: boolean;
        experience_years?: boolean;
        education_level?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['freelance_educator']
    >;

  export type freelance_educatorSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    expertise?: boolean;
    experience_years?: boolean;
    education_level?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type freelance_educatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $freelance_educatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'freelance_educator';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        expertise: string;
        experience_years: number;
        education_level: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['freelance_educator']
    >;
    composites: {};
  };

  type freelance_educatorGetPayload<S extends boolean | null | undefined | freelance_educatorDefaultArgs> =
    $Result.GetResult<Prisma.$freelance_educatorPayload, S>;

  type freelance_educatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    freelance_educatorFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Freelance_educatorCountAggregateInputType | true;
  };

  export interface freelance_educatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['freelance_educator'];
      meta: { name: 'freelance_educator' };
    };
    /**
     * Find zero or one Freelance_educator that matches the filter.
     * @param {freelance_educatorFindUniqueArgs} args - Arguments to find a Freelance_educator
     * @example
     * // Get one Freelance_educator
     * const freelance_educator = await prisma.freelance_educator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends freelance_educatorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, freelance_educatorFindUniqueArgs<ExtArgs>>,
    ): Prisma__freelance_educatorClient<
      $Result.GetResult<Prisma.$freelance_educatorPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Freelance_educator that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {freelance_educatorFindUniqueOrThrowArgs} args - Arguments to find a Freelance_educator
     * @example
     * // Get one Freelance_educator
     * const freelance_educator = await prisma.freelance_educator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends freelance_educatorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, freelance_educatorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__freelance_educatorClient<
      $Result.GetResult<Prisma.$freelance_educatorPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Freelance_educator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelance_educatorFindFirstArgs} args - Arguments to find a Freelance_educator
     * @example
     * // Get one Freelance_educator
     * const freelance_educator = await prisma.freelance_educator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends freelance_educatorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, freelance_educatorFindFirstArgs<ExtArgs>>,
    ): Prisma__freelance_educatorClient<
      $Result.GetResult<Prisma.$freelance_educatorPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Freelance_educator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelance_educatorFindFirstOrThrowArgs} args - Arguments to find a Freelance_educator
     * @example
     * // Get one Freelance_educator
     * const freelance_educator = await prisma.freelance_educator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends freelance_educatorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, freelance_educatorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__freelance_educatorClient<
      $Result.GetResult<Prisma.$freelance_educatorPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Freelance_educators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelance_educatorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Freelance_educators
     * const freelance_educators = await prisma.freelance_educator.findMany()
     *
     * // Get first 10 Freelance_educators
     * const freelance_educators = await prisma.freelance_educator.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const freelance_educatorWithIdOnly = await prisma.freelance_educator.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends freelance_educatorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, freelance_educatorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$freelance_educatorPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Freelance_educator.
     * @param {freelance_educatorCreateArgs} args - Arguments to create a Freelance_educator.
     * @example
     * // Create one Freelance_educator
     * const Freelance_educator = await prisma.freelance_educator.create({
     *   data: {
     *     // ... data to create a Freelance_educator
     *   }
     * })
     *
     **/
    create<T extends freelance_educatorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, freelance_educatorCreateArgs<ExtArgs>>,
    ): Prisma__freelance_educatorClient<
      $Result.GetResult<Prisma.$freelance_educatorPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Freelance_educators.
     *     @param {freelance_educatorCreateManyArgs} args - Arguments to create many Freelance_educators.
     *     @example
     *     // Create many Freelance_educators
     *     const freelance_educator = await prisma.freelance_educator.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends freelance_educatorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, freelance_educatorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Freelance_educator.
     * @param {freelance_educatorDeleteArgs} args - Arguments to delete one Freelance_educator.
     * @example
     * // Delete one Freelance_educator
     * const Freelance_educator = await prisma.freelance_educator.delete({
     *   where: {
     *     // ... filter to delete one Freelance_educator
     *   }
     * })
     *
     **/
    delete<T extends freelance_educatorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, freelance_educatorDeleteArgs<ExtArgs>>,
    ): Prisma__freelance_educatorClient<
      $Result.GetResult<Prisma.$freelance_educatorPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Freelance_educator.
     * @param {freelance_educatorUpdateArgs} args - Arguments to update one Freelance_educator.
     * @example
     * // Update one Freelance_educator
     * const freelance_educator = await prisma.freelance_educator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends freelance_educatorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, freelance_educatorUpdateArgs<ExtArgs>>,
    ): Prisma__freelance_educatorClient<
      $Result.GetResult<Prisma.$freelance_educatorPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Freelance_educators.
     * @param {freelance_educatorDeleteManyArgs} args - Arguments to filter Freelance_educators to delete.
     * @example
     * // Delete a few Freelance_educators
     * const { count } = await prisma.freelance_educator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends freelance_educatorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, freelance_educatorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Freelance_educators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelance_educatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Freelance_educators
     * const freelance_educator = await prisma.freelance_educator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends freelance_educatorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, freelance_educatorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Freelance_educator.
     * @param {freelance_educatorUpsertArgs} args - Arguments to update or create a Freelance_educator.
     * @example
     * // Update or create a Freelance_educator
     * const freelance_educator = await prisma.freelance_educator.upsert({
     *   create: {
     *     // ... data to create a Freelance_educator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Freelance_educator we want to update
     *   }
     * })
     **/
    upsert<T extends freelance_educatorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, freelance_educatorUpsertArgs<ExtArgs>>,
    ): Prisma__freelance_educatorClient<
      $Result.GetResult<Prisma.$freelance_educatorPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Freelance_educators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelance_educatorCountArgs} args - Arguments to filter Freelance_educators to count.
     * @example
     * // Count the number of Freelance_educators
     * const count = await prisma.freelance_educator.count({
     *   where: {
     *     // ... the filter for the Freelance_educators we want to count
     *   }
     * })
     **/
    count<T extends freelance_educatorCountArgs>(
      args?: Subset<T, freelance_educatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Freelance_educatorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Freelance_educator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Freelance_educatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Freelance_educatorAggregateArgs>(
      args: Subset<T, Freelance_educatorAggregateArgs>,
    ): Prisma.PrismaPromise<GetFreelance_educatorAggregateType<T>>;

    /**
     * Group by Freelance_educator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelance_educatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends freelance_educatorGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: freelance_educatorGroupByArgs['orderBy'] }
        : { orderBy?: freelance_educatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, freelance_educatorGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetFreelance_educatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the freelance_educator model
     */
    readonly fields: freelance_educatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for freelance_educator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__freelance_educatorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the freelance_educator model
   */
  interface freelance_educatorFieldRefs {
    readonly id: FieldRef<'freelance_educator', 'String'>;
    readonly user_id: FieldRef<'freelance_educator', 'String'>;
    readonly expertise: FieldRef<'freelance_educator', 'String'>;
    readonly experience_years: FieldRef<'freelance_educator', 'Int'>;
    readonly education_level: FieldRef<'freelance_educator', 'String'>;
    readonly created_at: FieldRef<'freelance_educator', 'DateTime'>;
    readonly updated_at: FieldRef<'freelance_educator', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * freelance_educator findUnique
   */
  export type freelance_educatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_educator
     */
    select?: freelance_educatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelance_educatorInclude<ExtArgs> | null;
    /**
     * Filter, which freelance_educator to fetch.
     */
    where: freelance_educatorWhereUniqueInput;
  };

  /**
   * freelance_educator findUniqueOrThrow
   */
  export type freelance_educatorFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the freelance_educator
     */
    select?: freelance_educatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelance_educatorInclude<ExtArgs> | null;
    /**
     * Filter, which freelance_educator to fetch.
     */
    where: freelance_educatorWhereUniqueInput;
  };

  /**
   * freelance_educator findFirst
   */
  export type freelance_educatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_educator
     */
    select?: freelance_educatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelance_educatorInclude<ExtArgs> | null;
    /**
     * Filter, which freelance_educator to fetch.
     */
    where?: freelance_educatorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of freelance_educators to fetch.
     */
    orderBy?: freelance_educatorOrderByWithRelationInput | freelance_educatorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for freelance_educators.
     */
    cursor?: freelance_educatorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` freelance_educators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` freelance_educators.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of freelance_educators.
     */
    distinct?: Freelance_educatorScalarFieldEnum | Freelance_educatorScalarFieldEnum[];
  };

  /**
   * freelance_educator findFirstOrThrow
   */
  export type freelance_educatorFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the freelance_educator
     */
    select?: freelance_educatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelance_educatorInclude<ExtArgs> | null;
    /**
     * Filter, which freelance_educator to fetch.
     */
    where?: freelance_educatorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of freelance_educators to fetch.
     */
    orderBy?: freelance_educatorOrderByWithRelationInput | freelance_educatorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for freelance_educators.
     */
    cursor?: freelance_educatorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` freelance_educators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` freelance_educators.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of freelance_educators.
     */
    distinct?: Freelance_educatorScalarFieldEnum | Freelance_educatorScalarFieldEnum[];
  };

  /**
   * freelance_educator findMany
   */
  export type freelance_educatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_educator
     */
    select?: freelance_educatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelance_educatorInclude<ExtArgs> | null;
    /**
     * Filter, which freelance_educators to fetch.
     */
    where?: freelance_educatorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of freelance_educators to fetch.
     */
    orderBy?: freelance_educatorOrderByWithRelationInput | freelance_educatorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing freelance_educators.
     */
    cursor?: freelance_educatorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` freelance_educators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` freelance_educators.
     */
    skip?: number;
    distinct?: Freelance_educatorScalarFieldEnum | Freelance_educatorScalarFieldEnum[];
  };

  /**
   * freelance_educator create
   */
  export type freelance_educatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_educator
     */
    select?: freelance_educatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelance_educatorInclude<ExtArgs> | null;
    /**
     * The data needed to create a freelance_educator.
     */
    data: XOR<freelance_educatorCreateInput, freelance_educatorUncheckedCreateInput>;
  };

  /**
   * freelance_educator createMany
   */
  export type freelance_educatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many freelance_educators.
     */
    data: freelance_educatorCreateManyInput | freelance_educatorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * freelance_educator update
   */
  export type freelance_educatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_educator
     */
    select?: freelance_educatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelance_educatorInclude<ExtArgs> | null;
    /**
     * The data needed to update a freelance_educator.
     */
    data: XOR<freelance_educatorUpdateInput, freelance_educatorUncheckedUpdateInput>;
    /**
     * Choose, which freelance_educator to update.
     */
    where: freelance_educatorWhereUniqueInput;
  };

  /**
   * freelance_educator updateMany
   */
  export type freelance_educatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update freelance_educators.
     */
    data: XOR<freelance_educatorUpdateManyMutationInput, freelance_educatorUncheckedUpdateManyInput>;
    /**
     * Filter which freelance_educators to update
     */
    where?: freelance_educatorWhereInput;
  };

  /**
   * freelance_educator upsert
   */
  export type freelance_educatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_educator
     */
    select?: freelance_educatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelance_educatorInclude<ExtArgs> | null;
    /**
     * The filter to search for the freelance_educator to update in case it exists.
     */
    where: freelance_educatorWhereUniqueInput;
    /**
     * In case the freelance_educator found by the `where` argument doesn't exist, create a new freelance_educator with this data.
     */
    create: XOR<freelance_educatorCreateInput, freelance_educatorUncheckedCreateInput>;
    /**
     * In case the freelance_educator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<freelance_educatorUpdateInput, freelance_educatorUncheckedUpdateInput>;
  };

  /**
   * freelance_educator delete
   */
  export type freelance_educatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_educator
     */
    select?: freelance_educatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelance_educatorInclude<ExtArgs> | null;
    /**
     * Filter which freelance_educator to delete.
     */
    where: freelance_educatorWhereUniqueInput;
  };

  /**
   * freelance_educator deleteMany
   */
  export type freelance_educatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which freelance_educators to delete
     */
    where?: freelance_educatorWhereInput;
  };

  /**
   * freelance_educator without action
   */
  export type freelance_educatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_educator
     */
    select?: freelance_educatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelance_educatorInclude<ExtArgs> | null;
  };

  /**
   * Model learning_module
   */

  export type AggregateLearning_module = {
    _count: Learning_moduleCountAggregateOutputType | null;
    _avg: Learning_moduleAvgAggregateOutputType | null;
    _sum: Learning_moduleSumAggregateOutputType | null;
    _min: Learning_moduleMinAggregateOutputType | null;
    _max: Learning_moduleMaxAggregateOutputType | null;
  };

  export type Learning_moduleAvgAggregateOutputType = {
    grade_level: number | null;
  };

  export type Learning_moduleSumAggregateOutputType = {
    grade_level: number | null;
  };

  export type Learning_moduleMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    subject: string | null;
    grade_level: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Learning_moduleMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    subject: string | null;
    grade_level: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Learning_moduleCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    subject: number;
    grade_level: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Learning_moduleAvgAggregateInputType = {
    grade_level?: true;
  };

  export type Learning_moduleSumAggregateInputType = {
    grade_level?: true;
  };

  export type Learning_moduleMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    subject?: true;
    grade_level?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Learning_moduleMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    subject?: true;
    grade_level?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Learning_moduleCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    subject?: true;
    grade_level?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Learning_moduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which learning_module to aggregate.
     */
    where?: learning_moduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of learning_modules to fetch.
     */
    orderBy?: learning_moduleOrderByWithRelationInput | learning_moduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: learning_moduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` learning_modules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` learning_modules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned learning_modules
     **/
    _count?: true | Learning_moduleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Learning_moduleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Learning_moduleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Learning_moduleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Learning_moduleMaxAggregateInputType;
  };

  export type GetLearning_moduleAggregateType<T extends Learning_moduleAggregateArgs> = {
    [P in keyof T & keyof AggregateLearning_module]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearning_module[P]>
      : GetScalarType<T[P], AggregateLearning_module[P]>;
  };

  export type learning_moduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: learning_moduleWhereInput;
    orderBy?: learning_moduleOrderByWithAggregationInput | learning_moduleOrderByWithAggregationInput[];
    by: Learning_moduleScalarFieldEnum[] | Learning_moduleScalarFieldEnum;
    having?: learning_moduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Learning_moduleCountAggregateInputType | true;
    _avg?: Learning_moduleAvgAggregateInputType;
    _sum?: Learning_moduleSumAggregateInputType;
    _min?: Learning_moduleMinAggregateInputType;
    _max?: Learning_moduleMaxAggregateInputType;
  };

  export type Learning_moduleGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    subject: string;
    grade_level: number;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Learning_moduleCountAggregateOutputType | null;
    _avg: Learning_moduleAvgAggregateOutputType | null;
    _sum: Learning_moduleSumAggregateOutputType | null;
    _min: Learning_moduleMinAggregateOutputType | null;
    _max: Learning_moduleMaxAggregateOutputType | null;
  };

  type GetLearning_moduleGroupByPayload<T extends learning_moduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Learning_moduleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Learning_moduleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Learning_moduleGroupByOutputType[P]>
          : GetScalarType<T[P], Learning_moduleGroupByOutputType[P]>;
      }
    >
  >;

  export type learning_moduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        description?: boolean;
        subject?: boolean;
        grade_level?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['learning_module']
    >;

  export type learning_moduleSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    subject?: boolean;
    grade_level?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type learning_moduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $learning_modulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'learning_module';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        subject: string;
        grade_level: number;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['learning_module']
    >;
    composites: {};
  };

  type learning_moduleGetPayload<S extends boolean | null | undefined | learning_moduleDefaultArgs> = $Result.GetResult<
    Prisma.$learning_modulePayload,
    S
  >;

  type learning_moduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    learning_moduleFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Learning_moduleCountAggregateInputType | true;
  };

  export interface learning_moduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['learning_module']; meta: { name: 'learning_module' } };
    /**
     * Find zero or one Learning_module that matches the filter.
     * @param {learning_moduleFindUniqueArgs} args - Arguments to find a Learning_module
     * @example
     * // Get one Learning_module
     * const learning_module = await prisma.learning_module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends learning_moduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, learning_moduleFindUniqueArgs<ExtArgs>>,
    ): Prisma__learning_moduleClient<
      $Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Learning_module that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {learning_moduleFindUniqueOrThrowArgs} args - Arguments to find a Learning_module
     * @example
     * // Get one Learning_module
     * const learning_module = await prisma.learning_module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends learning_moduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, learning_moduleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__learning_moduleClient<
      $Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Learning_module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_moduleFindFirstArgs} args - Arguments to find a Learning_module
     * @example
     * // Get one Learning_module
     * const learning_module = await prisma.learning_module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends learning_moduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, learning_moduleFindFirstArgs<ExtArgs>>,
    ): Prisma__learning_moduleClient<
      $Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Learning_module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_moduleFindFirstOrThrowArgs} args - Arguments to find a Learning_module
     * @example
     * // Get one Learning_module
     * const learning_module = await prisma.learning_module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends learning_moduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, learning_moduleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__learning_moduleClient<
      $Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Learning_modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_moduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Learning_modules
     * const learning_modules = await prisma.learning_module.findMany()
     *
     * // Get first 10 Learning_modules
     * const learning_modules = await prisma.learning_module.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const learning_moduleWithIdOnly = await prisma.learning_module.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends learning_moduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, learning_moduleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Learning_module.
     * @param {learning_moduleCreateArgs} args - Arguments to create a Learning_module.
     * @example
     * // Create one Learning_module
     * const Learning_module = await prisma.learning_module.create({
     *   data: {
     *     // ... data to create a Learning_module
     *   }
     * })
     *
     **/
    create<T extends learning_moduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, learning_moduleCreateArgs<ExtArgs>>,
    ): Prisma__learning_moduleClient<
      $Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Learning_modules.
     *     @param {learning_moduleCreateManyArgs} args - Arguments to create many Learning_modules.
     *     @example
     *     // Create many Learning_modules
     *     const learning_module = await prisma.learning_module.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends learning_moduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, learning_moduleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Learning_module.
     * @param {learning_moduleDeleteArgs} args - Arguments to delete one Learning_module.
     * @example
     * // Delete one Learning_module
     * const Learning_module = await prisma.learning_module.delete({
     *   where: {
     *     // ... filter to delete one Learning_module
     *   }
     * })
     *
     **/
    delete<T extends learning_moduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, learning_moduleDeleteArgs<ExtArgs>>,
    ): Prisma__learning_moduleClient<
      $Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Learning_module.
     * @param {learning_moduleUpdateArgs} args - Arguments to update one Learning_module.
     * @example
     * // Update one Learning_module
     * const learning_module = await prisma.learning_module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends learning_moduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, learning_moduleUpdateArgs<ExtArgs>>,
    ): Prisma__learning_moduleClient<
      $Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Learning_modules.
     * @param {learning_moduleDeleteManyArgs} args - Arguments to filter Learning_modules to delete.
     * @example
     * // Delete a few Learning_modules
     * const { count } = await prisma.learning_module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends learning_moduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, learning_moduleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Learning_modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_moduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Learning_modules
     * const learning_module = await prisma.learning_module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends learning_moduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, learning_moduleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Learning_module.
     * @param {learning_moduleUpsertArgs} args - Arguments to update or create a Learning_module.
     * @example
     * // Update or create a Learning_module
     * const learning_module = await prisma.learning_module.upsert({
     *   create: {
     *     // ... data to create a Learning_module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Learning_module we want to update
     *   }
     * })
     **/
    upsert<T extends learning_moduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, learning_moduleUpsertArgs<ExtArgs>>,
    ): Prisma__learning_moduleClient<
      $Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Learning_modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_moduleCountArgs} args - Arguments to filter Learning_modules to count.
     * @example
     * // Count the number of Learning_modules
     * const count = await prisma.learning_module.count({
     *   where: {
     *     // ... the filter for the Learning_modules we want to count
     *   }
     * })
     **/
    count<T extends learning_moduleCountArgs>(
      args?: Subset<T, learning_moduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Learning_moduleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Learning_module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Learning_moduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Learning_moduleAggregateArgs>(
      args: Subset<T, Learning_moduleAggregateArgs>,
    ): Prisma.PrismaPromise<GetLearning_moduleAggregateType<T>>;

    /**
     * Group by Learning_module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_moduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends learning_moduleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: learning_moduleGroupByArgs['orderBy'] }
        : { orderBy?: learning_moduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, learning_moduleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLearning_moduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the learning_module model
     */
    readonly fields: learning_moduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for learning_module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__learning_moduleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the learning_module model
   */
  interface learning_moduleFieldRefs {
    readonly id: FieldRef<'learning_module', 'String'>;
    readonly title: FieldRef<'learning_module', 'String'>;
    readonly description: FieldRef<'learning_module', 'String'>;
    readonly subject: FieldRef<'learning_module', 'String'>;
    readonly grade_level: FieldRef<'learning_module', 'Int'>;
    readonly user_id: FieldRef<'learning_module', 'String'>;
    readonly created_at: FieldRef<'learning_module', 'DateTime'>;
    readonly updated_at: FieldRef<'learning_module', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * learning_module findUnique
   */
  export type learning_moduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
    /**
     * Filter, which learning_module to fetch.
     */
    where: learning_moduleWhereUniqueInput;
  };

  /**
   * learning_module findUniqueOrThrow
   */
  export type learning_moduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the learning_module
       */
      select?: learning_moduleSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: learning_moduleInclude<ExtArgs> | null;
      /**
       * Filter, which learning_module to fetch.
       */
      where: learning_moduleWhereUniqueInput;
    };

  /**
   * learning_module findFirst
   */
  export type learning_moduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
    /**
     * Filter, which learning_module to fetch.
     */
    where?: learning_moduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of learning_modules to fetch.
     */
    orderBy?: learning_moduleOrderByWithRelationInput | learning_moduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for learning_modules.
     */
    cursor?: learning_moduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` learning_modules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` learning_modules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of learning_modules.
     */
    distinct?: Learning_moduleScalarFieldEnum | Learning_moduleScalarFieldEnum[];
  };

  /**
   * learning_module findFirstOrThrow
   */
  export type learning_moduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the learning_module
       */
      select?: learning_moduleSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: learning_moduleInclude<ExtArgs> | null;
      /**
       * Filter, which learning_module to fetch.
       */
      where?: learning_moduleWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of learning_modules to fetch.
       */
      orderBy?: learning_moduleOrderByWithRelationInput | learning_moduleOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for learning_modules.
       */
      cursor?: learning_moduleWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` learning_modules from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` learning_modules.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of learning_modules.
       */
      distinct?: Learning_moduleScalarFieldEnum | Learning_moduleScalarFieldEnum[];
    };

  /**
   * learning_module findMany
   */
  export type learning_moduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
    /**
     * Filter, which learning_modules to fetch.
     */
    where?: learning_moduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of learning_modules to fetch.
     */
    orderBy?: learning_moduleOrderByWithRelationInput | learning_moduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing learning_modules.
     */
    cursor?: learning_moduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` learning_modules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` learning_modules.
     */
    skip?: number;
    distinct?: Learning_moduleScalarFieldEnum | Learning_moduleScalarFieldEnum[];
  };

  /**
   * learning_module create
   */
  export type learning_moduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
    /**
     * The data needed to create a learning_module.
     */
    data: XOR<learning_moduleCreateInput, learning_moduleUncheckedCreateInput>;
  };

  /**
   * learning_module createMany
   */
  export type learning_moduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many learning_modules.
     */
    data: learning_moduleCreateManyInput | learning_moduleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * learning_module update
   */
  export type learning_moduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
    /**
     * The data needed to update a learning_module.
     */
    data: XOR<learning_moduleUpdateInput, learning_moduleUncheckedUpdateInput>;
    /**
     * Choose, which learning_module to update.
     */
    where: learning_moduleWhereUniqueInput;
  };

  /**
   * learning_module updateMany
   */
  export type learning_moduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update learning_modules.
     */
    data: XOR<learning_moduleUpdateManyMutationInput, learning_moduleUncheckedUpdateManyInput>;
    /**
     * Filter which learning_modules to update
     */
    where?: learning_moduleWhereInput;
  };

  /**
   * learning_module upsert
   */
  export type learning_moduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
    /**
     * The filter to search for the learning_module to update in case it exists.
     */
    where: learning_moduleWhereUniqueInput;
    /**
     * In case the learning_module found by the `where` argument doesn't exist, create a new learning_module with this data.
     */
    create: XOR<learning_moduleCreateInput, learning_moduleUncheckedCreateInput>;
    /**
     * In case the learning_module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<learning_moduleUpdateInput, learning_moduleUncheckedUpdateInput>;
  };

  /**
   * learning_module delete
   */
  export type learning_moduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
    /**
     * Filter which learning_module to delete.
     */
    where: learning_moduleWhereUniqueInput;
  };

  /**
   * learning_module deleteMany
   */
  export type learning_moduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which learning_modules to delete
     */
    where?: learning_moduleWhereInput;
  };

  /**
   * learning_module without action
   */
  export type learning_moduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
  };

  /**
   * Model lesson_plan
   */

  export type AggregateLesson_plan = {
    _count: Lesson_planCountAggregateOutputType | null;
    _avg: Lesson_planAvgAggregateOutputType | null;
    _sum: Lesson_planSumAggregateOutputType | null;
    _min: Lesson_planMinAggregateOutputType | null;
    _max: Lesson_planMaxAggregateOutputType | null;
  };

  export type Lesson_planAvgAggregateOutputType = {
    grade_level: number | null;
  };

  export type Lesson_planSumAggregateOutputType = {
    grade_level: number | null;
  };

  export type Lesson_planMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    subject: string | null;
    grade_level: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Lesson_planMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    subject: string | null;
    grade_level: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Lesson_planCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    subject: number;
    grade_level: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Lesson_planAvgAggregateInputType = {
    grade_level?: true;
  };

  export type Lesson_planSumAggregateInputType = {
    grade_level?: true;
  };

  export type Lesson_planMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    subject?: true;
    grade_level?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Lesson_planMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    subject?: true;
    grade_level?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Lesson_planCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    subject?: true;
    grade_level?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Lesson_planAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lesson_plan to aggregate.
     */
    where?: lesson_planWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lesson_plans to fetch.
     */
    orderBy?: lesson_planOrderByWithRelationInput | lesson_planOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: lesson_planWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lesson_plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lesson_plans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned lesson_plans
     **/
    _count?: true | Lesson_planCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Lesson_planAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Lesson_planSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Lesson_planMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Lesson_planMaxAggregateInputType;
  };

  export type GetLesson_planAggregateType<T extends Lesson_planAggregateArgs> = {
    [P in keyof T & keyof AggregateLesson_plan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson_plan[P]>
      : GetScalarType<T[P], AggregateLesson_plan[P]>;
  };

  export type lesson_planGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lesson_planWhereInput;
    orderBy?: lesson_planOrderByWithAggregationInput | lesson_planOrderByWithAggregationInput[];
    by: Lesson_planScalarFieldEnum[] | Lesson_planScalarFieldEnum;
    having?: lesson_planScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Lesson_planCountAggregateInputType | true;
    _avg?: Lesson_planAvgAggregateInputType;
    _sum?: Lesson_planSumAggregateInputType;
    _min?: Lesson_planMinAggregateInputType;
    _max?: Lesson_planMaxAggregateInputType;
  };

  export type Lesson_planGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    subject: string;
    grade_level: number;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Lesson_planCountAggregateOutputType | null;
    _avg: Lesson_planAvgAggregateOutputType | null;
    _sum: Lesson_planSumAggregateOutputType | null;
    _min: Lesson_planMinAggregateOutputType | null;
    _max: Lesson_planMaxAggregateOutputType | null;
  };

  type GetLesson_planGroupByPayload<T extends lesson_planGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lesson_planGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Lesson_planGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Lesson_planGroupByOutputType[P]>
          : GetScalarType<T[P], Lesson_planGroupByOutputType[P]>;
      }
    >
  >;

  export type lesson_planSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        description?: boolean;
        subject?: boolean;
        grade_level?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['lesson_plan']
    >;

  export type lesson_planSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    subject?: boolean;
    grade_level?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type lesson_planInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $lesson_planPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'lesson_plan';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        subject: string;
        grade_level: number;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['lesson_plan']
    >;
    composites: {};
  };

  type lesson_planGetPayload<S extends boolean | null | undefined | lesson_planDefaultArgs> = $Result.GetResult<
    Prisma.$lesson_planPayload,
    S
  >;

  type lesson_planCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    lesson_planFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Lesson_planCountAggregateInputType | true;
  };

  export interface lesson_planDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lesson_plan']; meta: { name: 'lesson_plan' } };
    /**
     * Find zero or one Lesson_plan that matches the filter.
     * @param {lesson_planFindUniqueArgs} args - Arguments to find a Lesson_plan
     * @example
     * // Get one Lesson_plan
     * const lesson_plan = await prisma.lesson_plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends lesson_planFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, lesson_planFindUniqueArgs<ExtArgs>>,
    ): Prisma__lesson_planClient<
      $Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Lesson_plan that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {lesson_planFindUniqueOrThrowArgs} args - Arguments to find a Lesson_plan
     * @example
     * // Get one Lesson_plan
     * const lesson_plan = await prisma.lesson_plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends lesson_planFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, lesson_planFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__lesson_planClient<
      $Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Lesson_plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lesson_planFindFirstArgs} args - Arguments to find a Lesson_plan
     * @example
     * // Get one Lesson_plan
     * const lesson_plan = await prisma.lesson_plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends lesson_planFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, lesson_planFindFirstArgs<ExtArgs>>,
    ): Prisma__lesson_planClient<
      $Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Lesson_plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lesson_planFindFirstOrThrowArgs} args - Arguments to find a Lesson_plan
     * @example
     * // Get one Lesson_plan
     * const lesson_plan = await prisma.lesson_plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends lesson_planFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, lesson_planFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__lesson_planClient<
      $Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Lesson_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lesson_planFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lesson_plans
     * const lesson_plans = await prisma.lesson_plan.findMany()
     *
     * // Get first 10 Lesson_plans
     * const lesson_plans = await prisma.lesson_plan.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lesson_planWithIdOnly = await prisma.lesson_plan.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends lesson_planFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lesson_planFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Lesson_plan.
     * @param {lesson_planCreateArgs} args - Arguments to create a Lesson_plan.
     * @example
     * // Create one Lesson_plan
     * const Lesson_plan = await prisma.lesson_plan.create({
     *   data: {
     *     // ... data to create a Lesson_plan
     *   }
     * })
     *
     **/
    create<T extends lesson_planCreateArgs<ExtArgs>>(
      args: SelectSubset<T, lesson_planCreateArgs<ExtArgs>>,
    ): Prisma__lesson_planClient<$Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Lesson_plans.
     *     @param {lesson_planCreateManyArgs} args - Arguments to create many Lesson_plans.
     *     @example
     *     // Create many Lesson_plans
     *     const lesson_plan = await prisma.lesson_plan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends lesson_planCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lesson_planCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Lesson_plan.
     * @param {lesson_planDeleteArgs} args - Arguments to delete one Lesson_plan.
     * @example
     * // Delete one Lesson_plan
     * const Lesson_plan = await prisma.lesson_plan.delete({
     *   where: {
     *     // ... filter to delete one Lesson_plan
     *   }
     * })
     *
     **/
    delete<T extends lesson_planDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, lesson_planDeleteArgs<ExtArgs>>,
    ): Prisma__lesson_planClient<$Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Lesson_plan.
     * @param {lesson_planUpdateArgs} args - Arguments to update one Lesson_plan.
     * @example
     * // Update one Lesson_plan
     * const lesson_plan = await prisma.lesson_plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends lesson_planUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, lesson_planUpdateArgs<ExtArgs>>,
    ): Prisma__lesson_planClient<$Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Lesson_plans.
     * @param {lesson_planDeleteManyArgs} args - Arguments to filter Lesson_plans to delete.
     * @example
     * // Delete a few Lesson_plans
     * const { count } = await prisma.lesson_plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends lesson_planDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lesson_planDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Lesson_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lesson_planUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lesson_plans
     * const lesson_plan = await prisma.lesson_plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends lesson_planUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, lesson_planUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Lesson_plan.
     * @param {lesson_planUpsertArgs} args - Arguments to update or create a Lesson_plan.
     * @example
     * // Update or create a Lesson_plan
     * const lesson_plan = await prisma.lesson_plan.upsert({
     *   create: {
     *     // ... data to create a Lesson_plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson_plan we want to update
     *   }
     * })
     **/
    upsert<T extends lesson_planUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, lesson_planUpsertArgs<ExtArgs>>,
    ): Prisma__lesson_planClient<$Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Lesson_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lesson_planCountArgs} args - Arguments to filter Lesson_plans to count.
     * @example
     * // Count the number of Lesson_plans
     * const count = await prisma.lesson_plan.count({
     *   where: {
     *     // ... the filter for the Lesson_plans we want to count
     *   }
     * })
     **/
    count<T extends lesson_planCountArgs>(
      args?: Subset<T, lesson_planCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lesson_planCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Lesson_plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lesson_planAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Lesson_planAggregateArgs>(
      args: Subset<T, Lesson_planAggregateArgs>,
    ): Prisma.PrismaPromise<GetLesson_planAggregateType<T>>;

    /**
     * Group by Lesson_plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lesson_planGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends lesson_planGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lesson_planGroupByArgs['orderBy'] }
        : { orderBy?: lesson_planGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, lesson_planGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLesson_planGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the lesson_plan model
     */
    readonly fields: lesson_planFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lesson_plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lesson_planClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the lesson_plan model
   */
  interface lesson_planFieldRefs {
    readonly id: FieldRef<'lesson_plan', 'String'>;
    readonly title: FieldRef<'lesson_plan', 'String'>;
    readonly description: FieldRef<'lesson_plan', 'String'>;
    readonly subject: FieldRef<'lesson_plan', 'String'>;
    readonly grade_level: FieldRef<'lesson_plan', 'Int'>;
    readonly user_id: FieldRef<'lesson_plan', 'String'>;
    readonly created_at: FieldRef<'lesson_plan', 'DateTime'>;
    readonly updated_at: FieldRef<'lesson_plan', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * lesson_plan findUnique
   */
  export type lesson_planFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * Filter, which lesson_plan to fetch.
     */
    where: lesson_planWhereUniqueInput;
  };

  /**
   * lesson_plan findUniqueOrThrow
   */
  export type lesson_planFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * Filter, which lesson_plan to fetch.
     */
    where: lesson_planWhereUniqueInput;
  };

  /**
   * lesson_plan findFirst
   */
  export type lesson_planFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * Filter, which lesson_plan to fetch.
     */
    where?: lesson_planWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lesson_plans to fetch.
     */
    orderBy?: lesson_planOrderByWithRelationInput | lesson_planOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for lesson_plans.
     */
    cursor?: lesson_planWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lesson_plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lesson_plans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of lesson_plans.
     */
    distinct?: Lesson_planScalarFieldEnum | Lesson_planScalarFieldEnum[];
  };

  /**
   * lesson_plan findFirstOrThrow
   */
  export type lesson_planFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * Filter, which lesson_plan to fetch.
     */
    where?: lesson_planWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lesson_plans to fetch.
     */
    orderBy?: lesson_planOrderByWithRelationInput | lesson_planOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for lesson_plans.
     */
    cursor?: lesson_planWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lesson_plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lesson_plans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of lesson_plans.
     */
    distinct?: Lesson_planScalarFieldEnum | Lesson_planScalarFieldEnum[];
  };

  /**
   * lesson_plan findMany
   */
  export type lesson_planFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * Filter, which lesson_plans to fetch.
     */
    where?: lesson_planWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lesson_plans to fetch.
     */
    orderBy?: lesson_planOrderByWithRelationInput | lesson_planOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing lesson_plans.
     */
    cursor?: lesson_planWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lesson_plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lesson_plans.
     */
    skip?: number;
    distinct?: Lesson_planScalarFieldEnum | Lesson_planScalarFieldEnum[];
  };

  /**
   * lesson_plan create
   */
  export type lesson_planCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * The data needed to create a lesson_plan.
     */
    data: XOR<lesson_planCreateInput, lesson_planUncheckedCreateInput>;
  };

  /**
   * lesson_plan createMany
   */
  export type lesson_planCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lesson_plans.
     */
    data: lesson_planCreateManyInput | lesson_planCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * lesson_plan update
   */
  export type lesson_planUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * The data needed to update a lesson_plan.
     */
    data: XOR<lesson_planUpdateInput, lesson_planUncheckedUpdateInput>;
    /**
     * Choose, which lesson_plan to update.
     */
    where: lesson_planWhereUniqueInput;
  };

  /**
   * lesson_plan updateMany
   */
  export type lesson_planUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lesson_plans.
     */
    data: XOR<lesson_planUpdateManyMutationInput, lesson_planUncheckedUpdateManyInput>;
    /**
     * Filter which lesson_plans to update
     */
    where?: lesson_planWhereInput;
  };

  /**
   * lesson_plan upsert
   */
  export type lesson_planUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * The filter to search for the lesson_plan to update in case it exists.
     */
    where: lesson_planWhereUniqueInput;
    /**
     * In case the lesson_plan found by the `where` argument doesn't exist, create a new lesson_plan with this data.
     */
    create: XOR<lesson_planCreateInput, lesson_planUncheckedCreateInput>;
    /**
     * In case the lesson_plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lesson_planUpdateInput, lesson_planUncheckedUpdateInput>;
  };

  /**
   * lesson_plan delete
   */
  export type lesson_planDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * Filter which lesson_plan to delete.
     */
    where: lesson_planWhereUniqueInput;
  };

  /**
   * lesson_plan deleteMany
   */
  export type lesson_planDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lesson_plans to delete
     */
    where?: lesson_planWhereInput;
  };

  /**
   * lesson_plan without action
   */
  export type lesson_planDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
  };

  /**
   * Model school
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null;
    _min: SchoolMinAggregateOutputType | null;
    _max: SchoolMaxAggregateOutputType | null;
  };

  export type SchoolMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SchoolMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SchoolCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    zip_code: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type SchoolMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SchoolMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SchoolCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which school to aggregate.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned schools
     **/
    _count?: true | SchoolCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SchoolMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SchoolMaxAggregateInputType;
  };

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
    [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>;
  };

  export type schoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schoolWhereInput;
    orderBy?: schoolOrderByWithAggregationInput | schoolOrderByWithAggregationInput[];
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum;
    having?: schoolScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SchoolCountAggregateInputType | true;
    _min?: SchoolMinAggregateInputType;
    _max?: SchoolMaxAggregateInputType;
  };

  export type SchoolGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: SchoolCountAggregateOutputType | null;
    _min: SchoolMinAggregateOutputType | null;
    _max: SchoolMaxAggregateOutputType | null;
  };

  type GetSchoolGroupByPayload<T extends schoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SchoolGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
          : GetScalarType<T[P], SchoolGroupByOutputType[P]>;
      }
    >
  >;

  export type schoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      city?: boolean;
      state?: boolean;
      zip_code?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | school$userArgs<ExtArgs>;
      _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['school']
  >;

  export type schoolSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type schoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | school$userArgs<ExtArgs>;
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $schoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'school';
    objects: {
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        zip_code: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['school']
    >;
    composites: {};
  };

  type schoolGetPayload<S extends boolean | null | undefined | schoolDefaultArgs> = $Result.GetResult<
    Prisma.$schoolPayload,
    S
  >;

  type schoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    schoolFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: SchoolCountAggregateInputType | true;
  };

  export interface schoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['school']; meta: { name: 'school' } };
    /**
     * Find zero or one School that matches the filter.
     * @param {schoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends schoolFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, schoolFindUniqueArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one School that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {schoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends schoolFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends schoolFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindFirstArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends schoolFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     *
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends schoolFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a School.
     * @param {schoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     *
     **/
    create<T extends schoolCreateArgs<ExtArgs>>(
      args: SelectSubset<T, schoolCreateArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Schools.
     *     @param {schoolCreateManyArgs} args - Arguments to create many Schools.
     *     @example
     *     // Create many Schools
     *     const school = await prisma.school.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends schoolCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a School.
     * @param {schoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     *
     **/
    delete<T extends schoolDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, schoolDeleteArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one School.
     * @param {schoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends schoolUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, schoolUpdateArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Schools.
     * @param {schoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends schoolDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends schoolUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, schoolUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one School.
     * @param {schoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     **/
    upsert<T extends schoolUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, schoolUpsertArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
     **/
    count<T extends schoolCountArgs>(
      args?: Subset<T, schoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SchoolAggregateArgs>(
      args: Subset<T, SchoolAggregateArgs>,
    ): Prisma.PrismaPromise<GetSchoolAggregateType<T>>;

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends schoolGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: schoolGroupByArgs['orderBy'] }
        : { orderBy?: schoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, schoolGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the school model
     */
    readonly fields: schoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for school.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__schoolClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends school$userArgs<ExtArgs> = {}>(
      args?: Subset<T, school$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the school model
   */
  interface schoolFieldRefs {
    readonly id: FieldRef<'school', 'String'>;
    readonly description: FieldRef<'school', 'String'>;
    readonly address: FieldRef<'school', 'String'>;
    readonly city: FieldRef<'school', 'String'>;
    readonly state: FieldRef<'school', 'String'>;
    readonly zip_code: FieldRef<'school', 'String'>;
    readonly name: FieldRef<'school', 'String'>;
    readonly created_at: FieldRef<'school', 'DateTime'>;
    readonly updated_at: FieldRef<'school', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * school findUnique
   */
  export type schoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school findUniqueOrThrow
   */
  export type schoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school findFirst
   */
  export type schoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schools.
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * school findFirstOrThrow
   */
  export type schoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schools.
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * school findMany
   */
  export type schoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which schools to fetch.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing schools.
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * school create
   */
  export type schoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * The data needed to create a school.
     */
    data: XOR<schoolCreateInput, schoolUncheckedCreateInput>;
  };

  /**
   * school createMany
   */
  export type schoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schools.
     */
    data: schoolCreateManyInput | schoolCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * school update
   */
  export type schoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * The data needed to update a school.
     */
    data: XOR<schoolUpdateInput, schoolUncheckedUpdateInput>;
    /**
     * Choose, which school to update.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school updateMany
   */
  export type schoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schools.
     */
    data: XOR<schoolUpdateManyMutationInput, schoolUncheckedUpdateManyInput>;
    /**
     * Filter which schools to update
     */
    where?: schoolWhereInput;
  };

  /**
   * school upsert
   */
  export type schoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * The filter to search for the school to update in case it exists.
     */
    where: schoolWhereUniqueInput;
    /**
     * In case the school found by the `where` argument doesn't exist, create a new school with this data.
     */
    create: XOR<schoolCreateInput, schoolUncheckedCreateInput>;
    /**
     * In case the school was found with the provided `where` argument, update it with this data.
     */
    update: XOR<schoolUpdateInput, schoolUncheckedUpdateInput>;
  };

  /**
   * school delete
   */
  export type schoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter which school to delete.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school deleteMany
   */
  export type schoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schools to delete
     */
    where?: schoolWhereInput;
  };

  /**
   * school.user
   */
  export type school$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * school without action
   */
  export type schoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    school_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    school_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    school_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    school_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    school_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    school_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    school_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      school_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      educational_content?: boolean | user$educational_contentArgs<ExtArgs>;
      freelance_educator?: boolean | user$freelance_educatorArgs<ExtArgs>;
      learning_module?: boolean | user$learning_moduleArgs<ExtArgs>;
      lesson_plan?: boolean | user$lesson_planArgs<ExtArgs>;
      school?: boolean | user$schoolArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    school_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    educational_content?: boolean | user$educational_contentArgs<ExtArgs>;
    freelance_educator?: boolean | user$freelance_educatorArgs<ExtArgs>;
    learning_module?: boolean | user$learning_moduleArgs<ExtArgs>;
    lesson_plan?: boolean | user$lesson_planArgs<ExtArgs>;
    school?: boolean | user$schoolArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      educational_content: Prisma.$educational_contentPayload<ExtArgs>[];
      freelance_educator: Prisma.$freelance_educatorPayload<ExtArgs>[];
      learning_module: Prisma.$learning_modulePayload<ExtArgs>[];
      lesson_plan: Prisma.$lesson_planPayload<ExtArgs>[];
      school: Prisma.$schoolPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        school_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    educational_content<T extends user$educational_contentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$educational_contentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$educational_contentPayload<ExtArgs>, T, 'findMany'> | Null>;

    freelance_educator<T extends user$freelance_educatorArgs<ExtArgs> = {}>(
      args?: Subset<T, user$freelance_educatorArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$freelance_educatorPayload<ExtArgs>, T, 'findMany'> | Null>;

    learning_module<T extends user$learning_moduleArgs<ExtArgs> = {}>(
      args?: Subset<T, user$learning_moduleArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'findMany'> | Null>;

    lesson_plan<T extends user$lesson_planArgs<ExtArgs> = {}>(
      args?: Subset<T, user$lesson_planArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'findMany'> | Null>;

    school<T extends user$schoolArgs<ExtArgs> = {}>(
      args?: Subset<T, user$schoolArgs<ExtArgs>>,
    ): Prisma__schoolClient<
      $Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly school_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.educational_content
   */
  export type user$educational_contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educational_content
     */
    select?: educational_contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educational_contentInclude<ExtArgs> | null;
    where?: educational_contentWhereInput;
    orderBy?: educational_contentOrderByWithRelationInput | educational_contentOrderByWithRelationInput[];
    cursor?: educational_contentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Educational_contentScalarFieldEnum | Educational_contentScalarFieldEnum[];
  };

  /**
   * user.freelance_educator
   */
  export type user$freelance_educatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_educator
     */
    select?: freelance_educatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelance_educatorInclude<ExtArgs> | null;
    where?: freelance_educatorWhereInput;
    orderBy?: freelance_educatorOrderByWithRelationInput | freelance_educatorOrderByWithRelationInput[];
    cursor?: freelance_educatorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Freelance_educatorScalarFieldEnum | Freelance_educatorScalarFieldEnum[];
  };

  /**
   * user.learning_module
   */
  export type user$learning_moduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
    where?: learning_moduleWhereInput;
    orderBy?: learning_moduleOrderByWithRelationInput | learning_moduleOrderByWithRelationInput[];
    cursor?: learning_moduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Learning_moduleScalarFieldEnum | Learning_moduleScalarFieldEnum[];
  };

  /**
   * user.lesson_plan
   */
  export type user$lesson_planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    where?: lesson_planWhereInput;
    orderBy?: lesson_planOrderByWithRelationInput | lesson_planOrderByWithRelationInput[];
    cursor?: lesson_planWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Lesson_planScalarFieldEnum | Lesson_planScalarFieldEnum[];
  };

  /**
   * user.school
   */
  export type user$schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    where?: schoolWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const Educational_contentScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    subject: 'subject';
    grade_level: 'grade_level';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Educational_contentScalarFieldEnum =
    (typeof Educational_contentScalarFieldEnum)[keyof typeof Educational_contentScalarFieldEnum];

  export const Freelance_educatorScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    expertise: 'expertise';
    experience_years: 'experience_years';
    education_level: 'education_level';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Freelance_educatorScalarFieldEnum =
    (typeof Freelance_educatorScalarFieldEnum)[keyof typeof Freelance_educatorScalarFieldEnum];

  export const Learning_moduleScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    subject: 'subject';
    grade_level: 'grade_level';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Learning_moduleScalarFieldEnum =
    (typeof Learning_moduleScalarFieldEnum)[keyof typeof Learning_moduleScalarFieldEnum];

  export const Lesson_planScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    subject: 'subject';
    grade_level: 'grade_level';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Lesson_planScalarFieldEnum = (typeof Lesson_planScalarFieldEnum)[keyof typeof Lesson_planScalarFieldEnum];

  export const SchoolScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    zip_code: 'zip_code';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    school_id: 'school_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type educational_contentWhereInput = {
    AND?: educational_contentWhereInput | educational_contentWhereInput[];
    OR?: educational_contentWhereInput[];
    NOT?: educational_contentWhereInput | educational_contentWhereInput[];
    id?: UuidFilter<'educational_content'> | string;
    title?: StringFilter<'educational_content'> | string;
    description?: StringNullableFilter<'educational_content'> | string | null;
    subject?: StringFilter<'educational_content'> | string;
    grade_level?: IntFilter<'educational_content'> | number;
    user_id?: UuidFilter<'educational_content'> | string;
    created_at?: DateTimeFilter<'educational_content'> | Date | string;
    updated_at?: DateTimeFilter<'educational_content'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type educational_contentOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type educational_contentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: educational_contentWhereInput | educational_contentWhereInput[];
      OR?: educational_contentWhereInput[];
      NOT?: educational_contentWhereInput | educational_contentWhereInput[];
      title?: StringFilter<'educational_content'> | string;
      description?: StringNullableFilter<'educational_content'> | string | null;
      subject?: StringFilter<'educational_content'> | string;
      grade_level?: IntFilter<'educational_content'> | number;
      user_id?: UuidFilter<'educational_content'> | string;
      created_at?: DateTimeFilter<'educational_content'> | Date | string;
      updated_at?: DateTimeFilter<'educational_content'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type educational_contentOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: educational_contentCountOrderByAggregateInput;
    _avg?: educational_contentAvgOrderByAggregateInput;
    _max?: educational_contentMaxOrderByAggregateInput;
    _min?: educational_contentMinOrderByAggregateInput;
    _sum?: educational_contentSumOrderByAggregateInput;
  };

  export type educational_contentScalarWhereWithAggregatesInput = {
    AND?: educational_contentScalarWhereWithAggregatesInput | educational_contentScalarWhereWithAggregatesInput[];
    OR?: educational_contentScalarWhereWithAggregatesInput[];
    NOT?: educational_contentScalarWhereWithAggregatesInput | educational_contentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'educational_content'> | string;
    title?: StringWithAggregatesFilter<'educational_content'> | string;
    description?: StringNullableWithAggregatesFilter<'educational_content'> | string | null;
    subject?: StringWithAggregatesFilter<'educational_content'> | string;
    grade_level?: IntWithAggregatesFilter<'educational_content'> | number;
    user_id?: UuidWithAggregatesFilter<'educational_content'> | string;
    created_at?: DateTimeWithAggregatesFilter<'educational_content'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'educational_content'> | Date | string;
  };

  export type freelance_educatorWhereInput = {
    AND?: freelance_educatorWhereInput | freelance_educatorWhereInput[];
    OR?: freelance_educatorWhereInput[];
    NOT?: freelance_educatorWhereInput | freelance_educatorWhereInput[];
    id?: UuidFilter<'freelance_educator'> | string;
    user_id?: UuidFilter<'freelance_educator'> | string;
    expertise?: StringFilter<'freelance_educator'> | string;
    experience_years?: IntFilter<'freelance_educator'> | number;
    education_level?: StringFilter<'freelance_educator'> | string;
    created_at?: DateTimeFilter<'freelance_educator'> | Date | string;
    updated_at?: DateTimeFilter<'freelance_educator'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type freelance_educatorOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    expertise?: SortOrder;
    experience_years?: SortOrder;
    education_level?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type freelance_educatorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: freelance_educatorWhereInput | freelance_educatorWhereInput[];
      OR?: freelance_educatorWhereInput[];
      NOT?: freelance_educatorWhereInput | freelance_educatorWhereInput[];
      user_id?: UuidFilter<'freelance_educator'> | string;
      expertise?: StringFilter<'freelance_educator'> | string;
      experience_years?: IntFilter<'freelance_educator'> | number;
      education_level?: StringFilter<'freelance_educator'> | string;
      created_at?: DateTimeFilter<'freelance_educator'> | Date | string;
      updated_at?: DateTimeFilter<'freelance_educator'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type freelance_educatorOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    expertise?: SortOrder;
    experience_years?: SortOrder;
    education_level?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: freelance_educatorCountOrderByAggregateInput;
    _avg?: freelance_educatorAvgOrderByAggregateInput;
    _max?: freelance_educatorMaxOrderByAggregateInput;
    _min?: freelance_educatorMinOrderByAggregateInput;
    _sum?: freelance_educatorSumOrderByAggregateInput;
  };

  export type freelance_educatorScalarWhereWithAggregatesInput = {
    AND?: freelance_educatorScalarWhereWithAggregatesInput | freelance_educatorScalarWhereWithAggregatesInput[];
    OR?: freelance_educatorScalarWhereWithAggregatesInput[];
    NOT?: freelance_educatorScalarWhereWithAggregatesInput | freelance_educatorScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'freelance_educator'> | string;
    user_id?: UuidWithAggregatesFilter<'freelance_educator'> | string;
    expertise?: StringWithAggregatesFilter<'freelance_educator'> | string;
    experience_years?: IntWithAggregatesFilter<'freelance_educator'> | number;
    education_level?: StringWithAggregatesFilter<'freelance_educator'> | string;
    created_at?: DateTimeWithAggregatesFilter<'freelance_educator'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'freelance_educator'> | Date | string;
  };

  export type learning_moduleWhereInput = {
    AND?: learning_moduleWhereInput | learning_moduleWhereInput[];
    OR?: learning_moduleWhereInput[];
    NOT?: learning_moduleWhereInput | learning_moduleWhereInput[];
    id?: UuidFilter<'learning_module'> | string;
    title?: StringFilter<'learning_module'> | string;
    description?: StringNullableFilter<'learning_module'> | string | null;
    subject?: StringFilter<'learning_module'> | string;
    grade_level?: IntFilter<'learning_module'> | number;
    user_id?: UuidFilter<'learning_module'> | string;
    created_at?: DateTimeFilter<'learning_module'> | Date | string;
    updated_at?: DateTimeFilter<'learning_module'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type learning_moduleOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type learning_moduleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: learning_moduleWhereInput | learning_moduleWhereInput[];
      OR?: learning_moduleWhereInput[];
      NOT?: learning_moduleWhereInput | learning_moduleWhereInput[];
      title?: StringFilter<'learning_module'> | string;
      description?: StringNullableFilter<'learning_module'> | string | null;
      subject?: StringFilter<'learning_module'> | string;
      grade_level?: IntFilter<'learning_module'> | number;
      user_id?: UuidFilter<'learning_module'> | string;
      created_at?: DateTimeFilter<'learning_module'> | Date | string;
      updated_at?: DateTimeFilter<'learning_module'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type learning_moduleOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: learning_moduleCountOrderByAggregateInput;
    _avg?: learning_moduleAvgOrderByAggregateInput;
    _max?: learning_moduleMaxOrderByAggregateInput;
    _min?: learning_moduleMinOrderByAggregateInput;
    _sum?: learning_moduleSumOrderByAggregateInput;
  };

  export type learning_moduleScalarWhereWithAggregatesInput = {
    AND?: learning_moduleScalarWhereWithAggregatesInput | learning_moduleScalarWhereWithAggregatesInput[];
    OR?: learning_moduleScalarWhereWithAggregatesInput[];
    NOT?: learning_moduleScalarWhereWithAggregatesInput | learning_moduleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'learning_module'> | string;
    title?: StringWithAggregatesFilter<'learning_module'> | string;
    description?: StringNullableWithAggregatesFilter<'learning_module'> | string | null;
    subject?: StringWithAggregatesFilter<'learning_module'> | string;
    grade_level?: IntWithAggregatesFilter<'learning_module'> | number;
    user_id?: UuidWithAggregatesFilter<'learning_module'> | string;
    created_at?: DateTimeWithAggregatesFilter<'learning_module'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'learning_module'> | Date | string;
  };

  export type lesson_planWhereInput = {
    AND?: lesson_planWhereInput | lesson_planWhereInput[];
    OR?: lesson_planWhereInput[];
    NOT?: lesson_planWhereInput | lesson_planWhereInput[];
    id?: UuidFilter<'lesson_plan'> | string;
    title?: StringFilter<'lesson_plan'> | string;
    description?: StringNullableFilter<'lesson_plan'> | string | null;
    subject?: StringFilter<'lesson_plan'> | string;
    grade_level?: IntFilter<'lesson_plan'> | number;
    user_id?: UuidFilter<'lesson_plan'> | string;
    created_at?: DateTimeFilter<'lesson_plan'> | Date | string;
    updated_at?: DateTimeFilter<'lesson_plan'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type lesson_planOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type lesson_planWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: lesson_planWhereInput | lesson_planWhereInput[];
      OR?: lesson_planWhereInput[];
      NOT?: lesson_planWhereInput | lesson_planWhereInput[];
      title?: StringFilter<'lesson_plan'> | string;
      description?: StringNullableFilter<'lesson_plan'> | string | null;
      subject?: StringFilter<'lesson_plan'> | string;
      grade_level?: IntFilter<'lesson_plan'> | number;
      user_id?: UuidFilter<'lesson_plan'> | string;
      created_at?: DateTimeFilter<'lesson_plan'> | Date | string;
      updated_at?: DateTimeFilter<'lesson_plan'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type lesson_planOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: lesson_planCountOrderByAggregateInput;
    _avg?: lesson_planAvgOrderByAggregateInput;
    _max?: lesson_planMaxOrderByAggregateInput;
    _min?: lesson_planMinOrderByAggregateInput;
    _sum?: lesson_planSumOrderByAggregateInput;
  };

  export type lesson_planScalarWhereWithAggregatesInput = {
    AND?: lesson_planScalarWhereWithAggregatesInput | lesson_planScalarWhereWithAggregatesInput[];
    OR?: lesson_planScalarWhereWithAggregatesInput[];
    NOT?: lesson_planScalarWhereWithAggregatesInput | lesson_planScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'lesson_plan'> | string;
    title?: StringWithAggregatesFilter<'lesson_plan'> | string;
    description?: StringNullableWithAggregatesFilter<'lesson_plan'> | string | null;
    subject?: StringWithAggregatesFilter<'lesson_plan'> | string;
    grade_level?: IntWithAggregatesFilter<'lesson_plan'> | number;
    user_id?: UuidWithAggregatesFilter<'lesson_plan'> | string;
    created_at?: DateTimeWithAggregatesFilter<'lesson_plan'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'lesson_plan'> | Date | string;
  };

  export type schoolWhereInput = {
    AND?: schoolWhereInput | schoolWhereInput[];
    OR?: schoolWhereInput[];
    NOT?: schoolWhereInput | schoolWhereInput[];
    id?: UuidFilter<'school'> | string;
    description?: StringNullableFilter<'school'> | string | null;
    address?: StringNullableFilter<'school'> | string | null;
    city?: StringNullableFilter<'school'> | string | null;
    state?: StringNullableFilter<'school'> | string | null;
    zip_code?: StringNullableFilter<'school'> | string | null;
    name?: StringFilter<'school'> | string;
    created_at?: DateTimeFilter<'school'> | Date | string;
    updated_at?: DateTimeFilter<'school'> | Date | string;
    user?: UserListRelationFilter;
  };

  export type schoolOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByRelationAggregateInput;
  };

  export type schoolWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: schoolWhereInput | schoolWhereInput[];
      OR?: schoolWhereInput[];
      NOT?: schoolWhereInput | schoolWhereInput[];
      description?: StringNullableFilter<'school'> | string | null;
      address?: StringNullableFilter<'school'> | string | null;
      city?: StringNullableFilter<'school'> | string | null;
      state?: StringNullableFilter<'school'> | string | null;
      zip_code?: StringNullableFilter<'school'> | string | null;
      name?: StringFilter<'school'> | string;
      created_at?: DateTimeFilter<'school'> | Date | string;
      updated_at?: DateTimeFilter<'school'> | Date | string;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type schoolOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: schoolCountOrderByAggregateInput;
    _max?: schoolMaxOrderByAggregateInput;
    _min?: schoolMinOrderByAggregateInput;
  };

  export type schoolScalarWhereWithAggregatesInput = {
    AND?: schoolScalarWhereWithAggregatesInput | schoolScalarWhereWithAggregatesInput[];
    OR?: schoolScalarWhereWithAggregatesInput[];
    NOT?: schoolScalarWhereWithAggregatesInput | schoolScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'school'> | string;
    description?: StringNullableWithAggregatesFilter<'school'> | string | null;
    address?: StringNullableWithAggregatesFilter<'school'> | string | null;
    city?: StringNullableWithAggregatesFilter<'school'> | string | null;
    state?: StringNullableWithAggregatesFilter<'school'> | string | null;
    zip_code?: StringNullableWithAggregatesFilter<'school'> | string | null;
    name?: StringWithAggregatesFilter<'school'> | string;
    created_at?: DateTimeWithAggregatesFilter<'school'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'school'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    school_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    educational_content?: Educational_contentListRelationFilter;
    freelance_educator?: Freelance_educatorListRelationFilter;
    learning_module?: Learning_moduleListRelationFilter;
    lesson_plan?: Lesson_planListRelationFilter;
    school?: XOR<SchoolNullableRelationFilter, schoolWhereInput> | null;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    school_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    educational_content?: educational_contentOrderByRelationAggregateInput;
    freelance_educator?: freelance_educatorOrderByRelationAggregateInput;
    learning_module?: learning_moduleOrderByRelationAggregateInput;
    lesson_plan?: lesson_planOrderByRelationAggregateInput;
    school?: schoolOrderByWithRelationInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      school_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      educational_content?: Educational_contentListRelationFilter;
      freelance_educator?: Freelance_educatorListRelationFilter;
      learning_module?: Learning_moduleListRelationFilter;
      lesson_plan?: Lesson_planListRelationFilter;
      school?: XOR<SchoolNullableRelationFilter, schoolWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    school_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    school_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type educational_contentCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutEducational_contentInput;
  };

  export type educational_contentUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type educational_contentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutEducational_contentNestedInput;
  };

  export type educational_contentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type educational_contentCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type educational_contentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type educational_contentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type freelance_educatorCreateInput = {
    id?: string;
    expertise: string;
    experience_years: number;
    education_level: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutFreelance_educatorInput;
  };

  export type freelance_educatorUncheckedCreateInput = {
    id?: string;
    user_id: string;
    expertise: string;
    experience_years: number;
    education_level: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type freelance_educatorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expertise?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    education_level?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutFreelance_educatorNestedInput;
  };

  export type freelance_educatorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    expertise?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    education_level?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type freelance_educatorCreateManyInput = {
    id?: string;
    user_id: string;
    expertise: string;
    experience_years: number;
    education_level: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type freelance_educatorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expertise?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    education_level?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type freelance_educatorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    expertise?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    education_level?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type learning_moduleCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutLearning_moduleInput;
  };

  export type learning_moduleUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type learning_moduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutLearning_moduleNestedInput;
  };

  export type learning_moduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type learning_moduleCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type learning_moduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type learning_moduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type lesson_planCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutLesson_planInput;
  };

  export type lesson_planUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type lesson_planUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutLesson_planNestedInput;
  };

  export type lesson_planUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type lesson_planCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type lesson_planUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type lesson_planUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type schoolCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type schoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type schoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    educational_content?: educational_contentCreateNestedManyWithoutUserInput;
    freelance_educator?: freelance_educatorCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planCreateNestedManyWithoutUserInput;
    school?: schoolCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    school_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    educational_content?: educational_contentUncheckedCreateNestedManyWithoutUserInput;
    freelance_educator?: freelance_educatorUncheckedCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleUncheckedCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    educational_content?: educational_contentUpdateManyWithoutUserNestedInput;
    freelance_educator?: freelance_educatorUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUpdateManyWithoutUserNestedInput;
    school?: schoolUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    school_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    educational_content?: educational_contentUncheckedUpdateManyWithoutUserNestedInput;
    freelance_educator?: freelance_educatorUncheckedUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUncheckedUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    school_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    school_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type educational_contentCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type educational_contentAvgOrderByAggregateInput = {
    grade_level?: SortOrder;
  };

  export type educational_contentMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type educational_contentMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type educational_contentSumOrderByAggregateInput = {
    grade_level?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type freelance_educatorCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    expertise?: SortOrder;
    experience_years?: SortOrder;
    education_level?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type freelance_educatorAvgOrderByAggregateInput = {
    experience_years?: SortOrder;
  };

  export type freelance_educatorMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    expertise?: SortOrder;
    experience_years?: SortOrder;
    education_level?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type freelance_educatorMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    expertise?: SortOrder;
    experience_years?: SortOrder;
    education_level?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type freelance_educatorSumOrderByAggregateInput = {
    experience_years?: SortOrder;
  };

  export type learning_moduleCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type learning_moduleAvgOrderByAggregateInput = {
    grade_level?: SortOrder;
  };

  export type learning_moduleMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type learning_moduleMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type learning_moduleSumOrderByAggregateInput = {
    grade_level?: SortOrder;
  };

  export type lesson_planCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type lesson_planAvgOrderByAggregateInput = {
    grade_level?: SortOrder;
  };

  export type lesson_planMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type lesson_planMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type lesson_planSumOrderByAggregateInput = {
    grade_level?: SortOrder;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type schoolCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type schoolMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type schoolMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type Educational_contentListRelationFilter = {
    every?: educational_contentWhereInput;
    some?: educational_contentWhereInput;
    none?: educational_contentWhereInput;
  };

  export type Freelance_educatorListRelationFilter = {
    every?: freelance_educatorWhereInput;
    some?: freelance_educatorWhereInput;
    none?: freelance_educatorWhereInput;
  };

  export type Learning_moduleListRelationFilter = {
    every?: learning_moduleWhereInput;
    some?: learning_moduleWhereInput;
    none?: learning_moduleWhereInput;
  };

  export type Lesson_planListRelationFilter = {
    every?: lesson_planWhereInput;
    some?: lesson_planWhereInput;
    none?: lesson_planWhereInput;
  };

  export type SchoolNullableRelationFilter = {
    is?: schoolWhereInput | null;
    isNot?: schoolWhereInput | null;
  };

  export type educational_contentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type freelance_educatorOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type learning_moduleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type lesson_planOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    school_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    school_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    school_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type userCreateNestedOneWithoutEducational_contentInput = {
    create?: XOR<userCreateWithoutEducational_contentInput, userUncheckedCreateWithoutEducational_contentInput>;
    connectOrCreate?: userCreateOrConnectWithoutEducational_contentInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutEducational_contentNestedInput = {
    create?: XOR<userCreateWithoutEducational_contentInput, userUncheckedCreateWithoutEducational_contentInput>;
    connectOrCreate?: userCreateOrConnectWithoutEducational_contentInput;
    upsert?: userUpsertWithoutEducational_contentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutEducational_contentInput, userUpdateWithoutEducational_contentInput>,
      userUncheckedUpdateWithoutEducational_contentInput
    >;
  };

  export type userCreateNestedOneWithoutFreelance_educatorInput = {
    create?: XOR<userCreateWithoutFreelance_educatorInput, userUncheckedCreateWithoutFreelance_educatorInput>;
    connectOrCreate?: userCreateOrConnectWithoutFreelance_educatorInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutFreelance_educatorNestedInput = {
    create?: XOR<userCreateWithoutFreelance_educatorInput, userUncheckedCreateWithoutFreelance_educatorInput>;
    connectOrCreate?: userCreateOrConnectWithoutFreelance_educatorInput;
    upsert?: userUpsertWithoutFreelance_educatorInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutFreelance_educatorInput, userUpdateWithoutFreelance_educatorInput>,
      userUncheckedUpdateWithoutFreelance_educatorInput
    >;
  };

  export type userCreateNestedOneWithoutLearning_moduleInput = {
    create?: XOR<userCreateWithoutLearning_moduleInput, userUncheckedCreateWithoutLearning_moduleInput>;
    connectOrCreate?: userCreateOrConnectWithoutLearning_moduleInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutLearning_moduleNestedInput = {
    create?: XOR<userCreateWithoutLearning_moduleInput, userUncheckedCreateWithoutLearning_moduleInput>;
    connectOrCreate?: userCreateOrConnectWithoutLearning_moduleInput;
    upsert?: userUpsertWithoutLearning_moduleInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutLearning_moduleInput, userUpdateWithoutLearning_moduleInput>,
      userUncheckedUpdateWithoutLearning_moduleInput
    >;
  };

  export type userCreateNestedOneWithoutLesson_planInput = {
    create?: XOR<userCreateWithoutLesson_planInput, userUncheckedCreateWithoutLesson_planInput>;
    connectOrCreate?: userCreateOrConnectWithoutLesson_planInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutLesson_planNestedInput = {
    create?: XOR<userCreateWithoutLesson_planInput, userUncheckedCreateWithoutLesson_planInput>;
    connectOrCreate?: userCreateOrConnectWithoutLesson_planInput;
    upsert?: userUpsertWithoutLesson_planInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutLesson_planInput, userUpdateWithoutLesson_planInput>,
      userUncheckedUpdateWithoutLesson_planInput
    >;
  };

  export type userCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>
      | userCreateWithoutSchoolInput[]
      | userUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: userCreateOrConnectWithoutSchoolInput | userCreateOrConnectWithoutSchoolInput[];
    createMany?: userCreateManySchoolInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>
      | userCreateWithoutSchoolInput[]
      | userUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: userCreateOrConnectWithoutSchoolInput | userCreateOrConnectWithoutSchoolInput[];
    createMany?: userCreateManySchoolInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>
      | userCreateWithoutSchoolInput[]
      | userUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: userCreateOrConnectWithoutSchoolInput | userCreateOrConnectWithoutSchoolInput[];
    upsert?: userUpsertWithWhereUniqueWithoutSchoolInput | userUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: userCreateManySchoolInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutSchoolInput | userUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: userUpdateManyWithWhereWithoutSchoolInput | userUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>
      | userCreateWithoutSchoolInput[]
      | userUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: userCreateOrConnectWithoutSchoolInput | userCreateOrConnectWithoutSchoolInput[];
    upsert?: userUpsertWithWhereUniqueWithoutSchoolInput | userUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: userCreateManySchoolInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutSchoolInput | userUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: userUpdateManyWithWhereWithoutSchoolInput | userUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type educational_contentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<educational_contentCreateWithoutUserInput, educational_contentUncheckedCreateWithoutUserInput>
      | educational_contentCreateWithoutUserInput[]
      | educational_contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | educational_contentCreateOrConnectWithoutUserInput
      | educational_contentCreateOrConnectWithoutUserInput[];
    createMany?: educational_contentCreateManyUserInputEnvelope;
    connect?: educational_contentWhereUniqueInput | educational_contentWhereUniqueInput[];
  };

  export type freelance_educatorCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<freelance_educatorCreateWithoutUserInput, freelance_educatorUncheckedCreateWithoutUserInput>
      | freelance_educatorCreateWithoutUserInput[]
      | freelance_educatorUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | freelance_educatorCreateOrConnectWithoutUserInput
      | freelance_educatorCreateOrConnectWithoutUserInput[];
    createMany?: freelance_educatorCreateManyUserInputEnvelope;
    connect?: freelance_educatorWhereUniqueInput | freelance_educatorWhereUniqueInput[];
  };

  export type learning_moduleCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<learning_moduleCreateWithoutUserInput, learning_moduleUncheckedCreateWithoutUserInput>
      | learning_moduleCreateWithoutUserInput[]
      | learning_moduleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: learning_moduleCreateOrConnectWithoutUserInput | learning_moduleCreateOrConnectWithoutUserInput[];
    createMany?: learning_moduleCreateManyUserInputEnvelope;
    connect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
  };

  export type lesson_planCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<lesson_planCreateWithoutUserInput, lesson_planUncheckedCreateWithoutUserInput>
      | lesson_planCreateWithoutUserInput[]
      | lesson_planUncheckedCreateWithoutUserInput[];
    connectOrCreate?: lesson_planCreateOrConnectWithoutUserInput | lesson_planCreateOrConnectWithoutUserInput[];
    createMany?: lesson_planCreateManyUserInputEnvelope;
    connect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
  };

  export type schoolCreateNestedOneWithoutUserInput = {
    create?: XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput;
    connect?: schoolWhereUniqueInput;
  };

  export type educational_contentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<educational_contentCreateWithoutUserInput, educational_contentUncheckedCreateWithoutUserInput>
      | educational_contentCreateWithoutUserInput[]
      | educational_contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | educational_contentCreateOrConnectWithoutUserInput
      | educational_contentCreateOrConnectWithoutUserInput[];
    createMany?: educational_contentCreateManyUserInputEnvelope;
    connect?: educational_contentWhereUniqueInput | educational_contentWhereUniqueInput[];
  };

  export type freelance_educatorUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<freelance_educatorCreateWithoutUserInput, freelance_educatorUncheckedCreateWithoutUserInput>
      | freelance_educatorCreateWithoutUserInput[]
      | freelance_educatorUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | freelance_educatorCreateOrConnectWithoutUserInput
      | freelance_educatorCreateOrConnectWithoutUserInput[];
    createMany?: freelance_educatorCreateManyUserInputEnvelope;
    connect?: freelance_educatorWhereUniqueInput | freelance_educatorWhereUniqueInput[];
  };

  export type learning_moduleUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<learning_moduleCreateWithoutUserInput, learning_moduleUncheckedCreateWithoutUserInput>
      | learning_moduleCreateWithoutUserInput[]
      | learning_moduleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: learning_moduleCreateOrConnectWithoutUserInput | learning_moduleCreateOrConnectWithoutUserInput[];
    createMany?: learning_moduleCreateManyUserInputEnvelope;
    connect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
  };

  export type lesson_planUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<lesson_planCreateWithoutUserInput, lesson_planUncheckedCreateWithoutUserInput>
      | lesson_planCreateWithoutUserInput[]
      | lesson_planUncheckedCreateWithoutUserInput[];
    connectOrCreate?: lesson_planCreateOrConnectWithoutUserInput | lesson_planCreateOrConnectWithoutUserInput[];
    createMany?: lesson_planCreateManyUserInputEnvelope;
    connect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
  };

  export type educational_contentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<educational_contentCreateWithoutUserInput, educational_contentUncheckedCreateWithoutUserInput>
      | educational_contentCreateWithoutUserInput[]
      | educational_contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | educational_contentCreateOrConnectWithoutUserInput
      | educational_contentCreateOrConnectWithoutUserInput[];
    upsert?:
      | educational_contentUpsertWithWhereUniqueWithoutUserInput
      | educational_contentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: educational_contentCreateManyUserInputEnvelope;
    set?: educational_contentWhereUniqueInput | educational_contentWhereUniqueInput[];
    disconnect?: educational_contentWhereUniqueInput | educational_contentWhereUniqueInput[];
    delete?: educational_contentWhereUniqueInput | educational_contentWhereUniqueInput[];
    connect?: educational_contentWhereUniqueInput | educational_contentWhereUniqueInput[];
    update?:
      | educational_contentUpdateWithWhereUniqueWithoutUserInput
      | educational_contentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | educational_contentUpdateManyWithWhereWithoutUserInput
      | educational_contentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: educational_contentScalarWhereInput | educational_contentScalarWhereInput[];
  };

  export type freelance_educatorUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<freelance_educatorCreateWithoutUserInput, freelance_educatorUncheckedCreateWithoutUserInput>
      | freelance_educatorCreateWithoutUserInput[]
      | freelance_educatorUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | freelance_educatorCreateOrConnectWithoutUserInput
      | freelance_educatorCreateOrConnectWithoutUserInput[];
    upsert?:
      | freelance_educatorUpsertWithWhereUniqueWithoutUserInput
      | freelance_educatorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: freelance_educatorCreateManyUserInputEnvelope;
    set?: freelance_educatorWhereUniqueInput | freelance_educatorWhereUniqueInput[];
    disconnect?: freelance_educatorWhereUniqueInput | freelance_educatorWhereUniqueInput[];
    delete?: freelance_educatorWhereUniqueInput | freelance_educatorWhereUniqueInput[];
    connect?: freelance_educatorWhereUniqueInput | freelance_educatorWhereUniqueInput[];
    update?:
      | freelance_educatorUpdateWithWhereUniqueWithoutUserInput
      | freelance_educatorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | freelance_educatorUpdateManyWithWhereWithoutUserInput
      | freelance_educatorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: freelance_educatorScalarWhereInput | freelance_educatorScalarWhereInput[];
  };

  export type learning_moduleUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<learning_moduleCreateWithoutUserInput, learning_moduleUncheckedCreateWithoutUserInput>
      | learning_moduleCreateWithoutUserInput[]
      | learning_moduleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: learning_moduleCreateOrConnectWithoutUserInput | learning_moduleCreateOrConnectWithoutUserInput[];
    upsert?:
      | learning_moduleUpsertWithWhereUniqueWithoutUserInput
      | learning_moduleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: learning_moduleCreateManyUserInputEnvelope;
    set?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    disconnect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    delete?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    connect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    update?:
      | learning_moduleUpdateWithWhereUniqueWithoutUserInput
      | learning_moduleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | learning_moduleUpdateManyWithWhereWithoutUserInput
      | learning_moduleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: learning_moduleScalarWhereInput | learning_moduleScalarWhereInput[];
  };

  export type lesson_planUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<lesson_planCreateWithoutUserInput, lesson_planUncheckedCreateWithoutUserInput>
      | lesson_planCreateWithoutUserInput[]
      | lesson_planUncheckedCreateWithoutUserInput[];
    connectOrCreate?: lesson_planCreateOrConnectWithoutUserInput | lesson_planCreateOrConnectWithoutUserInput[];
    upsert?: lesson_planUpsertWithWhereUniqueWithoutUserInput | lesson_planUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: lesson_planCreateManyUserInputEnvelope;
    set?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    disconnect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    delete?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    connect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    update?: lesson_planUpdateWithWhereUniqueWithoutUserInput | lesson_planUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: lesson_planUpdateManyWithWhereWithoutUserInput | lesson_planUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: lesson_planScalarWhereInput | lesson_planScalarWhereInput[];
  };

  export type schoolUpdateOneWithoutUserNestedInput = {
    create?: XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput;
    upsert?: schoolUpsertWithoutUserInput;
    disconnect?: schoolWhereInput | boolean;
    delete?: schoolWhereInput | boolean;
    connect?: schoolWhereUniqueInput;
    update?: XOR<
      XOR<schoolUpdateToOneWithWhereWithoutUserInput, schoolUpdateWithoutUserInput>,
      schoolUncheckedUpdateWithoutUserInput
    >;
  };

  export type educational_contentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<educational_contentCreateWithoutUserInput, educational_contentUncheckedCreateWithoutUserInput>
      | educational_contentCreateWithoutUserInput[]
      | educational_contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | educational_contentCreateOrConnectWithoutUserInput
      | educational_contentCreateOrConnectWithoutUserInput[];
    upsert?:
      | educational_contentUpsertWithWhereUniqueWithoutUserInput
      | educational_contentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: educational_contentCreateManyUserInputEnvelope;
    set?: educational_contentWhereUniqueInput | educational_contentWhereUniqueInput[];
    disconnect?: educational_contentWhereUniqueInput | educational_contentWhereUniqueInput[];
    delete?: educational_contentWhereUniqueInput | educational_contentWhereUniqueInput[];
    connect?: educational_contentWhereUniqueInput | educational_contentWhereUniqueInput[];
    update?:
      | educational_contentUpdateWithWhereUniqueWithoutUserInput
      | educational_contentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | educational_contentUpdateManyWithWhereWithoutUserInput
      | educational_contentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: educational_contentScalarWhereInput | educational_contentScalarWhereInput[];
  };

  export type freelance_educatorUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<freelance_educatorCreateWithoutUserInput, freelance_educatorUncheckedCreateWithoutUserInput>
      | freelance_educatorCreateWithoutUserInput[]
      | freelance_educatorUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | freelance_educatorCreateOrConnectWithoutUserInput
      | freelance_educatorCreateOrConnectWithoutUserInput[];
    upsert?:
      | freelance_educatorUpsertWithWhereUniqueWithoutUserInput
      | freelance_educatorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: freelance_educatorCreateManyUserInputEnvelope;
    set?: freelance_educatorWhereUniqueInput | freelance_educatorWhereUniqueInput[];
    disconnect?: freelance_educatorWhereUniqueInput | freelance_educatorWhereUniqueInput[];
    delete?: freelance_educatorWhereUniqueInput | freelance_educatorWhereUniqueInput[];
    connect?: freelance_educatorWhereUniqueInput | freelance_educatorWhereUniqueInput[];
    update?:
      | freelance_educatorUpdateWithWhereUniqueWithoutUserInput
      | freelance_educatorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | freelance_educatorUpdateManyWithWhereWithoutUserInput
      | freelance_educatorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: freelance_educatorScalarWhereInput | freelance_educatorScalarWhereInput[];
  };

  export type learning_moduleUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<learning_moduleCreateWithoutUserInput, learning_moduleUncheckedCreateWithoutUserInput>
      | learning_moduleCreateWithoutUserInput[]
      | learning_moduleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: learning_moduleCreateOrConnectWithoutUserInput | learning_moduleCreateOrConnectWithoutUserInput[];
    upsert?:
      | learning_moduleUpsertWithWhereUniqueWithoutUserInput
      | learning_moduleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: learning_moduleCreateManyUserInputEnvelope;
    set?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    disconnect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    delete?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    connect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    update?:
      | learning_moduleUpdateWithWhereUniqueWithoutUserInput
      | learning_moduleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | learning_moduleUpdateManyWithWhereWithoutUserInput
      | learning_moduleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: learning_moduleScalarWhereInput | learning_moduleScalarWhereInput[];
  };

  export type lesson_planUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<lesson_planCreateWithoutUserInput, lesson_planUncheckedCreateWithoutUserInput>
      | lesson_planCreateWithoutUserInput[]
      | lesson_planUncheckedCreateWithoutUserInput[];
    connectOrCreate?: lesson_planCreateOrConnectWithoutUserInput | lesson_planCreateOrConnectWithoutUserInput[];
    upsert?: lesson_planUpsertWithWhereUniqueWithoutUserInput | lesson_planUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: lesson_planCreateManyUserInputEnvelope;
    set?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    disconnect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    delete?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    connect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    update?: lesson_planUpdateWithWhereUniqueWithoutUserInput | lesson_planUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: lesson_planUpdateManyWithWhereWithoutUserInput | lesson_planUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: lesson_planScalarWhereInput | lesson_planScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type userCreateWithoutEducational_contentInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    freelance_educator?: freelance_educatorCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planCreateNestedManyWithoutUserInput;
    school?: schoolCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutEducational_contentInput = {
    id?: string;
    email: string;
    school_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    freelance_educator?: freelance_educatorUncheckedCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleUncheckedCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutEducational_contentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutEducational_contentInput, userUncheckedCreateWithoutEducational_contentInput>;
  };

  export type userUpsertWithoutEducational_contentInput = {
    update: XOR<userUpdateWithoutEducational_contentInput, userUncheckedUpdateWithoutEducational_contentInput>;
    create: XOR<userCreateWithoutEducational_contentInput, userUncheckedCreateWithoutEducational_contentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutEducational_contentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutEducational_contentInput, userUncheckedUpdateWithoutEducational_contentInput>;
  };

  export type userUpdateWithoutEducational_contentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    freelance_educator?: freelance_educatorUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUpdateManyWithoutUserNestedInput;
    school?: schoolUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutEducational_contentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    school_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    freelance_educator?: freelance_educatorUncheckedUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUncheckedUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutFreelance_educatorInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    educational_content?: educational_contentCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planCreateNestedManyWithoutUserInput;
    school?: schoolCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutFreelance_educatorInput = {
    id?: string;
    email: string;
    school_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    educational_content?: educational_contentUncheckedCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleUncheckedCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutFreelance_educatorInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutFreelance_educatorInput, userUncheckedCreateWithoutFreelance_educatorInput>;
  };

  export type userUpsertWithoutFreelance_educatorInput = {
    update: XOR<userUpdateWithoutFreelance_educatorInput, userUncheckedUpdateWithoutFreelance_educatorInput>;
    create: XOR<userCreateWithoutFreelance_educatorInput, userUncheckedCreateWithoutFreelance_educatorInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutFreelance_educatorInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutFreelance_educatorInput, userUncheckedUpdateWithoutFreelance_educatorInput>;
  };

  export type userUpdateWithoutFreelance_educatorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    educational_content?: educational_contentUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUpdateManyWithoutUserNestedInput;
    school?: schoolUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutFreelance_educatorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    school_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    educational_content?: educational_contentUncheckedUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUncheckedUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutLearning_moduleInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    educational_content?: educational_contentCreateNestedManyWithoutUserInput;
    freelance_educator?: freelance_educatorCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planCreateNestedManyWithoutUserInput;
    school?: schoolCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutLearning_moduleInput = {
    id?: string;
    email: string;
    school_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    educational_content?: educational_contentUncheckedCreateNestedManyWithoutUserInput;
    freelance_educator?: freelance_educatorUncheckedCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutLearning_moduleInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutLearning_moduleInput, userUncheckedCreateWithoutLearning_moduleInput>;
  };

  export type userUpsertWithoutLearning_moduleInput = {
    update: XOR<userUpdateWithoutLearning_moduleInput, userUncheckedUpdateWithoutLearning_moduleInput>;
    create: XOR<userCreateWithoutLearning_moduleInput, userUncheckedCreateWithoutLearning_moduleInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutLearning_moduleInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutLearning_moduleInput, userUncheckedUpdateWithoutLearning_moduleInput>;
  };

  export type userUpdateWithoutLearning_moduleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    educational_content?: educational_contentUpdateManyWithoutUserNestedInput;
    freelance_educator?: freelance_educatorUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUpdateManyWithoutUserNestedInput;
    school?: schoolUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutLearning_moduleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    school_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    educational_content?: educational_contentUncheckedUpdateManyWithoutUserNestedInput;
    freelance_educator?: freelance_educatorUncheckedUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutLesson_planInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    educational_content?: educational_contentCreateNestedManyWithoutUserInput;
    freelance_educator?: freelance_educatorCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleCreateNestedManyWithoutUserInput;
    school?: schoolCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutLesson_planInput = {
    id?: string;
    email: string;
    school_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    educational_content?: educational_contentUncheckedCreateNestedManyWithoutUserInput;
    freelance_educator?: freelance_educatorUncheckedCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutLesson_planInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutLesson_planInput, userUncheckedCreateWithoutLesson_planInput>;
  };

  export type userUpsertWithoutLesson_planInput = {
    update: XOR<userUpdateWithoutLesson_planInput, userUncheckedUpdateWithoutLesson_planInput>;
    create: XOR<userCreateWithoutLesson_planInput, userUncheckedCreateWithoutLesson_planInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutLesson_planInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutLesson_planInput, userUncheckedUpdateWithoutLesson_planInput>;
  };

  export type userUpdateWithoutLesson_planInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    educational_content?: educational_contentUpdateManyWithoutUserNestedInput;
    freelance_educator?: freelance_educatorUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUpdateManyWithoutUserNestedInput;
    school?: schoolUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutLesson_planInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    school_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    educational_content?: educational_contentUncheckedUpdateManyWithoutUserNestedInput;
    freelance_educator?: freelance_educatorUncheckedUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutSchoolInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    educational_content?: educational_contentCreateNestedManyWithoutUserInput;
    freelance_educator?: freelance_educatorCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutSchoolInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    educational_content?: educational_contentUncheckedCreateNestedManyWithoutUserInput;
    freelance_educator?: freelance_educatorUncheckedCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleUncheckedCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutSchoolInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
  };

  export type userCreateManySchoolInputEnvelope = {
    data: userCreateManySchoolInput | userCreateManySchoolInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithWhereUniqueWithoutSchoolInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutSchoolInput, userUncheckedUpdateWithoutSchoolInput>;
    create: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
  };

  export type userUpdateWithWhereUniqueWithoutSchoolInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutSchoolInput, userUncheckedUpdateWithoutSchoolInput>;
  };

  export type userUpdateManyWithWhereWithoutSchoolInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutSchoolInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    school_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type educational_contentCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type educational_contentUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type educational_contentCreateOrConnectWithoutUserInput = {
    where: educational_contentWhereUniqueInput;
    create: XOR<educational_contentCreateWithoutUserInput, educational_contentUncheckedCreateWithoutUserInput>;
  };

  export type educational_contentCreateManyUserInputEnvelope = {
    data: educational_contentCreateManyUserInput | educational_contentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type freelance_educatorCreateWithoutUserInput = {
    id?: string;
    expertise: string;
    experience_years: number;
    education_level: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type freelance_educatorUncheckedCreateWithoutUserInput = {
    id?: string;
    expertise: string;
    experience_years: number;
    education_level: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type freelance_educatorCreateOrConnectWithoutUserInput = {
    where: freelance_educatorWhereUniqueInput;
    create: XOR<freelance_educatorCreateWithoutUserInput, freelance_educatorUncheckedCreateWithoutUserInput>;
  };

  export type freelance_educatorCreateManyUserInputEnvelope = {
    data: freelance_educatorCreateManyUserInput | freelance_educatorCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type learning_moduleCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type learning_moduleUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type learning_moduleCreateOrConnectWithoutUserInput = {
    where: learning_moduleWhereUniqueInput;
    create: XOR<learning_moduleCreateWithoutUserInput, learning_moduleUncheckedCreateWithoutUserInput>;
  };

  export type learning_moduleCreateManyUserInputEnvelope = {
    data: learning_moduleCreateManyUserInput | learning_moduleCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type lesson_planCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type lesson_planUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type lesson_planCreateOrConnectWithoutUserInput = {
    where: lesson_planWhereUniqueInput;
    create: XOR<lesson_planCreateWithoutUserInput, lesson_planUncheckedCreateWithoutUserInput>;
  };

  export type lesson_planCreateManyUserInputEnvelope = {
    data: lesson_planCreateManyUserInput | lesson_planCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type schoolCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type schoolUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type schoolCreateOrConnectWithoutUserInput = {
    where: schoolWhereUniqueInput;
    create: XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>;
  };

  export type educational_contentUpsertWithWhereUniqueWithoutUserInput = {
    where: educational_contentWhereUniqueInput;
    update: XOR<educational_contentUpdateWithoutUserInput, educational_contentUncheckedUpdateWithoutUserInput>;
    create: XOR<educational_contentCreateWithoutUserInput, educational_contentUncheckedCreateWithoutUserInput>;
  };

  export type educational_contentUpdateWithWhereUniqueWithoutUserInput = {
    where: educational_contentWhereUniqueInput;
    data: XOR<educational_contentUpdateWithoutUserInput, educational_contentUncheckedUpdateWithoutUserInput>;
  };

  export type educational_contentUpdateManyWithWhereWithoutUserInput = {
    where: educational_contentScalarWhereInput;
    data: XOR<educational_contentUpdateManyMutationInput, educational_contentUncheckedUpdateManyWithoutUserInput>;
  };

  export type educational_contentScalarWhereInput = {
    AND?: educational_contentScalarWhereInput | educational_contentScalarWhereInput[];
    OR?: educational_contentScalarWhereInput[];
    NOT?: educational_contentScalarWhereInput | educational_contentScalarWhereInput[];
    id?: UuidFilter<'educational_content'> | string;
    title?: StringFilter<'educational_content'> | string;
    description?: StringNullableFilter<'educational_content'> | string | null;
    subject?: StringFilter<'educational_content'> | string;
    grade_level?: IntFilter<'educational_content'> | number;
    user_id?: UuidFilter<'educational_content'> | string;
    created_at?: DateTimeFilter<'educational_content'> | Date | string;
    updated_at?: DateTimeFilter<'educational_content'> | Date | string;
  };

  export type freelance_educatorUpsertWithWhereUniqueWithoutUserInput = {
    where: freelance_educatorWhereUniqueInput;
    update: XOR<freelance_educatorUpdateWithoutUserInput, freelance_educatorUncheckedUpdateWithoutUserInput>;
    create: XOR<freelance_educatorCreateWithoutUserInput, freelance_educatorUncheckedCreateWithoutUserInput>;
  };

  export type freelance_educatorUpdateWithWhereUniqueWithoutUserInput = {
    where: freelance_educatorWhereUniqueInput;
    data: XOR<freelance_educatorUpdateWithoutUserInput, freelance_educatorUncheckedUpdateWithoutUserInput>;
  };

  export type freelance_educatorUpdateManyWithWhereWithoutUserInput = {
    where: freelance_educatorScalarWhereInput;
    data: XOR<freelance_educatorUpdateManyMutationInput, freelance_educatorUncheckedUpdateManyWithoutUserInput>;
  };

  export type freelance_educatorScalarWhereInput = {
    AND?: freelance_educatorScalarWhereInput | freelance_educatorScalarWhereInput[];
    OR?: freelance_educatorScalarWhereInput[];
    NOT?: freelance_educatorScalarWhereInput | freelance_educatorScalarWhereInput[];
    id?: UuidFilter<'freelance_educator'> | string;
    user_id?: UuidFilter<'freelance_educator'> | string;
    expertise?: StringFilter<'freelance_educator'> | string;
    experience_years?: IntFilter<'freelance_educator'> | number;
    education_level?: StringFilter<'freelance_educator'> | string;
    created_at?: DateTimeFilter<'freelance_educator'> | Date | string;
    updated_at?: DateTimeFilter<'freelance_educator'> | Date | string;
  };

  export type learning_moduleUpsertWithWhereUniqueWithoutUserInput = {
    where: learning_moduleWhereUniqueInput;
    update: XOR<learning_moduleUpdateWithoutUserInput, learning_moduleUncheckedUpdateWithoutUserInput>;
    create: XOR<learning_moduleCreateWithoutUserInput, learning_moduleUncheckedCreateWithoutUserInput>;
  };

  export type learning_moduleUpdateWithWhereUniqueWithoutUserInput = {
    where: learning_moduleWhereUniqueInput;
    data: XOR<learning_moduleUpdateWithoutUserInput, learning_moduleUncheckedUpdateWithoutUserInput>;
  };

  export type learning_moduleUpdateManyWithWhereWithoutUserInput = {
    where: learning_moduleScalarWhereInput;
    data: XOR<learning_moduleUpdateManyMutationInput, learning_moduleUncheckedUpdateManyWithoutUserInput>;
  };

  export type learning_moduleScalarWhereInput = {
    AND?: learning_moduleScalarWhereInput | learning_moduleScalarWhereInput[];
    OR?: learning_moduleScalarWhereInput[];
    NOT?: learning_moduleScalarWhereInput | learning_moduleScalarWhereInput[];
    id?: UuidFilter<'learning_module'> | string;
    title?: StringFilter<'learning_module'> | string;
    description?: StringNullableFilter<'learning_module'> | string | null;
    subject?: StringFilter<'learning_module'> | string;
    grade_level?: IntFilter<'learning_module'> | number;
    user_id?: UuidFilter<'learning_module'> | string;
    created_at?: DateTimeFilter<'learning_module'> | Date | string;
    updated_at?: DateTimeFilter<'learning_module'> | Date | string;
  };

  export type lesson_planUpsertWithWhereUniqueWithoutUserInput = {
    where: lesson_planWhereUniqueInput;
    update: XOR<lesson_planUpdateWithoutUserInput, lesson_planUncheckedUpdateWithoutUserInput>;
    create: XOR<lesson_planCreateWithoutUserInput, lesson_planUncheckedCreateWithoutUserInput>;
  };

  export type lesson_planUpdateWithWhereUniqueWithoutUserInput = {
    where: lesson_planWhereUniqueInput;
    data: XOR<lesson_planUpdateWithoutUserInput, lesson_planUncheckedUpdateWithoutUserInput>;
  };

  export type lesson_planUpdateManyWithWhereWithoutUserInput = {
    where: lesson_planScalarWhereInput;
    data: XOR<lesson_planUpdateManyMutationInput, lesson_planUncheckedUpdateManyWithoutUserInput>;
  };

  export type lesson_planScalarWhereInput = {
    AND?: lesson_planScalarWhereInput | lesson_planScalarWhereInput[];
    OR?: lesson_planScalarWhereInput[];
    NOT?: lesson_planScalarWhereInput | lesson_planScalarWhereInput[];
    id?: UuidFilter<'lesson_plan'> | string;
    title?: StringFilter<'lesson_plan'> | string;
    description?: StringNullableFilter<'lesson_plan'> | string | null;
    subject?: StringFilter<'lesson_plan'> | string;
    grade_level?: IntFilter<'lesson_plan'> | number;
    user_id?: UuidFilter<'lesson_plan'> | string;
    created_at?: DateTimeFilter<'lesson_plan'> | Date | string;
    updated_at?: DateTimeFilter<'lesson_plan'> | Date | string;
  };

  export type schoolUpsertWithoutUserInput = {
    update: XOR<schoolUpdateWithoutUserInput, schoolUncheckedUpdateWithoutUserInput>;
    create: XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>;
    where?: schoolWhereInput;
  };

  export type schoolUpdateToOneWithWhereWithoutUserInput = {
    where?: schoolWhereInput;
    data: XOR<schoolUpdateWithoutUserInput, schoolUncheckedUpdateWithoutUserInput>;
  };

  export type schoolUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type schoolUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManySchoolInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    educational_content?: educational_contentUpdateManyWithoutUserNestedInput;
    freelance_educator?: freelance_educatorUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    educational_content?: educational_contentUncheckedUpdateManyWithoutUserNestedInput;
    freelance_educator?: freelance_educatorUncheckedUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUncheckedUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type educational_contentCreateManyUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type freelance_educatorCreateManyUserInput = {
    id?: string;
    expertise: string;
    experience_years: number;
    education_level: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type learning_moduleCreateManyUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type lesson_planCreateManyUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type educational_contentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type educational_contentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type educational_contentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type freelance_educatorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expertise?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    education_level?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type freelance_educatorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expertise?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    education_level?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type freelance_educatorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expertise?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    education_level?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type learning_moduleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type learning_moduleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type learning_moduleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type lesson_planUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type lesson_planUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type lesson_planUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use SchoolCountOutputTypeDefaultArgs instead
   */
  export type SchoolCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    SchoolCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use educational_contentDefaultArgs instead
   */
  export type educational_contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    educational_contentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use freelance_educatorDefaultArgs instead
   */
  export type freelance_educatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    freelance_educatorDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use learning_moduleDefaultArgs instead
   */
  export type learning_moduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    learning_moduleDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use lesson_planDefaultArgs instead
   */
  export type lesson_planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    lesson_planDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use schoolDefaultArgs instead
   */
  export type schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    schoolDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
