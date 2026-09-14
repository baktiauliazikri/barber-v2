<script setup>
import AvatarPattern from '../AvatarPattern.vue';

defineProps({
  vm: { type: Object, required: true }
});
const emit = defineEmits(['select-barber', 'select-any']);
</script>

<template>
  <h1 style="font-family:'Archivo Black',sans-serif;font-size:30px;font-weight:400;line-height:1;margin:0 0 12px;color:#0b0b0b;letter-spacing:-.02em;text-transform:uppercase">Pilih barber</h1>
  <p style="font-size:14px;line-height:1.5;color:#4a4a4a;margin:0 0 20px;max-width:32ch">Tiga master artisan tersedia untuk layanan ini.</p>

  <div v-for="b in vm.barbers" :key="b.id" @click="emit('select-barber', b.id)" :style="b.cardStyle">
    <div style="display:flex;gap:13px;align-items:flex-start">
      <div style="width:74px;height:74px;flex-shrink:0;overflow:hidden;border:1px solid #0b0b0b;background:#f5f5f5">
        <AvatarPattern :pat-id="b.patId" :size="72" />
      </div>
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:flex-start;gap:10px">
          <div style="flex:1;min-width:0">
            <div style="font-size:17px;font-weight:700;color:#0b0b0b;line-height:1.2;letter-spacing:-.01em">{{ b.name }}</div>
            <div style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.14em;color:#5c5c5c;margin-top:6px">{{ b.role }}</div>
          </div>
          <div :style="b.dotStyle">✓</div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:10px">
          <div v-for="(t, i) in b.tags" :key="i" style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.12em;color:#0b0b0b;border:1px solid #d4d4d4;padding:3px 7px">{{ t }}</div>
        </div>
      </div>
    </div>
    <div :style="b.slotStyle">
      <span style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.16em;color:#5c5c5c">{{ b.reviews }}</span>
      <span :style="b.slotTextStyle">{{ b.slot }}</span>
    </div>
  </div>

  <div @click="emit('select-any')" :style="vm.anyStyle">
    <div style="flex:1;min-width:0">
      <div style="font-size:14.5px;font-weight:700;color:#0b0b0b">Barber mana saja</div>
      <div style="font-size:12.5px;line-height:1.45;color:#4a4a4a;margin-top:5px">Dicocokkan ke slot paling cepat — hari ini 11:15.</div>
    </div>
    <div :style="vm.anyDotStyle">✓</div>
  </div>
</template>
