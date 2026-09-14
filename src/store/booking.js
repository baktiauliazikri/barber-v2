// Booking flow state — a module-level singleton, ported from the `Component`
// class in `project/Kontur Booking v2.dc.html` (`state` + `renderVals()`).
// Kept as one flat reactive store (no Pinia) since there is only ever one
// booking flow on screen at a time.

import { reactive, computed, onMounted, onUnmounted } from 'vue';
import { BRANCHES, SERVICES, ADDONS, BARBERS, DOW, DOW_FULL, DAY_NUMS, SLOTS, LABELS, CTA, rp } from '../data.js';
import { dot, card, chip, sw, knob } from '../styleHelpers.js';

const state = reactive({
  step: 1,
  branch: 'kemang',
  sort: 'near',
  service: 'cut',
  open: 'cut',
  addons: {},
  barber: 'andi',
  day: 14,
  time: '14:00',
  left: 597,
  espresso: false,
  copied: false,
  name: 'Raditya Pratama'
});

let copiedTimer = null;

function go(n) {
  state.step = n;
}

const vm = computed(() => {
  const st = state;
  const step = st.step;
  const branch = BRANCHES.find((b) => b.id === st.branch);
  const svc = SERVICES.find((s) => s.id === st.service);
  const anyBarber = st.barber === 'any';
  const barber = anyBarber ? null : BARBERS.find((b) => b.id === st.barber);
  const activeAddons = ADDONS.filter((a) => st.addons[a.id]);
  const total = svc.price + activeAddons.reduce((n, a) => n + a.price, 0);
  const mins = svc.mins + activeAddons.reduce((n, a) => n + a.mins, 0);
  const dayIdx = DAY_NUMS.indexOf(st.day);
  const dayFull = DOW_FULL[dayIdx];
  const dateText = `${dayFull}, ${st.day} Oktober 2026`;
  const slotData = SLOTS[st.day] || { pagi: [], siang: [], malam: [] };
  const m = Math.floor(st.left / 60);
  const sec = st.left % 60;

  const footer = {
    1: { label: 'CABANG DIPILIH', value: branch.name, mono: false },
    2: { label: `${mins} MENIT · ${1 + activeAddons.length} ITEM`, value: rp(total), big: true },
    3: { label: 'BARBER DIPILIH', value: anyBarber ? 'Barber mana saja' : barber.name },
    4: { label: 'JADWAL', value: st.time ? `${DOW[dayIdx]}, ${st.day} OKT · ${st.time}` : `${DOW[dayIdx]}, ${st.day} OKT · PILIH JAM`, mono: true }
  }[step] || null;

  return {
    isFlow: step <= 5,
    isReceipt: step === 6,
    isStep1: step === 1, isStep2: step === 2, isStep3: step === 3, isStep4: step === 4, isStep5: step === 5,
    stepLabel: `0${Math.min(step, 5)}/05`,
    segs: [1, 2, 3, 4, 5].map((i) => ({ style: `height:3px;flex:1;background:${i <= step ? '#0b0b0b' : '#e2e2e2'}` })),
    contextLine: step === 3
      ? `${branch.name.toUpperCase()} · ${svc.name.toUpperCase()} · ${svc.mins} MIN`
      : step === 4
        ? `${branch.name.toUpperCase()} · ${(anyBarber ? 'BARBER MANA SAJA' : barber.name.toUpperCase())} · ${mins} MIN`
        : false,
    ctaLabel: CTA[step] || '',

    showHold: step === 4,
    hold: `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`,
    showSummaryRow: !!footer,
    footerLabel: footer ? footer.label : '',
    footerValue: footer ? footer.value : '',
    footerValueStyle: footer && footer.big
      ? "font-family:'Archivo Black',sans-serif;font-size:24px;color:#0b0b0b;line-height:1;letter-spacing:-.02em;white-space:nowrap"
      : footer && footer.mono
        ? "font-family:'Space Mono',monospace;font-size:12px;font-weight:700;letter-spacing:.06em;color:#0b0b0b;text-align:right"
        : 'font-size:14px;font-weight:700;color:#0b0b0b;text-align:right',

    nearStyle: chip(st.sort === 'near'),
    soonStyle: chip(st.sort === 'soon'),
    branches: [...BRANCHES]
      .sort((a, b) => (st.sort === 'near' ? a.km - b.km : a.slot.localeCompare(b.slot)))
      .map((b) => {
        const on = b.id === st.branch;
        return {
          ...b,
          distance: b.km.toString().replace('.', ',') + ' KM',
          patId: 'p-' + b.id, patUrl: `url(#p-${b.id})`,
          cardStyle: card(on), dotStyle: dot(on),
          slotStyle: `margin-top:12px;padding:9px 11px;display:flex;align-items:center;justify-content:space-between;gap:10px;background:${on ? '#e8f2ec' : '#f5f5f5'}`,
          slotTextStyle: `font-family:'Space Mono',monospace;font-size:13px;font-weight:700;letter-spacing:.04em;color:${on ? '#1a7a4f' : '#0b0b0b'}`
        };
      }),

    serviceIntro: `${branch.name} · Atelier 01. Satu layanan utama, tambahan opsional menyusul.`,
    serviceNameUpper: svc.name.toUpperCase(),
    services: SERVICES.map((d) => {
      const on = d.id === st.service;
      return {
        ...d, priceText: rp(d.price), open: st.open === d.id,
        toggleLabel: st.open === d.id ? 'TUTUP RINCIAN' : 'LIHAT RINCIAN',
        cardStyle: `border:1px solid ${on ? '#0b0b0b' : '#d4d4d4'};border-left:${on ? '5px' : '1px'} solid ${on ? '#0b0b0b' : '#d4d4d4'};background:#ffffff;padding:15px;margin-bottom:10px;cursor:pointer;transition:all .16s ease`,
        dotStyle: `width:20px;height:20px;margin:12px 0 0 auto;display:flex;align-items:center;justify-content:center;font-size:11px;border:1px solid ${on ? '#0b0b0b' : '#c4c4c4'};background:${on ? '#0b0b0b' : 'transparent'};color:${on ? '#ffffff' : 'transparent'}`
      };
    }),
    addons: ADDONS.map((a) => {
      const on = !!st.addons[a.id];
      return {
        ...a,
        style: `display:flex;align-items:center;gap:12px;padding:13px;border:1px solid ${on ? '#0b0b0b' : '#d4d4d4'};background:#ffffff;margin-bottom:8px;cursor:pointer;transition:all .16s ease`,
        switchStyle: sw(on), knobStyle: knob(on)
      };
    }),

    anyBarber,
    anyDotStyle: dot(anyBarber),
    anyStyle: `display:flex;align-items:flex-start;gap:12px;margin-top:4px;padding:14px;cursor:pointer;transition:all .16s ease;border:1px dashed ${anyBarber ? '#0b0b0b' : '#c4c4c4'};background:${anyBarber ? '#f5f5f5' : '#ffffff'}`,
    barbers: BARBERS.map((x) => {
      const on = x.id === st.barber;
      return {
        ...x, patId: 'p-' + x.id, patUrl: `url(#p-${x.id})`,
        cardStyle: card(on), dotStyle: dot(on),
        slotStyle: `margin-top:12px;padding:9px 11px;display:flex;align-items:center;justify-content:space-between;gap:10px;background:${on ? '#e8f2ec' : '#f5f5f5'}`,
        slotTextStyle: `font-family:'Space Mono',monospace;font-size:12px;font-weight:700;letter-spacing:.1em;color:${on ? '#1a7a4f' : (x.today ? '#0b0b0b' : '#5c5c5c')}`
      };
    }),

    timeIntro: `Semua jam dalam WIB. Durasi ${mins} menit.`,
    days: DAY_NUMS.map((num, i) => {
      const on = num === st.day;
      const s = SLOTS[num] || { pagi: [], siang: [], malam: [] };
      const n = s.pagi.length + s.siang.length + s.malam.length;
      const none = n === 0;
      return {
        num, dow: DOW[i], count: none ? '—' : n, none,
        style: `padding:7px 2px;text-align:center;cursor:${none ? 'default' : 'pointer'};transition:all .16s ease;border:1px solid ${on ? '#0b0b0b' : '#d4d4d4'};background:${on ? '#0b0b0b' : '#ffffff'};opacity:${none ? .4 : 1}`,
        dowStyle: `font-family:'Space Mono',monospace;font-size:8.5px;letter-spacing:.1em;color:${on ? '#9c9c9c' : '#5c5c5c'}`,
        numStyle: `font-family:'Archivo Black',sans-serif;font-size:15px;margin-top:3px;line-height:1;color:${on ? '#ffffff' : '#0b0b0b'}`,
        countStyle: `font-family:'Space Mono',monospace;font-size:9.5px;margin-top:4px;color:${on ? '#9c9c9c' : '#5c5c5c'}`
      };
    }),
    groups: ['pagi', 'siang', 'malam'].filter((k) => slotData[k].length).map((k) => ({
      label: LABELS[k],
      slots: slotData[k].map((t) => {
        const on = t === st.time;
        return {
          time: t,
          style: `padding:13px 4px;text-align:center;font-family:'Space Mono',monospace;font-size:13.5px;font-weight:700;letter-spacing:.04em;cursor:pointer;transition:all .16s ease;border:1px solid ${on ? '#0b0b0b' : '#d4d4d4'};background:${on ? '#0b0b0b' : '#ffffff'};color:${on ? '#ffffff' : '#0b0b0b'}`
        };
      })
    })),

    name: st.name,
    rows: [
      { label: 'LOKASI', value: branch.name, editStep: 1 },
      { label: 'LAYANAN', value: svc.name, editStep: 2 },
      { label: 'BARBER', value: anyBarber ? 'Barber mana saja' : barber.name, editStep: 3 },
      { label: 'JADWAL', value: `${dateText} · ${st.time || '—'} WIB`, editStep: 4 }
    ].map((r, i, arr) => ({ ...r, style: `display:flex;align-items:center;gap:12px;padding:13px;${i < arr.length - 1 ? 'border-bottom:1px solid #d4d4d4;' : ''}` })),
    lineItems: [{ label: `${svc.name} · ${svc.mins} menit`, price: rp(svc.price) }]
      .concat(activeAddons.map((a) => ({ label: `${a.name} · ${a.mins} menit`, price: rp(a.price) }))),
    totalPrice: rp(total),
    espressoStyle: `display:flex;align-items:center;gap:12px;padding:13px;border:1px solid ${st.espresso ? '#0b0b0b' : '#d4d4d4'};background:#ffffff;cursor:pointer;transition:all .16s ease`,
    switchStyle: sw(st.espresso),
    knobStyle: knob(st.espresso),

    ref: 'BRB-8F42K',
    receiptIntro: `Kursimu sudah kami siapkan, ${st.name.split(' ')[0]}.`,
    receiptBranch: branch.full,
    receiptAddress: branch.address,
    receiptBarber: anyBarber ? 'Barber mana saja' : barber.name,
    receiptBarberRole: anyBarber ? 'DICOCOKKAN OTOMATIS' : barber.role,
    receiptService: svc.name,
    receiptDuration: `${mins} MENIT`,
    receiptDate: dateText,
    receiptTime: `${st.time || '—'} WIB`,
    receiptMapLabel: `${branch.name.toUpperCase()} · ${branch.km.toString().replace('.', ',')} KM`,
    copyLabel: st.copied ? 'COPIED' : 'COPY',
    copyStyle: `width:86px;flex-shrink:0;display:flex;align-items:center;justify-content:center;cursor:pointer;font-family:'Space Mono',monospace;font-size:10px;letter-spacing:.18em;border-left:1px solid #0b0b0b;background:${st.copied ? '#e8f2ec' : '#ffffff'};color:${st.copied ? '#1a7a4f' : '#0b0b0b'};transition:all .16s ease`,
    barcodeStyle: 'margin-top:18px;height:62px;background:repeating-linear-gradient(90deg,#0b0b0b 0 3px,transparent 3px 6px,#0b0b0b 6px 8px,transparent 8px 13px,#0b0b0b 13px 17px,transparent 17px 20px)'
  };
});

