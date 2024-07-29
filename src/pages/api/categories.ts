import type { NextApiRequest, NextApiResponse } from "next";
import type { TCategory } from "@/types/category.type";

type Response = {
  data: TCategory[];
  message: string;
};

const originalData: TCategory[] = [
  {
    Id: 499420,
    ParentId: 1,
    Name: "美髮",
    Level: 1,
    ChildList: [
      {
        Id: 464303,
        ParentId: 499420,
        Name: "洗髮",
        Level: 2,
        ChildList: [],
        ChildListCount: 0,
      },
      {
        Id: 464304,
        ParentId: 499420,
        Name: "染髮",
        Level: 2,
        ChildList: [
          {
            Id: 464562,
            ParentId: 464304,
            Name: "染髮霜",
            Level: 3,
            ChildList: [],
            ChildListCount: 0,
          },
          {
            Id: 464564,
            ParentId: 464304,
            Name: "泡泡染",
            Level: 3,
            ChildList: [],
            ChildListCount: 0,
          },
        ],
        ChildListCount: 2,
      },
      {
        Id: 500915,
        ParentId: 499420,
        Name: "男士專用",
        Level: 2,
        ChildList: [],
        ChildListCount: 0,
      },
      {
        Id: 464310,
        ParentId: 499420,
        Name: "旅行/精選組合",
        Level: 2,
        ChildList: [],
        ChildListCount: 0,
      },
    ],
    ChildListCount: 4,
  },
  {
    Id: 470498,
    ParentId: 1,
    Name: "家電・ 電玩・ 視聽・ 廚衛三機",
    Level: 1,
    ChildList: [
      {
        Id: 470520,
        ParentId: 470498,
        Name: "咖啡機",
        Level: 2,
        ChildList: [],
        ChildListCount: 0,
      },
      {
        Id: 470523,
        ParentId: 470498,
        Name: "廚房家電",
        Level: 2,
        ChildList: [
          {
            Id: 470662,
            ParentId: 470523,
            Name: "電子鍋",
            Level: 3,
            ChildList: [],
            ChildListCount: 0,
          },
          {
            Id: 470664,
            ParentId: 470523,
            Name: "壓力/萬用鍋",
            Level: 3,
            ChildList: [],
            ChildListCount: 0,
          },
          {
            Id: 470665,
            ParentId: 470523,
            Name: "氣炸鍋",
            Level: 3,
            ChildList: [],
            ChildListCount: 0,
          },
        ],
        ChildListCount: 3,
      },
    ],
    ChildListCount: 2,
  },
];

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  res.status(200).json({ data: originalData, message: "" });
}
