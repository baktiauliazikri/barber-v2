<script setup>
defineProps({
  back: { type: Function, required: true }
});
</script>

<template>
  <div style="display:flex;align-items:center;gap:12px;padding:15px 18px;border-bottom:1px solid #0b0b0b;flex-shrink:0">
    <div
      class="hoverable"
      style="width:28px;height:28px;border:1px solid #0b0b0b;display:flex;align-items:center;justify-content:center;font-size:13px;color:#0b0b0b;cursor:pointer;flex-shrink:0"
      @click="back"
    >←</div>
    <div style="flex:1;min-width:0">
      <div style="font-family:'Archivo Black',sans-serif;font-size:15px;letter-spacing:.14em;color:#0b0b0b;line-height:1">KONTUR</div>
      <div style="font-family:'Space Mono',monospace;font-size:8.5px;letter-spacing:.26em;color:#8c8c8c;margin-top:4px">BARBER ATELIER</div>
    </div>
    <div style="width:28px;height:28px;background:#0b0b0b;display:flex;align-items:center;justify-content:center;color:#ffffff;font-family:'Space Mono',monospace;font-size:10px;flex-shrink:0">RP</div>
  </div>
</template>
