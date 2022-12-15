import {getKeystrokes} from './index';

describe('getKeystrokes', () => {
  it('should return 4433555p555666096667775553 for "HELLO WORLD"', () => {
    expect(getKeystrokes('HELLO WORLD'))
        .toStrictEqual('4433555p555666096667775553');
  });
  it('should return 4433555p555666096667775553 for "hello world"', () => {
    expect(getKeystrokes('hello world'))
        .toStrictEqual('4433555p555666096667775553');
  });
  it('should return 4433555p555666096667775553 for "hello world"', () => {
    expect(getKeystrokes('H3770 W0R7D'))
        .toStrictEqual('44333377777p7777700p0900777p777773');
  });
});
