export type Id = string;

type PartialIdType<T extends { id: Id }> = Omit<T, "id"> & Partial<Pick<T, "id">>;
export type WithOrWithouIdType<T extends { id: Id }> = T | PartialIdType<T>;
