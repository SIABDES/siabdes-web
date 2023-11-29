import { BackendResponseType } from "@/common/types";
import { WtbType } from "./account";
import { WtbSummaryType } from "./summary";

export type WtbResponse = {
  list: WtbType[];
  summary: WtbSummaryType;
};

export type GetWtbResponse = BackendResponseType<{
  list: WtbType[];
  summary: WtbSummaryType;
}>;
