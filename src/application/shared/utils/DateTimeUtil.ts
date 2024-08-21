import { IDateTimeUtil } from "../../../domain/shared/utilityContracts/IDateTimeUtil";
import { DateTime } from "luxon";

export class DateTimeUtils implements IDateTimeUtil {
  getISONow(): string {
    return DateTime.local().toISO() as string;
  }

  getCurrentDate(): Date {
    return DateTime.now().toJSDate();
  }

  getCurrentTime(): string {
    return DateTime.now().toISOTime() as string;
  }
}

export default new DateTimeUtils();
