import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Service } from '../../graphql';
import { ServiceService } from './service.service';

/**
 * Heres the roadmap for exploration for the next phase
 * 1. Run cloud build via the UI
 * 2. Run cloud build via the Node API
 * 3. Build _and_ Deploy via the Node API
 */
@Resolver('Service')
export class ServiceResolver {
  constructor(private serviceService: ServiceService) {}

  /**
   *
   * When a service is created:
   * A webhook is setup to listen for changes in the git repo. When a PR opens, it will automatically run the build command
   *
   * When a service is created, under the hood, we'll create a [gcp project, firebase project, gcs bucket, ...] and associate it with the
   * service id.
   *
   * @param userId - the user to associate the service with
   * @param serviceInput - the information needed to create a service
   */
  @Mutation()
  async createService(
    @Args('userId') userId: string,
    @Args('serviceInput') serviceInput: Service
  ): Promise<Service> {
    console.log(JSON.stringify({ userId, serviceInput }));
    const result = this.serviceService.create(userId, serviceInput);

    console.log(JSON.stringify({ result }));

    return result;
  }

  /**
   *
   * There are several things that need to happen when you run depoly.
   * 1. Kick off the cloud build job
   * 2. Cloud build job -> clone the git repo
   * 3. Run the build command
   * 4. Deploy the publishDirectory to ... gcs? firebase hosting?
   *
   * @param serviceId the id of the service that you want to deploy
   */
  @Mutation()
  async deployService(@Args('id') serviceId: string): Promise<boolean> {
    return false;
  }
}
