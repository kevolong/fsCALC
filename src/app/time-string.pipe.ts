import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "timeString"
})
export class TimeStringPipe implements PipeTransform {
  transform(time: number): string {
    return time.toLocaleString();
  }
}
