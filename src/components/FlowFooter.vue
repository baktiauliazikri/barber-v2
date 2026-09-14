<script setup>
defineProps({
  vm: { type: Object, required: true },
  next: { type: Function, required: true }
});
</script>

<template>
  <div style="flex-shrink:0;border-top:1px solid #0b0b0b;background:#ffffff;padding:11px 18px 16px">
    <div v-if="vm.showHold" style="display:flex;align-items:center;gap:8px;padding:8px 11px;background:#e8f2ec;margin-bottom:11px">
      <div style="width:6px;height:6px;border-radius:50%;background:#1a7a4f;flex-shrink:0"></div>
      <div style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.16em;color:#1a7a4f;flex:1">SLOT DITAHAN UNTUK KAMU</div>
      <div style="font-family:'Space Mono',monospace;font-size:13px;font-weight:700;color:#1a7a4f;letter-spacing:.06em">{{ vm.hold }}</div>
    </div>
    <div v-if="vm.showSummaryRow" style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:12px;gap:12px">
      <div style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.18em;color:#5c5c5c;flex-shrink:0">{{ vm.footerLabel }}</div>
      <div :style="vm.footerValueStyle">{{ vm.footerValue }}</div>
    </div>
    <div v-if="vm.isStep5" style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.12em;color:#5c5c5c;text-align:center;margin-bottom:11px">BISA DIBATALKAN GRATIS SAMPAI 2 JAM SEBELUM JADWAL</div>
    <div
      class="cta-btn"
      style="background:#0b0b0b;color:#ffffff;height:52px;display:flex;align-items:center;justify-content:center;font-family:'Space Mono',monospace;font-size:11.5px;letter-spacing:.18em;cursor:pointer"
      @click="next"
    >{{ vm.ctaLabel }}</div>
  </div>
</template>
