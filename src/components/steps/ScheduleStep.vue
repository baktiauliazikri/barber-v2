<script setup>
defineProps({
  vm: { type: Object, required: true }
});
const emit = defineEmits(['select-day', 'select-slot']);
</script>

<template>
  <h1 style="font-family:'Archivo Black',sans-serif;font-size:30px;font-weight:400;line-height:1;margin:0 0 12px;color:#0b0b0b;letter-spacing:-.02em;text-transform:uppercase">Pilih jadwal</h1>
  <p style="font-size:14px;line-height:1.5;color:#4a4a4a;margin:0 0 18px;max-width:32ch">{{ vm.timeIntro }}</p>

  <div style="display:flex;align-items:center;justify-content:space-between;padding-bottom:10px;border-bottom:1px solid #0b0b0b;margin-bottom:12px">
    <div style="font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.2em;color:#0b0b0b">OKTOBER 2026</div>
    <div style="display:flex;gap:5px">
      <div style="width:26px;height:26px;border:1px solid #d4d4d4;display:flex;align-items:center;justify-content:center;font-size:12px;color:#8c8c8c;cursor:pointer">‹</div>
      <div class="hoverable" style="width:26px;height:26px;border:1px solid #0b0b0b;display:flex;align-items:center;justify-content:center;font-size:12px;color:#0b0b0b;cursor:pointer">›</div>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-bottom:22px">
    <div v-for="d in vm.days" :key="d.num" @click="emit('select-day', d.num, d.none)" :style="d.style">
      <div :style="d.dowStyle">{{ d.dow }}</div>
      <div :style="d.numStyle">{{ d.num }}</div>
      <div :style="d.countStyle">{{ d.count }}</div>
    </div>
  </div>

  <div v-for="g in vm.groups" :key="g.label" style="margin-bottom:18px">
    <div style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.22em;color:#5c5c5c;margin-bottom:9px;padding-bottom:7px;border-bottom:1px solid #d4d4d4">{{ g.label }}</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:7px">
      <div v-for="s in g.slots" :key="s.time" @click="emit('select-slot', s.time)" :style="s.style">{{ s.time }}</div>
    </div>
  </div>
</template>
