import { LotfpModule } from './lotfp.module';

describe('LotfpModule', () => {
  let lotfpModule: LotfpModule;

  beforeEach(() => {
    lotfpModule = new LotfpModule();
  });

  it('should create an instance', () => {
    expect(lotfpModule).toBeTruthy();
  });
});
