import {Transformer} from '@parcel/plugin'

export default new Transformer({
  async transform({asset}) {
    const buffer = await asset.getBuffer();
    asset.setCode(`'${buffer.toString('base64')}'`);

    return [asset];
  }
});
