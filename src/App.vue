<script setup>
import { useBooking } from './store/booking.js';
import AppHeader from './components/AppHeader.vue';
import StepProgress from './components/StepProgress.vue';
import FlowFooter from './components/FlowFooter.vue';
import BranchStep from './components/steps/BranchStep.vue';
import ServiceStep from './components/steps/ServiceStep.vue';
import BarberStep from './components/steps/BarberStep.vue';
import ScheduleStep from './components/steps/ScheduleStep.vue';
import ConfirmStep from './components/steps/ConfirmStep.vue';
import ReceiptPage from './components/ReceiptPage.vue';

const {
  vm, back, next, restart,
  sortNear, sortSoon, selectBranch,
  selectService, toggleDetails, toggleAddon,
  selectBarber, selectAny,
  selectDay, selectSlot,
  go, setName, toggleEspresso,
  copyRef
} = useBooking();
</script>

<template>
  <div style="min-height:100vh;display:flex;justify-content:center;padding:32px 16px;background:#ffffff">
    <div style="width:390px;max-width:100%;background:#ffffff;border:1px solid #0b0b0b;display:flex;flex-direction:column;height:844px;overflow:hidden">

      <template v-if="vm.isFlow">
        <AppHeader :back="back" />
        <StepProgress :segs="vm.segs" :step-label="vm.stepLabel" :context-line="vm.contextLine" />

        <div style="flex:1;overflow-y:auto;padding:20px 18px">
          <BranchStep v-if="vm.isStep1" :vm="vm" @select-branch="selectBranch" @sort-near="sortNear" @sort-soon="sortSoon" />
          <ServiceStep v-else-if="vm.isStep2" :vm="vm" @select-service="selectService" @toggle-details="toggleDetails" @toggle-addon="toggleAddon" />
          <BarberStep v-else-if="vm.isStep3" :vm="vm" @select-barber="selectBarber" @select-any="selectAny" />
          <ScheduleStep v-else-if="vm.isStep4" :vm="vm" @select-day="selectDay" @select-slot="selectSlot" />
          <ConfirmStep v-else-if="vm.isStep5" :vm="vm" @edit-step="go" @set-name="setName" @toggle-espresso="toggleEspresso" />

          <div style="height:16px"></div>
        </div>

        <FlowFooter :vm="vm" :next="next" />
      </template>

      <ReceiptPage v-else-if="vm.isReceipt" :vm="vm" @restart="restart" @copy-ref="copyRef" />

    </div>
  </div>
</template>
