// Mock data — ported verbatim from `project/Kontur Booking v2.dc.html`.
// No backend; the booking flow runs entirely on this in-memory data.

export const BRANCHES = [
  { id: 'kemang', name: 'Kemang Flagship', full: 'Jakarta — Kemang Flagship', address: 'Jl. Kemang Raya No. 18, Jakarta Selatan', km: 1.8, travel: '8 MNT BERKENDARA', slot: '14:30' },
  { id: 'senopati', name: 'Senopati Atelier', full: 'Jakarta — Senopati Atelier', address: 'Jl. Senopati No. 42, Kebayoran Baru', km: 3.4, travel: '14 MNT BERKENDARA', slot: '11:15' },
  { id: 'menteng', name: 'Menteng Heritage', full: 'Jakarta — Menteng Heritage', address: 'Jl. Teuku Cik Ditiro No. 12, Jakarta Pusat', km: 7.9, travel: '26 MNT BERKENDARA', slot: '16:00' }
];

export const SERVICES = [
  {
    id: 'cut', name: 'The Signature Cut', price: 120000, mins: 45,
    meta: '45 MIN · HOT TOWEL',
    summary: 'Potong presisi dengan gunting dan taper, ditutup handuk panas.',
    details: ['Analisa bentuk kepala sebelum potong', 'Kerja gunting & taper presisi', 'Handuk uap botanikal', 'Rapikan garis leher dengan pisau cukur']
  },
  {
    id: 'beard', name: 'Beard Sculpt & Sharpen', price: 80000, mins: 30,
    meta: '30 MIN · FEATHER RAZOR',
    summary: 'Bentuk ulang janggut dan line-up pipi dengan pisau cukur.',
    details: ['Pembentukan freehand sesuai rahang', 'Line-up pipi dengan feather razor', 'Minyak cendana Jepang', 'Bungkus lather panas']
  },
  {
    id: 'ritual', name: 'Executive Grooming Ritual', price: 180000, mins: 75, badge: true,
    meta: '75 MIN · PAKET LENGKAP',
    summary: 'Potong, janggut, detoks kulit kepala, dan cold towel dalam satu sesi.',
    details: ['Signature Cut lengkap', 'Beard sculpt bespoke', 'Detoks kulit kepala charcoal', 'Cold towel pengencang pori']
  }
];

export const ADDONS = [
  { id: 'detox', name: 'Charcoal Scalp Detox', price: 35000, mins: 10, meta: '+RP 35.000 · 10 MIN' },
  { id: 'shave', name: 'Hot Lather Neck Shave', price: 25000, mins: 10, meta: '+RP 25.000 · 10 MIN' }
];

export const BARBERS = [
  {
    id: 'andi', name: 'Andi Pratama', role: 'LEAD ARTISAN · 8 TAHUN', reviews: '420 ULASAN',
    tags: ['Gunting klasik', 'Taper anatomis'], slot: 'HARI INI 14:30', today: true
  },
  {
    id: 'kevin', name: 'Kevin Ardiansyah', role: 'MASTER SPECIALIST · 6 TAHUN', reviews: '290 ULASAN',
    tags: ['Modern crop', 'Burst fade', 'Tekstur'], slot: 'HARI INI 11:15', today: true
  },
  {
    id: 'budi', name: 'Budi Hartono', role: 'SENIOR MASTER · 9 TAHUN', reviews: '510 ULASAN',
    tags: ['Wet shave', 'Razor work'], slot: 'BESOK 09:00', today: false
  }
];

export const DOW = ['SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB', 'MIN'];
export const DOW_FULL = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
export const DAY_NUMS = [12, 13, 14, 15, 16, 17, 18];

export const SLOTS = {
  12: { pagi: ['09:15'], siang: ['13:30'], malam: ['19:30'] },
  13: { pagi: ['10:00', '11:30'], siang: ['14:00', '16:00'], malam: ['20:00'] },
  14: { pagi: ['10:00', '10:45'], siang: ['13:00', '14:00', '15:00', '16:30'], malam: ['19:00', '20:00'] },
  15: { pagi: ['10:15'], siang: ['13:00', '15:45'], malam: ['19:00'] },
  16: { pagi: ['11:00'], siang: ['16:00'], malam: [] },
  17: { pagi: ['09:00', '10:30'], siang: ['13:15', '14:45'], malam: ['18:30', '20:15'] },
  18: { pagi: [], siang: [], malam: [] }
};

export const LABELS = { pagi: 'PAGI · 09:00–12:00', siang: 'SIANG · 13:00–17:00', malam: 'MALAM · 18:00–21:00' };

export const CTA = { 1: 'LANJUT PILIH LAYANAN', 2: 'LANJUT PILIH BARBER', 3: 'LANJUT PILIH JADWAL', 4: 'LANJUT ISI DATA DIRI', 5: 'KONFIRMASI BOOKING' };

export const rp = (n) => 'Rp ' + n.toLocaleString('id-ID');
