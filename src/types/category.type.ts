export type TCategory = {
  Id: number;
  ParentId: number;
  Name: string;
  Level: number;
  ChildList: TCategory[];
  ChildListCount: number;
};
