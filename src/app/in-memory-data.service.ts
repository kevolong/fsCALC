import { InMemoryDbService } from "angular-in-memory-web-api";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const codecs = {
      codecs: [
        {
          name: "ProRes 422 Proxy",
          resolutions: {
            NTSC: {
              framerates: {
                "24p": { datarate: 10 },
                "30p/60i": { datarate: 12 }
              }
            },
            PAL: {
              framerates: {
                "25p/50i": { datarate: 12 }
              }
            },
            "720p": {
              framerates: {
                "24p": { datarate: 18 },
                "25p": { datarate: 19 },
                "30p": { datarate: 23 },
                "50p": { datarate: 38 },
                "60p": { datarate: 45 }
              }
            },
            "1080p": {
              framerates: {
                "24p": { datarate: 36 },
                "25p/50i": { datarate: 38 },
                "30p/60i": { datarate: 45 },
                "50p": { datarate: 76 },
                "60p": { datarate: 91 }
              }
            },
            QFHD: {
              framerates: {
                "24p": { datarate: 145 },
                "25p": { datarate: 151 },
                "30p": { datarate: 182 },
                "50p": { datarate: 303 },
                "60p": { datarate: 363 }
              }
            },
            "4K": {
              framerates: {
                "24p": { datarate: 155 },
                "25p": { datarate: 162 },
                "30p": { datarate: 194 },
                "50p": { datarate: 323 },
                "60p": { datarate: 388 }
              }
            }
          }
        }, // end of ProRes 422 Proxy
        {
          name: "ProRes 422 LT",
          resolutions: {
            NTSC: {
              framerates: {
                "24p": { datarate: 23 },
                "30p/60i": { datarate: 29 }
              }
            },
            PAL: {
              framerates: {
                "25p/50i": { datarate: 28 }
              }
            },
            "720p": {
              framerates: {
                "24p": { datarate: 41 },
                "25p": { datarate: 42 },
                "30p": { datarate: 51 },
                "50p": { datarate: 84 },
                "60p": { datarate: 101 }
              }
            },
            "1080p": {
              framerates: {
                "24p": { datarate: 82 },
                "25p/50i": { datarate: 85 },
                "30p/60i": { datarate: 102 },
                "50p": { datarate: 170 },
                "60p": { datarate: 204 }
              }
            },
            QFHD: {
              framerates: {
                "24p": { datarate: 328 },
                "25p": { datarate: 342 },
                "30p": { datarate: 410 },
                "50p": { datarate: 684 },
                "60p": { datarate: 821 }
              }
            },
            "4K": {
              framerates: {
                "24p": { datarate: 350 },
                "25p": { datarate: 365 },
                "30p": { datarate: 437 },
                "50p": { datarate: 730 },
                "60p": { datarate: 875 }
              }
            }
          }
        }, // end of ProRes 422 LT
        {
          name: "ProRes 422",
          resolutions: {
            NTSC: {
              framerates: {
                "24p": { datarate: 34 },
                "30p/60i": { datarate: 42 }
              }
            },
            PAL: {
              framerates: {
                "25p/50i": { datarate: 41 }
              }
            },
            "720p": {
              framerates: {
                "24p": { datarate: 59 },
                "25p": { datarate: 61 },
                "30p": { datarate: 73 },
                "50p": { datarate: 122 },
                "60p": { datarate: 147 }
              }
            },
            "1080p": {
              framerates: {
                "24p": { datarate: 117 },
                "25p/50i": { datarate: 122 },
                "30p/60i": { datarate: 147 },
                "50p": { datarate: 245 },
                "60p": { datarate: 293 }
              }
            },
            QFHD: {
              framerates: {
                "24p": { datarate: 471 },
                "25p": { datarate: 492 },
                "30p": { datarate: 589 },
                "50p": { datarate: 983 },
                "60p": { datarate: 1178 }
              }
            },
            "4K": {
              framerates: {
                "24p": { datarate: 503 },
                "25p": { datarate: 524 },
                "30p": { datarate: 629 },
                "50p": { datarate: 1049 },
                "60p": { datarate: 1257 }
              }
            }
          }
        }, // end of ProRes 422
        {
          name: "Cineform 10-bit Film Scan",
          resolutions: {
            NTSC: {
              framerates: {
                "24p": { datarate: 34 },
                "30p/60i": { datarate: 42 }
              }
            },
            PAL: {
              framerates: {
                "25p/50i": { datarate: 41 }
              }
            },
            "720p": {
              framerates: {
                "24p": { datarate: 59 },
                "25p": { datarate: 61 },
                "30p": { datarate: 73 },
                "50p": { datarate: 122 },
                "60p": { datarate: 147 }
              }
            },
            "1080p": {
              framerates: {
                "24p": { datarate: 117 },
                "25p/50i": { datarate: 122 },
                "30p/60i": { datarate: 147 },
                "50p": { datarate: 245 },
                "60p": { datarate: 293 }
              }
            },
            QFHD: {
              framerates: {
                "24p": { datarate: 471 },
                "25p": { datarate: 492 },
                "30p": { datarate: 589 },
                "50p": { datarate: 983 },
                "60p": { datarate: 1178 }
              }
            },
            "4K": {
              framerates: {
                "24p": { datarate: 503 },
                "25p": { datarate: 524 },
                "30p": { datarate: 629 },
                "50p": { datarate: 1049 },
                "60p": { datarate: 1257 }
              }
            }
          }
        } // end of ProRes 4444 HQ
      ]
    };
    return { codecs };
  }
}
