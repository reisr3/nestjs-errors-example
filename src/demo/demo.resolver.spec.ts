import { Test, TestingModule } from '@nestjs/testing';
import { DemoResolver } from './demo.resolver';

describe('DemoResolver', () => {
  let resolver: DemoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoResolver],
    }).compile();

    resolver = module.get<DemoResolver>(DemoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
