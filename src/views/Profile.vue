<template>
    <div class="profile">

        <h1 class="header">Drag your jobs in the right order</h1>
        <div v-for="machine in machines" :key="machine.id">
            <div class="ui two column grid">
                <draggable v-model="machine.jobs" :options="{handle:'.draghandle'}" @change="update($event, machine.id)">
                    <transition-group name="list-complete">
                        <div v-for="(job, machine) in machine.jobs" 
                            :key="job.jobNumber"
                            class="column list-complete-item">
                            <div class="ui raised segment">
                                <a class="ui red ribbon label draghandle">Job</a>
                                <span>Number: {{ job.jobNumber }}</span>
                                <i @click="remove(machine.id, job.jobNumber)" class="close icon"></i>
                            </div>
                        </div>
                    </transition-group>
                </draggable>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.list-complete-item {
    transition: all 1s;
}

.list-complete-enter,
.list-complete-leave-active {
    opacity: 0;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';
import { Watch } from 'vue-property-decorator';
import draggable from 'vuedraggable';
import Machine from '@/store/models/machine';

const profileModule = namespace('profile');

@Component({
    components: { draggable },
})
export default class Home extends Vue {
    // mappedStates
    @profileModule.State
    private machines!: Machine[];
    // mappedMutations
    @profileModule.Mutation
    private removeJob!: (job: { machineId: number; jobId: string }) => {};
    @profileModule.Mutation
    private updateJob!: (job: { machineId: number; jobId: string; from: number; to: number }) => {};

    private remove(id: number, job: string) {
        this.removeJob({ machineId: id, jobId: job });
    }

    private update(event: any, mid: number) {
        // console.log(
        //     `Moved in list ${mid} job ${event.moved.element.jobNumber} from ${event.moved.oldIndex} to ${
        //         event.moved.newIndex
        //     }.`,
        // );
        this.updateJob({
            machineId: mid,
            jobId: event.moved.element.jobNumber,
            from: event.moved.oldIndex,
            to: event.moved.newIndex,
        });
    }

    @Watch('machines')
    private async onPropertyChanged(value: string, oldValue: string) {
        console.log(oldValue);
        console.log(value);
    }
}
</script>
