<script setup>
defineProps({
  vm: { type: Object, required: true }
});
const emit = defineEmits(['select-service', 'toggle-details', 'toggle-addon']);
</script>

<template>
  <h1 style="font-family:'Archivo Black',sans-serif;font-size:30px;font-weight:400;line-height:1;margin:0 0 12px;color:#0b0b0b;letter-spacing:-.02em;text-transform:uppercase">Pilih layanan</h1>
  <p style="font-size:14px;line-height:1.5;color:#4a4a4a;margin:0 0 20px;max-width:32ch">{{ vm.serviceIntro }}</p>

  <div v-for="s in vm.services" :key="s.id" @click="emit('select-service', s.id)" :style="s.cardStyle">
    <div style="display:flex;align-items:flex-start;gap:14px">
      <div style="flex:1;min-width:0">
        <div v-if="s.badge" style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.2em;color:#1a7a4f;background:#e8f2ec;padding:3px 7px;display:inline-block;margin-bottom:8px">PALING DIPILIH</div>
        <div style="font-size:17px;font-weight:700;color:#0b0b0b;line-height:1.2;letter-spacing:-.01em">{{ s.name }}</div>
        <div style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.16em;color:#5c5c5c;margin-top:7px">{{ s.meta }}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-family:'Archivo Black',sans-serif;font-size:19px;color:#0b0b0b;line-height:1;white-space:nowrap;letter-spacing:-.02em">{{ s.priceText }}</div>
        <div :style="s.dotStyle">✓</div>
      </div>
    </div>
    <div style="font-size:13px;line-height:1.5;color:#4a4a4a;margin-top:12px">{{ s.summary }}</div>
    <div v-if="s.open" style="margin-top:12px;padding-top:12px;border-top:1px solid #d4d4d4;display:flex;flex-direction:column;gap:7px">
      <div v-for="(d, i) in s.details" :key="i" style="display:flex;gap:9px;align-items:flex-start;font-size:12.5px;line-height:1.45;color:#4a4a4a">
        <span style="color:#0b0b0b">—</span><span>{{ d }}</span>
      </div>
    </div>
    <div
      @click.stop="emit('toggle-details', s.id)"
      style="margin-top:13px;font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.16em;color:#0b0b0b;cursor:pointer;display:inline-block;border-bottom:1px solid #0b0b0b;padding-bottom:2px"
    >{{ s.toggleLabel }}</div>
  </div>

  <div style="margin-top:22px">
    <div style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.24em;color:#5c5c5c;margin-bottom:10px">TAMBAHAN UNTUK {{ vm.serviceNameUpper }}</div>
    <div v-for="a in vm.addons" :key="a.id" @click="emit('toggle-addon', a.id)" :style="a.style">
      <div style="flex:1;min-width:0">
        <div style="font-size:14.5px;font-weight:600;color:#0b0b0b">{{ a.name }}</div>
        <div style="font-family:'Space Mono',monospace;font-size:9.5px;color:#5c5c5c;margin-top:5px;letter-spacing:.14em">{{ a.meta }}</div>
      </div>
      <div :style="a.switchStyle"><div :style="a.knobStyle"></div></div>
    </div>
  </div>
</template>
