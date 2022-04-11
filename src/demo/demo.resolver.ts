import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class DemoResolver {
  @Query(() => String)
  sayHello(): string {
    if (!process.env.VERY_NECESSARY_VAR) {
      throw new Error('Problem!');
    }
    return `Hello World! ${process.env.VERY_NECESSARY_VAR}`;
  }
}
