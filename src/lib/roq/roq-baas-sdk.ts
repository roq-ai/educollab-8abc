/* eslint-disable */
import { type CheckSelect, fetcher, marshal, makeUrl } from '@roq/client';
import type {
  Prisma,
  educational_content,
  freelance_educator,
  learning_module,
  lesson_plan,
  school,
  user,
} from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';

export type RequestOptions = Record<string, any>;

interface Educational_contentSDK {
  create: <
    T extends Prisma.educational_contentCreateArgs,
    R extends CheckSelect<T, educational_content, Prisma.educational_contentGetPayload<T>>,
    U extends Omit<Prisma.educational_contentCreateArgs, 'data'> & {
      data: Prisma.educational_contentUncheckedCreateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.educational_contentCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.educational_contentCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.educational_contentUpdateArgs,
    R extends Prisma.educational_contentGetPayload<T>,
    U extends Omit<Prisma.educational_contentUpdateArgs, 'data'> & {
      data: Prisma.educational_contentUncheckedUpdateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.educational_contentUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.educational_contentUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.educational_contentUpsertArgs, R extends Prisma.educational_contentGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.educational_contentUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.educational_contentDeleteArgs, R extends Prisma.educational_contentGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.educational_contentDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.educational_contentDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.educational_contentDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.educational_contentFindManyArgs,
    R extends GetFindResult<Prisma.$educational_contentPayload<DefaultArgs>, T>[],
  >(
    args?: Prisma.SelectSubset<T, Prisma.educational_contentFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.educational_contentCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.educational_contentCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.educational_contentFindManyArgs,
    R extends GetFindResult<Prisma.$educational_contentPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.educational_contentFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.educational_contentFindFirstArgs,
    R extends GetFindResult<Prisma.$educational_contentPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.educational_contentFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface Freelance_educatorSDK {
  create: <
    T extends Prisma.freelance_educatorCreateArgs,
    R extends CheckSelect<T, freelance_educator, Prisma.freelance_educatorGetPayload<T>>,
    U extends Omit<Prisma.freelance_educatorCreateArgs, 'data'> & {
      data: Prisma.freelance_educatorUncheckedCreateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.freelance_educatorCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.freelance_educatorCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.freelance_educatorUpdateArgs,
    R extends Prisma.freelance_educatorGetPayload<T>,
    U extends Omit<Prisma.freelance_educatorUpdateArgs, 'data'> & {
      data: Prisma.freelance_educatorUncheckedUpdateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.freelance_educatorUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.freelance_educatorUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.freelance_educatorUpsertArgs, R extends Prisma.freelance_educatorGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.freelance_educatorUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.freelance_educatorDeleteArgs, R extends Prisma.freelance_educatorGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.freelance_educatorDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.freelance_educatorDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.freelance_educatorDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.freelance_educatorFindManyArgs,
    R extends GetFindResult<Prisma.$freelance_educatorPayload<DefaultArgs>, T>[],
  >(
    args?: Prisma.SelectSubset<T, Prisma.freelance_educatorFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.freelance_educatorCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.freelance_educatorCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.freelance_educatorFindManyArgs,
    R extends GetFindResult<Prisma.$freelance_educatorPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.freelance_educatorFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.freelance_educatorFindFirstArgs,
    R extends GetFindResult<Prisma.$freelance_educatorPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.freelance_educatorFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface Learning_moduleSDK {
  create: <
    T extends Prisma.learning_moduleCreateArgs,
    R extends CheckSelect<T, learning_module, Prisma.learning_moduleGetPayload<T>>,
    U extends Omit<Prisma.learning_moduleCreateArgs, 'data'> & {
      data: Prisma.learning_moduleUncheckedCreateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.learning_moduleCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.learning_moduleCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.learning_moduleUpdateArgs,
    R extends Prisma.learning_moduleGetPayload<T>,
    U extends Omit<Prisma.learning_moduleUpdateArgs, 'data'> & {
      data: Prisma.learning_moduleUncheckedUpdateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.learning_moduleUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.learning_moduleUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.learning_moduleUpsertArgs, R extends Prisma.learning_moduleGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.learning_moduleUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.learning_moduleDeleteArgs, R extends Prisma.learning_moduleGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.learning_moduleDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.learning_moduleDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.learning_moduleDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.learning_moduleFindManyArgs,
    R extends GetFindResult<Prisma.$learning_modulePayload<DefaultArgs>, T>[],
  >(
    args?: Prisma.SelectSubset<T, Prisma.learning_moduleFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.learning_moduleCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.learning_moduleCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.learning_moduleFindManyArgs,
    R extends GetFindResult<Prisma.$learning_modulePayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.learning_moduleFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.learning_moduleFindFirstArgs,
    R extends GetFindResult<Prisma.$learning_modulePayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.learning_moduleFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface Lesson_planSDK {
  create: <
    T extends Prisma.lesson_planCreateArgs,
    R extends CheckSelect<T, lesson_plan, Prisma.lesson_planGetPayload<T>>,
    U extends Omit<Prisma.lesson_planCreateArgs, 'data'> & {
      data: Prisma.lesson_planUncheckedCreateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.lesson_planCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.lesson_planCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.lesson_planUpdateArgs,
    R extends Prisma.lesson_planGetPayload<T>,
    U extends Omit<Prisma.lesson_planUpdateArgs, 'data'> & {
      data: Prisma.lesson_planUncheckedUpdateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.lesson_planUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.lesson_planUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.lesson_planUpsertArgs, R extends Prisma.lesson_planGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.lesson_planUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.lesson_planDeleteArgs, R extends Prisma.lesson_planGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.lesson_planDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.lesson_planDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.lesson_planDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.lesson_planFindManyArgs,
    R extends GetFindResult<Prisma.$lesson_planPayload<DefaultArgs>, T>[],
  >(
    args?: Prisma.SelectSubset<T, Prisma.lesson_planFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.lesson_planCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.lesson_planCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.lesson_planFindManyArgs,
    R extends GetFindResult<Prisma.$lesson_planPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.lesson_planFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.lesson_planFindFirstArgs,
    R extends GetFindResult<Prisma.$lesson_planPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.lesson_planFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface SchoolSDK {
  create: <
    T extends Prisma.schoolCreateArgs,
    R extends CheckSelect<T, school, Prisma.schoolGetPayload<T>>,
    U extends Omit<Prisma.schoolCreateArgs, 'data'> & {
      data: Omit<Prisma.schoolUncheckedCreateInput, 'user'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.schoolCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.schoolCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.schoolUpdateArgs,
    R extends Prisma.schoolGetPayload<T>,
    U extends Omit<Prisma.schoolUpdateArgs, 'data'> & {
      data: Omit<Prisma.schoolUncheckedUpdateInput, 'user'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.schoolUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.schoolUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.schoolUpsertArgs, R extends Prisma.schoolGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.schoolUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.schoolDeleteArgs, R extends Prisma.schoolGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.schoolDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.schoolDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.schoolDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.schoolFindManyArgs, R extends GetFindResult<Prisma.$schoolPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.schoolFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.schoolCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.schoolCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.schoolFindManyArgs,
    R extends GetFindResult<Prisma.$schoolPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.schoolFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.schoolFindFirstArgs, R extends GetFindResult<Prisma.$schoolPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.schoolFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface UserSDK {
  create: <
    T extends Prisma.userCreateArgs,
    R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
    U extends Omit<Prisma.userCreateArgs, 'data'> & {
      data: Omit<
        Prisma.userUncheckedCreateInput,
        'educational_content' | 'freelance_educator' | 'learning_module' | 'lesson_plan'
      >;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.userUpdateArgs,
    R extends Prisma.userGetPayload<T>,
    U extends Omit<Prisma.userUpdateArgs, 'data'> & {
      data: Omit<
        Prisma.userUncheckedUpdateInput,
        'educational_content' | 'freelance_educator' | 'learning_module' | 'lesson_plan'
      >;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.userFindManyArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.userCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.userFindManyArgs,
    R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.userFindFirstArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

export class RoqBaasSdk {
  private endpoint: string;
  private baseOptions: RequestOptions;

  public educational_content!: Educational_contentSDK;

  public freelance_educator!: Freelance_educatorSDK;

  public learning_module!: Learning_moduleSDK;

  public lesson_plan!: Lesson_planSDK;

  public school!: SchoolSDK;

  public user!: UserSDK;

  constructor(backendHost: string, baseOptions: RequestOptions = {}) {
    this.endpoint = backendHost;
    this.baseOptions = baseOptions;
    this.initSDK();
  }

  private initSDK() {
    const ctx = this;

    this.educational_content = {
      create: async function createEducational_content<
        T extends Prisma.educational_contentCreateArgs,
        R extends CheckSelect<T, educational_content, Prisma.educational_contentGetPayload<T>>,
        U extends Omit<Prisma.educational_contentCreateArgs, 'data'> & {
          data: Prisma.educational_contentUncheckedCreateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/educational_content/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyEducational_content<
        T extends Prisma.educational_contentCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.educational_contentCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/educational_content/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateEducational_content<
        T extends Prisma.educational_contentUpdateArgs,
        R extends Prisma.educational_contentGetPayload<T>,
        U extends Omit<Prisma.educational_contentUpdateArgs, 'data'> & {
          data: Prisma.educational_contentUncheckedUpdateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/educational_content/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyEducational_content<
        T extends Prisma.educational_contentUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.educational_contentUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/educational_content/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertEducational_content<
        T extends Prisma.educational_contentUpsertArgs,
        R extends Prisma.educational_contentGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.educational_contentUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/educational_content/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteEducational_content<
        T extends Prisma.educational_contentDeleteArgs,
        R extends Prisma.educational_contentGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.educational_contentDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/educational_content/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyEducational_content<
        T extends Prisma.educational_contentDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.educational_contentDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/educational_content/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyEducational_content<
        T extends Prisma.educational_contentFindManyArgs,
        R extends GetFindResult<Prisma.$educational_contentPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.educational_contentFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/educational_content/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countEducational_content<T extends Prisma.educational_contentCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.educational_contentCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/educational_content/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountEducational_content<
        T extends Prisma.educational_contentFindManyArgs,
        R extends GetFindResult<Prisma.$educational_contentPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.educational_contentFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.educational_content.findMany(args, options),
          ctx.educational_content.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstEducational_content<
        T extends Prisma.educational_contentFindFirstArgs,
        R extends GetFindResult<Prisma.$educational_contentPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.educational_contentFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/educational_content/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.freelance_educator = {
      create: async function createFreelance_educator<
        T extends Prisma.freelance_educatorCreateArgs,
        R extends CheckSelect<T, freelance_educator, Prisma.freelance_educatorGetPayload<T>>,
        U extends Omit<Prisma.freelance_educatorCreateArgs, 'data'> & {
          data: Prisma.freelance_educatorUncheckedCreateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/freelance_educator/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyFreelance_educator<
        T extends Prisma.freelance_educatorCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.freelance_educatorCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/freelance_educator/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateFreelance_educator<
        T extends Prisma.freelance_educatorUpdateArgs,
        R extends Prisma.freelance_educatorGetPayload<T>,
        U extends Omit<Prisma.freelance_educatorUpdateArgs, 'data'> & {
          data: Prisma.freelance_educatorUncheckedUpdateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/freelance_educator/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyFreelance_educator<
        T extends Prisma.freelance_educatorUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.freelance_educatorUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/freelance_educator/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertFreelance_educator<
        T extends Prisma.freelance_educatorUpsertArgs,
        R extends Prisma.freelance_educatorGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.freelance_educatorUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/freelance_educator/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteFreelance_educator<
        T extends Prisma.freelance_educatorDeleteArgs,
        R extends Prisma.freelance_educatorGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.freelance_educatorDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/freelance_educator/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyFreelance_educator<
        T extends Prisma.freelance_educatorDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.freelance_educatorDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/freelance_educator/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyFreelance_educator<
        T extends Prisma.freelance_educatorFindManyArgs,
        R extends GetFindResult<Prisma.$freelance_educatorPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.freelance_educatorFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/freelance_educator/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countFreelance_educator<T extends Prisma.freelance_educatorCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.freelance_educatorCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/freelance_educator/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountFreelance_educator<
        T extends Prisma.freelance_educatorFindManyArgs,
        R extends GetFindResult<Prisma.$freelance_educatorPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.freelance_educatorFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.freelance_educator.findMany(args, options),
          ctx.freelance_educator.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstFreelance_educator<
        T extends Prisma.freelance_educatorFindFirstArgs,
        R extends GetFindResult<Prisma.$freelance_educatorPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.freelance_educatorFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/freelance_educator/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.learning_module = {
      create: async function createLearning_module<
        T extends Prisma.learning_moduleCreateArgs,
        R extends CheckSelect<T, learning_module, Prisma.learning_moduleGetPayload<T>>,
        U extends Omit<Prisma.learning_moduleCreateArgs, 'data'> & {
          data: Prisma.learning_moduleUncheckedCreateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/learning_module/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyLearning_module<
        T extends Prisma.learning_moduleCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.learning_moduleCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/learning_module/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateLearning_module<
        T extends Prisma.learning_moduleUpdateArgs,
        R extends Prisma.learning_moduleGetPayload<T>,
        U extends Omit<Prisma.learning_moduleUpdateArgs, 'data'> & {
          data: Prisma.learning_moduleUncheckedUpdateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/learning_module/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyLearning_module<
        T extends Prisma.learning_moduleUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.learning_moduleUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/learning_module/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertLearning_module<
        T extends Prisma.learning_moduleUpsertArgs,
        R extends Prisma.learning_moduleGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.learning_moduleUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/learning_module/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteLearning_module<
        T extends Prisma.learning_moduleDeleteArgs,
        R extends Prisma.learning_moduleGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.learning_moduleDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/learning_module/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyLearning_module<
        T extends Prisma.learning_moduleDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.learning_moduleDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/learning_module/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyLearning_module<
        T extends Prisma.learning_moduleFindManyArgs,
        R extends GetFindResult<Prisma.$learning_modulePayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.learning_moduleFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/learning_module/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countLearning_module<T extends Prisma.learning_moduleCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.learning_moduleCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/learning_module/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountLearning_module<
        T extends Prisma.learning_moduleFindManyArgs,
        R extends GetFindResult<Prisma.$learning_modulePayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.learning_moduleFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.learning_module.findMany(args, options),
          ctx.learning_module.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstLearning_module<
        T extends Prisma.learning_moduleFindFirstArgs,
        R extends GetFindResult<Prisma.$learning_modulePayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.learning_moduleFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/learning_module/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.lesson_plan = {
      create: async function createLesson_plan<
        T extends Prisma.lesson_planCreateArgs,
        R extends CheckSelect<T, lesson_plan, Prisma.lesson_planGetPayload<T>>,
        U extends Omit<Prisma.lesson_planCreateArgs, 'data'> & {
          data: Prisma.lesson_planUncheckedCreateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/lesson_plan/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyLesson_plan<
        T extends Prisma.lesson_planCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.lesson_planCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/lesson_plan/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateLesson_plan<
        T extends Prisma.lesson_planUpdateArgs,
        R extends Prisma.lesson_planGetPayload<T>,
        U extends Omit<Prisma.lesson_planUpdateArgs, 'data'> & {
          data: Prisma.lesson_planUncheckedUpdateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/lesson_plan/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyLesson_plan<
        T extends Prisma.lesson_planUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.lesson_planUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/lesson_plan/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertLesson_plan<
        T extends Prisma.lesson_planUpsertArgs,
        R extends Prisma.lesson_planGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.lesson_planUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/lesson_plan/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteLesson_plan<
        T extends Prisma.lesson_planDeleteArgs,
        R extends Prisma.lesson_planGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.lesson_planDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/lesson_plan/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyLesson_plan<
        T extends Prisma.lesson_planDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.lesson_planDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/lesson_plan/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyLesson_plan<
        T extends Prisma.lesson_planFindManyArgs,
        R extends GetFindResult<Prisma.$lesson_planPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.lesson_planFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/lesson_plan/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countLesson_plan<T extends Prisma.lesson_planCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.lesson_planCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/lesson_plan/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountLesson_plan<
        T extends Prisma.lesson_planFindManyArgs,
        R extends GetFindResult<Prisma.$lesson_planPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.lesson_planFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.lesson_plan.findMany(args, options),
          ctx.lesson_plan.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstLesson_plan<
        T extends Prisma.lesson_planFindFirstArgs,
        R extends GetFindResult<Prisma.$lesson_planPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.lesson_planFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/lesson_plan/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.school = {
      create: async function createSchool<
        T extends Prisma.schoolCreateArgs,
        R extends CheckSelect<T, school, Prisma.schoolGetPayload<T>>,
        U extends Omit<Prisma.schoolCreateArgs, 'data'> & {
          data: Omit<Prisma.schoolUncheckedCreateInput, 'user'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/school/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManySchool<T extends Prisma.schoolCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.schoolCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/school/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateSchool<
        T extends Prisma.schoolUpdateArgs,
        R extends Prisma.schoolGetPayload<T>,
        U extends Omit<Prisma.schoolUpdateArgs, 'data'> & {
          data: Omit<Prisma.schoolUncheckedUpdateInput, 'user'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/school/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManySchool<T extends Prisma.schoolUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.schoolUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/school/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertSchool<T extends Prisma.schoolUpsertArgs, R extends Prisma.schoolGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.schoolUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/school/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteSchool<T extends Prisma.schoolDeleteArgs, R extends Prisma.schoolGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.schoolDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/school/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManySchool<T extends Prisma.schoolDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.schoolDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/school/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManySchool<
        T extends Prisma.schoolFindManyArgs,
        R extends GetFindResult<Prisma.$schoolPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.schoolFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/school/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countSchool<T extends Prisma.schoolCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.schoolCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/school/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountSchool<
        T extends Prisma.schoolFindManyArgs,
        R extends GetFindResult<Prisma.$schoolPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.schoolFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.school.findMany(args, options),
          ctx.school.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstSchool<
        T extends Prisma.schoolFindFirstArgs,
        R extends GetFindResult<Prisma.$schoolPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.schoolFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/school/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.user = {
      create: async function createUser<
        T extends Prisma.userCreateArgs,
        R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
        U extends Omit<Prisma.userCreateArgs, 'data'> & {
          data: Omit<
            Prisma.userUncheckedCreateInput,
            'educational_content' | 'freelance_educator' | 'learning_module' | 'lesson_plan'
          >;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyUser<T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateUser<
        T extends Prisma.userUpdateArgs,
        R extends Prisma.userGetPayload<T>,
        U extends Omit<Prisma.userUpdateArgs, 'data'> & {
          data: Omit<
            Prisma.userUncheckedUpdateInput,
            'educational_content' | 'freelance_educator' | 'learning_module' | 'lesson_plan'
          >;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyUser<T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertUser<T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteUser<T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyUser<T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countUser<T extends Prisma.userCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.user.findMany(args, options),
          ctx.user.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstUser<
        T extends Prisma.userFindFirstArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };
  }
}
