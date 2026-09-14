<script setup>
defineProps({
  segs: { type: Array, required: true },
  stepLabel: { type: String, required: true },
  contextLine: { type: [String, Boolean], required: true }
});
</script>

<template>
  <div style="padding:12px 18px;border-bottom:1px solid #d4d4d4;flex-shrink:0">
    <div style="display:flex;align-items:center;gap:10px">
      <div style="display:flex;gap:3px;flex:1">
        <div v-for="(s, i) in segs" :key="i" :style="s.style"></div>
      </div>
      <div style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.18em;color:#5c5c5c">{{ stepLabel }}</div>
    </div>
    <div v-if="contextLine" style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.18em;color:#5c5c5c;margin-top:9px">{{ contextLine }}</div>
  </div>
</template>
