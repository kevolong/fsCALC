export class CodecData {
  codec_families: [{ family: string; codecs: [] }];
  codec_docs: {
    official_docs: [{ codec_family: string; doc_link: string }];
    unofficial_docs: [{ codec_family: string; doc_link: string }];
  };
}
