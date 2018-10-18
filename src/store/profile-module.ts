import Machine from '@/store/models/machine';
import Job from '@/store/models/job';

export default {
  namespaced: true,
  state: {
    machines: [
      {
        name: 'Trembler',
        id: 1,
        jobs: [
          {
            jobNumber: '14037-12',
          },
          {
            jobNumber: '14038-13',
          },
          {
            jobNumber: '14048-15',
          },
        ],
      },
    ],
  },
  mutations: {
    updateJob: (
      state: any,
      job: { machineId: number; jobId: string; from: number; to: number },
    ) => {
      // console.log(
      //   `(updateJob) Moved in list ${job.machineId} job ${job.jobId} from ${
      //     job.from
      //   } to ${job.to}.`,
      // );
      const machine = state.machines.find(
        (x: Machine) => x.id === job.machineId,
      );
    },
    removeJob: (state: any, job: { machineId: number; jobId: string }) => {
      const machine = state.machines.find(
        (x: Machine) => x.id === job.machineId,
      );
      machine.jobs = machine.jobs.filter((y: Job) => y.jobNumber !== job.jobId);
    },
  },
  actions: {
    //
  },
  getters: {
    //
  },
};
