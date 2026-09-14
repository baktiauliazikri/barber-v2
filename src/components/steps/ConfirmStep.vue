<script setup>
defineProps({
  vm: { type: Object, required: true }
});
const emit = defineEmits(['edit-step', 'set-name', 'toggle-espresso']);
</script>

<template>
  <h1 style="font-family:'Archivo Black',sans-serif;font-size:30px;font-weight:400;line-height:1;margin:0 0 12px;color:#0b0b0b;letter-spacing:-.02em;text-transform:uppercase">Periksa &amp;<br />konfirmasi</h1>
  <p style="font-size:14px;line-height:1.5;color:#4a4a4a;margin:0 0 20px;max-width:32ch">Tidak ada pembayaran di muka. Bayar di atelier setelah selesai.</p>

  <div style="border:1px solid #0b0b0b;margin-bottom:22px">
    <div v-for="r in vm.rows" :key="r.label" :style="r.style">
      <div style="flex:1;min-width:0">
        <div style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.22em;color:#5c5c5c">{{ r.label }}</div>
        <div style="font-size:14.5px;font-weight:700;color:#0b0b0b;margin-top:4px;line-height:1.3">{{ r.value }}</div>
      </div>
      <div
        @click="emit('edit-step', r.editStep)"
        style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.16em;color:#0b0b0b;cursor:pointer;flex-shrink:0;border-bottom:1px solid #0b0b0b;padding-bottom:1px"
      >UBAH</div>
    </div>
  </div>

  <div style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.24em;color:#5c5c5c;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid #0b0b0b">DATA KAMU</div>

  <div style="margin-bottom:14px">
    <div style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.14em;color:#5c5c5c;margin-bottom:6px">NAMA LENGKAP</div>
    <div style="position:relative">
      <input
        :value="vm.name"
        @change="emit('set-name', $event.target.value)"
        style="width:100%;padding:13px 90px 13px 13px;font-size:15px;color:#0b0b0b;background:#ffffff;border:1px solid #d4d4d4"
      />
      <div style="position:absolute;right:8px;top:50%;transform:translateY(-50%);font-family:'Space Mono',monospace;font-size:8.5px;letter-spacing:.14em;color:#5c5c5c;background:#f5f5f5;padding:4px 7px">DARI AKUN</div>
    </div>
  </div>

  <div style="margin-bottom:14px">
    <div style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.14em;color:#5c5c5c;margin-bottom:6px">NOMOR WHATSAPP — TIKET DIKIRIM KE SINI</div>
    <div style="position:relative">
      <input
        value="+62 812-9842-1100"
        style="width:100%;padding:13px 90px 13px 13px;font-size:15px;color:#0b0b0b;background:#ffffff;border:1px solid #d4d4d4"
      />
      <div style="position:absolute;right:8px;top:50%;transform:translateY(-50%);font-family:'Space Mono',monospace;font-size:8.5px;letter-spacing:.14em;color:#5c5c5c;background:#f5f5f5;padding:4px 7px">DARI AKUN</div>
    </div>
  </div>

  <div style="margin-bottom:20px">
    <div style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.14em;color:#5c5c5c;margin-bottom:6px">CATATAN UNTUK BARBER — OPSIONAL</div>
    <textarea
      rows="3"
      placeholder="Misal: taper fade di samping, atas dibiarkan panjang."
      style="width:100%;padding:13px;font-size:14px;line-height:1.5;color:#0b0b0b;background:#ffffff;border:1px solid #d4d4d4;resize:none"
    ></textarea>
  </div>

  <div @click="emit('toggle-espresso')" :style="vm.espressoStyle">
    <div style="flex:1;min-width:0">
      <div style="font-size:14.5px;font-weight:700;color:#0b0b0b">Single-origin espresso</div>
      <div style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.12em;color:#5c5c5c;margin-top:5px">HOUSE BLEND · DI LOUNGE · GRATIS</div>
    </div>
    <div :style="vm.switchStyle"><div :style="vm.knobStyle"></div></div>
  </div>

  <div style="margin-top:22px;border-top:1px solid #0b0b0b;padding-top:14px">
    <div v-for="(l, i) in vm.lineItems" :key="i" style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px;gap:12px">
      <div style="font-size:13.5px;color:#4a4a4a;min-width:0">{{ l.label }}</div>
      <div style="font-family:'Space Mono',monospace;font-size:13px;color:#0b0b0b;white-space:nowrap">{{ l.price }}</div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:baseline;padding-top:12px;border-top:1px solid #d4d4d4;gap:12px">
      <div style="font-family:'Space Mono',monospace;font-size:10px;letter-spacing:.2em;color:#5c5c5c">TOTAL</div>
      <div style="font-family:'Archivo Black',sans-serif;font-size:26px;color:#0b0b0b;line-height:1;letter-spacing:-.02em;white-space:nowrap">{{ vm.totalPrice }}</div>
    </div>
    <div style="font-size:12.5px;color:#4a4a4a;margin-top:8px">Sudah termasuk pajak dan biaya layanan.</div>
  </div>
</template>
