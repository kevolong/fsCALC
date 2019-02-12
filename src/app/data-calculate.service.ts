import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataCalculateService {
  constructor() {}

  /**
   * Calculate footage files size based on length of footage and datarate
   * @param hours - number of hours of footage
   * @param minutes - number of minutes of footage
   * @param datarate - megabits per second rate
   *
   * return object - file size and file unit
   */
  calculateFootageSize(hours: number, minutes: number, datarate: number) {
    const megabits = hours * 60 * datarate * 60 + minutes * datarate * 60;
    const megabytes = megabits / 8;

    //Default to rounded megabyte display
    let fileSize = this.round(megabytes, 2);
    let fileUnit = "MB";

    //Calculate and round gigabytes, terabytes, and petabytes
    const gigabytes = this.round(megabytes / 1000, 2);
    const terabytes = this.round(gigabytes / 1000, 2);
    const petabytes = this.round(terabytes / 1000, 2);

    //Display gigabytes, terabytes, or petabytes in appropriate
    if (megabytes >= 1000) {
      fileSize = gigabytes;
      fileUnit = "GB";
    }
    if (gigabytes >= 1000) {
      fileSize = terabytes;
      fileUnit = "TB";
    }
    if (terabytes >= 1000) {
      fileSize = petabytes;
      fileUnit = "PB";
    }

    return { fileSize: fileSize, fileUnit: fileUnit };
  }

  /**
   * Calculate footage amount based on length storage size and datarate
   * @param space - space file size
   * @param unit - file unit (GB, TB, PB)
   * @param datarate - megabits per second rate
   *
   * return object - hours and minutes of footage rounded down
   */
  calculateFootageAmount(space: number, unit: string, datarate: number) {
    let spaceBits;
    if (unit === "GB") {
      spaceBits = space * 8000;
    }
    if (unit === "TB") {
      spaceBits = space * 8000 * 1000;
    }
    if (unit === "PB") {
      spaceBits = space * 8000 * 1000 * 1000;
    }
    const seconds = this.round(spaceBits / datarate, 0);
    const hours = Math.floor(seconds / 60 / 60);
    const minutes = Math.floor((seconds / 60) % 60);
    return { hours: hours, minutes: minutes };
  }

  /**
   * Precision rounding
   * @param number - number to round
   * @param precision - precision of rounding
   *
   * return number - rounded
   */
  round(number, precision) {
    let shift = function(number, precision, reverseShift) {
      if (reverseShift) {
        precision = -precision;
      }
      var numArray = ("" + number).split("e");
      return +(numArray[0] + "e" + (numArray[1] ? +numArray[1] + precision : precision));
    };
    return shift(Math.round(shift(number, precision, false)), precision, true);
  }
}
