<script setup>
defineProps({
  vm: { type: Object, required: true }
});
const emit = defineEmits(['restart', 'copy-ref']);
</script>

<template>
  <div style="display:flex;align-items:center;gap:10px;padding:15px 18px;background:#ffffff;border-bottom:1px solid #0b0b0b;flex-shrink:0">
    <div style="flex:1;min-width:0">
      <div style="font-family:'Archivo Black',sans-serif;font-size:15px;letter-spacing:.14em;color:#0b0b0b;line-height:1">KONTUR</div>
      <div style="font-family:'Space Mono',monospace;font-size:8.5px;letter-spacing:.26em;color:#8c8c8c;margin-top:4px">BARBER ATELIER</div>
    </div>
    <div style="display:flex;align-items:center;gap:6px;background:#e8f2ec;padding:5px 9px;flex-shrink:0">
      <div style="width:6px;height:6px;border-radius:50%;background:#1a7a4f"></div>
      <div style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.2em;color:#1a7a4f">CONFIRMED</div>
    </div>
    <div
      class="hoverable"
      style="width:28px;height:28px;border:1px solid #0b0b0b;display:flex;align-items:center;justify-content:center;font-size:12px;color:#0b0b0b;cursor:pointer;flex-shrink:0"
      @click="emit('restart')"
    >✕</div>
  </div>

  <div style="flex:1;overflow-y:auto">

    <div style="padding:26px 18px 22px;border-bottom:2px solid #0b0b0b">
      <div style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.24em;color:#5c5c5c;margin-bottom:14px">RESERVATION CONFIRMED</div>
      <h1 style="font-family:'Archivo Black',sans-serif;font-size:34px;font-weight:400;line-height:.98;margin:0 0 14px;color:#0b0b0b;letter-spacing:-.02em;text-transform:uppercase">Booking<br />confirmed</h1>
      <p style="font-size:14px;line-height:1.5;color:#4a4a4a;margin:0;max-width:34ch">{{ vm.receiptIntro }}</p>
    </div>

    <div style="display:flex;align-items:stretch;background:#f5f5f5;border-bottom:1px solid #0b0b0b">
      <div style="flex:1;min-width:0;padding:15px 18px">
        <div style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.24em;color:#5c5c5c">BOOKING REFERENCE</div>
        <div style="font-family:'Space Mono',monospace;font-size:23px;font-weight:700;letter-spacing:.06em;color:#0b0b0b;margin-top:6px;line-height:1">{{ vm.ref }}</div>
      </div>
      <div :style="vm.copyStyle" @click="emit('copy-ref')">{{ vm.copyLabel }}</div>
    </div>

    <div style="padding:0 18px;border-bottom:2px solid #0b0b0b">

      <div style="display:flex;align-items:center;gap:9px;padding:12px 0;border-bottom:1px solid #0b0b0b">
        <div style="width:7px;height:7px;border-radius:50%;background:#1a7a4f;flex-shrink:0"></div>
        <div style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.2em;color:#1a7a4f;flex-shrink:0">CONFIRMED</div>
        <div style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.2em;color:#0b0b0b;flex:1;min-width:0;text-align:right">ATELIER PASS</div>
      </div>

      <div style="padding:18px 0;border-bottom:1px solid #d4d4d4">
        <div style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.24em;color:#5c5c5c;margin-bottom:7px">BRANCH</div>
        <div style="font-family:'Archivo Black',sans-serif;font-size:21px;line-height:1.1;color:#0b0b0b;letter-spacing:-.01em">{{ vm.receiptBranch }}</div>
        <div style="font-size:13px;color:#4a4a4a;margin-top:6px;line-height:1.45">{{ vm.receiptAddress }}</div>
      </div>

      <div style="display:flex;align-items:baseline;gap:14px;padding:15px 0;border-bottom:1px solid #d4d4d4">
        <div style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.24em;color:#5c5c5c;width:74px;flex-shrink:0">BARBER</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:15.5px;font-weight:600;color:#0b0b0b;line-height:1.3">{{ vm.receiptBarber }}</div>
          <div style="font-family:'Space Mono',monospace;font-size:10px;letter-spacing:.14em;color:#5c5c5c;margin-top:4px">{{ vm.receiptBarberRole }}</div>
        </div>
      </div>

      <div style="display:flex;align-items:baseline;gap:14px;padding:15px 0;border-bottom:1px solid #d4d4d4">
        <div style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.24em;color:#5c5c5c;width:74px;flex-shrink:0">SERVICE</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:15.5px;font-weight:600;color:#0b0b0b;line-height:1.3">{{ vm.receiptService }}</div>
          <div style="font-family:'Space Mono',monospace;font-size:10px;letter-spacing:.14em;color:#5c5c5c;margin-top:4px">{{ vm.receiptDuration }}</div>
        </div>
      </div>

      <div style="display:flex;align-items:baseline;gap:14px;padding:15px 0 18px">
        <div style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.24em;color:#5c5c5c;width:74px;flex-shrink:0">TIME</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:15.5px;font-weight:600;color:#0b0b0b;line-height:1.3">{{ vm.receiptDate }}</div>
          <div style="font-family:'Archivo Black',sans-serif;font-size:19px;color:#0b0b0b;margin-top:5px;line-height:1">{{ vm.receiptTime }}</div>
        </div>
      </div>

    </div>

    <div style="padding:18px 18px 20px;border-bottom:2px solid #0b0b0b">
      <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:14px">
        <div style="min-width:0">
          <div style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.24em;color:#5c5c5c">TOTAL DUE</div>
          <div style="font-size:12.5px;color:#4a4a4a;margin-top:5px;line-height:1.4">Bayar di atelier setelah selesai</div>
        </div>
        <div style="font-family:'Archivo Black',sans-serif;font-size:30px;color:#0b0b0b;line-height:.9;white-space:nowrap;flex-shrink:0;letter-spacing:-.02em">{{ vm.totalPrice }}</div>
      </div>
      <div :style="vm.barcodeStyle"></div>
      <div style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.22em;color:#5c5c5c;margin-top:10px">SCAN ON ARRIVAL · KONTUR PASS</div>
    </div>

    <div style="border-bottom:2px solid #0b0b0b">
      <div style="height:128px;position:relative;background:#e2e2e2;filter:grayscale(1) contrast(1.15);background-image:repeating-linear-gradient(0deg,#c9c9c9 0 1px,transparent 1px 24px),repeating-linear-gradient(90deg,#c9c9c9 0 1px,transparent 1px 24px)">
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:9px;height:9px;border-radius:50%;background:#0b0b0b"></div>
      </div>
      <div style="display:flex;align-items:baseline;gap:12px;padding:12px 18px;border-top:1px solid #0b0b0b">
        <div style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.18em;color:#0b0b0b;flex:1;min-width:0">{{ vm.receiptMapLabel }}</div>
        <div style="font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.18em;color:#5c5c5c;flex-shrink:0">VALET</div>
      </div>
    </div>

    <div style="padding:18px 18px 0;display:flex;flex-direction:column;gap:8px">
      <div class="cta-btn" style="background:#0b0b0b;color:#ffffff;height:52px;display:flex;align-items:center;justify-content:center;font-family:'Space Mono',monospace;font-size:11.5px;letter-spacing:.18em;cursor:pointer">ADD TO CALENDAR</div>
      <div class="btn-outline" style="background:#ffffff;border:1px solid #0b0b0b;color:#0b0b0b;height:50px;display:flex;align-items:center;justify-content:center;font-family:'Space Mono',monospace;font-size:11.5px;letter-spacing:.18em;cursor:pointer">WHATSAPP CONCIERGE</div>
      <div class="btn-outline" style="background:#ffffff;border:1px solid #0b0b0b;color:#0b0b0b;height:50px;display:flex;align-items:center;justify-content:center;font-family:'Space Mono',monospace;font-size:11.5px;letter-spacing:.18em;cursor:pointer">GET DIRECTIONS</div>
    </div>

    <div style="padding:24px 18px 26px">
      <div @click="emit('restart')" style="font-family:'Space Mono',monospace;font-size:10.5px;letter-spacing:.14em;color:#0b0b0b;cursor:pointer;border-bottom:1px solid #0b0b0b;display:inline-block;padding-bottom:2px">← MULAI DARI AWAL</div>
      <div style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.22em;color:#8c8c8c;margin-top:18px">KONTUR BARBER ATELIER · EST. 2020</div>
    </div>

  </div>
</template>
