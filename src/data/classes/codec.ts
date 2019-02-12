export class Codec {
  name: string;
  resolutions: {
    string: { framerates: { string: { datarate: number } } };
  };
}
