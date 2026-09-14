<script setup>
import AvatarPattern from '../AvatarPattern.vue';

defineProps({
  vm: { type: Object, required: true }
});
const emit = defineEmits(['select-branch', 'sort-near', 'sort-soon']);
</script>

<template>
  <h1 style="font-family:'Archivo Black',sans-serif;font-size:30px;font-weight:400;line-height:1;margin:0 0 12px;color:#0b0b0b;letter-spacing:-.02em;text-transform:uppercase">Pilih cabang<br />di Jakarta</h1>
  <p style="font-size:14px;line-height:1.5;color:#4a4a4a;margin:0 0 16px;max-width:32ch">Tiga atelier. Diurutkan dari yang terdekat dengan lokasimu.</p>

  <div style="display:flex;gap:7px;margin-bottom:18px">
    <div @click="emit('sort-near')" :style="vm.nearStyle">TERDEKAT</div>
    <div @click="emit('sort-soon')" :style="vm.soonStyle">SLOT TERCEPAT</div>
  </div>

  <div v-for="b in vm.branches" :key="b.id" @click="emit('select-branch', b.id)" :style="b.cardStyle">
    <div style="display:flex;gap:13px;align-items:flex-start">
      <div style="width:64px;height:64px;flex-shrink:0;overflow:hidden;border:1px solid #0b0b0b;background:#f5f5f5">
        <AvatarPattern :pat-id="b.patId" :size="62" />
      </div>
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:flex-start;gap:10px">
          <div style="flex:1;min-width:0">
            <div style="font-size:17px;font-weight:700;color:#0b0b0b;line-height:1.2;letter-spacing:-.01em">{{ b.name }}</div>
            <div style="font-size:12.5px;color:#4a4a4a;line-height:1.45;margin-top:5px">{{ b.address }}</div>
          </div>
          <div :style="b.dotStyle">✓</div>
        </div>
        <div style="display:flex;align-items:center;gap:7px;margin-top:9px;font-family:'Space Mono',monospace;font-size:10px;letter-spacing:.14em;color:#0b0b0b">
          <span>{{ b.distance }}</span><span style="color:#c4c4c4">/</span><span style="color:#5c5c5c">{{ b.travel }}</span>
        </div>
      </div>
    </div>
    <div :style="b.slotStyle">
      <span style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.16em;color:#5c5c5c">SLOT TERDEKAT HARI INI</span>
      <span :style="b.slotTextStyle">{{ b.slot }}</span>
    </div>
  </div>

  <div style="margin-top:18px;padding:14px;background:#f5f5f5;border:1px solid #d4d4d4">
    <div style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.24em;color:#5c5c5c;margin-bottom:7px">BERLAKU DI SEMUA CABANG</div>
    <div style="font-size:13px;line-height:1.5;color:#4a4a4a">Master barber bersertifikat, espresso single-origin, dan ruang dengan akustik terkontrol.</div>
  </div>
</template>
