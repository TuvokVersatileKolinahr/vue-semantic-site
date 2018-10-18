import Job from '@/store/models/job';

export default interface Machine {
  name: string;
  id: number;
  jobs: Job[];
}