const actions = {
  go,
  next: () => go(state.step === 5 ? 6 : Math.min(state.step + 1, 6)),
  back: () => go(Math.max(state.step - 1, 1)),
  restart: () => {
    state.step = 1;
    state.left = 597;
    state.copied = false;
  },
  sortNear: () => { state.sort = 'near'; },
  sortSoon: () => { state.sort = 'soon'; },
  selectBranch: (id) => { state.branch = id; },
  selectService: (id) => { state.service = id; state.open = id; },
  toggleDetails: (id) => { state.open = state.open === id ? null : id; },
  toggleAddon: (id) => { state.addons[id] = !state.addons[id]; },
  selectBarber: (id) => { state.barber = id; },
  selectAny: () => { state.barber = 'any'; },
  selectDay: (num, none) => { if (!none) { state.day = num; state.time = null; } },
  selectSlot: (t) => { state.time = t; state.left = 597; },
  setName: (value) => { state.name = value; },
  toggleEspresso: () => { state.espresso = !state.espresso; },
  copyRef: () => {
    if (navigator.clipboard) navigator.clipboard.writeText('BRB-8F42K').catch(() => {});
    state.copied = true;
    clearTimeout(copiedTimer);
    copiedTimer = setTimeout(() => { state.copied = false; }, 1600);
  }
};

// Countdown ticks for the whole lifetime of the app (matches the original
// `componentDidMount`/`componentWillUnmount` on the root component), not
// just while step 4 is visible — step 4 only decides whether it's shown.
let tickInterval = null;
let mountedCount = 0;

export function useBooking() {
  onMounted(() => {
    mountedCount += 1;
    if (!tickInterval) {
      tickInterval = setInterval(() => {
        if (state.left > 0) state.left -= 1;
      }, 1000);
    }
  });
  onUnmounted(() => {
    mountedCount -= 1;
    if (mountedCount <= 0 && tickInterval) {
      clearInterval(tickInterval);
      tickInterval = null;
    }
  });

  return { state, vm, ...actions };
}
