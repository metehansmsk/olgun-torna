export type NavLink = {
  label: string
  href: string
  children?: NavLink[]
}

export type GalleryImage = { src: string; alt: string }
export type ProductFact = { label: string; value: string }
export type SpecRow = { label: string; value: string }
export type DescriptionSection = {
  id: string
  title: string
  paragraphs: string[]
  list?: string[]
}

export const machineCategories: NavLink[] = [
  { label: 'Hidrolik Presler', href: '#' },
  { label: 'Kenar Bantlama', href: '#' },
  { label: 'Ebatlama', href: '#' },
  { label: 'Zımparalama', href: '#' },
]

export const productCategories: NavLink[] = [
  { label: 'Özel Makineler ve Projeler', href: '#' },
  { label: 'Robotik ve Otomasyon', href: '#' },
  { label: 'Makineler', href: '#', children: machineCategories },
  { label: 'Comau', href: '#' },
  { label: 'Kampanyalı Ürünler', href: '#' },
]

export const serviceLinks: NavLink[] = [
  { label: 'Özel Tasarım & Fason İmalat', href: '/#hizmetler' },
  { label: 'Kurulum & Devreye Alma', href: '/#hizmetler' },
  { label: 'Periyodik Bakım', href: '/#hizmetler' },
  { label: 'Yedek Parça Tedariği', href: '/#hizmetler' },
]

export const companyLinks: NavLink[] = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Ürünlerimiz', href: '/urunlerimiz' },
  { label: 'Referanslar', href: '/referanslar' },
  { label: 'İletişim', href: '#iletisim' },
]

/** PDF katalog dosyasını public/katalog.pdf olarak eklediğinizde buton çalışır */
export const catalogPdfHref = '/katalog.pdf'

export const mainNav: NavLink[] = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Ürünlerimiz', href: '/urunlerimiz' },
  { label: 'Hizmetler', href: '#', children: serviceLinks },
  { label: 'Referanslar', href: '/referanslar' },
  { label: 'İletişim', href: '#iletisim' },
]

export const activeNavLabel = 'Anasayfa'

export const breadcrumbs: NavLink[] = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Ürünlerimiz', href: '#' },
  { label: 'Makineler', href: '#' },
  { label: 'Hidrolik Presler', href: '#' },
  { label: 'Vakum Membran Presi', href: '#' },
]

export const contactInfo = {
  address: 'Ova Mah. 44346. Sokak No:3/C Seyhan/Adana',
  phones: [
    { label: '(0322) 429 00 25', href: 'tel:+903224290025' },
    { label: '(0322) 429 35 92', href: 'tel:+903224293592' },
  ],
  email: 'info@olguntorna.com.tr',
}

export const quoteHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent('Vakum Membran Presi - Teklif Talebi')}`

export type MachineKind = 'krom' | 'degirmen' | 'kirici' | 'elek' | 'konveyor' | 'makara'

export type MachineProduct = {
  slug: string
  kind: MachineKind
  name: string
  summary: string
  features: string[]
}

/** Ürünlerimiz sayfası (görseller şimdilik temsilidir) */
export const machineProducts: MachineProduct[] = [
  {
    slug: 'krom-konsantre-tesisi',
    kind: 'krom',
    name: 'Krom Konsantre Tesisi Makineleri',
    summary:
      'Krom cevherinin zenginleştirilmesi için sallantılı masa, spiral ve yardımcı ekipmanlardan oluşan, tesise özel tasarlanan makine grupları.',
    features: ['Tesise özel proje ve imalat', 'Sallantılı masa ve spiral sistemleri', 'Montaj ve devreye alma'],
  },
  {
    slug: 'degirmenler',
    kind: 'degirmen',
    name: 'Değirmenler',
    summary:
      'Cevher öğütme işlemleri için ağır hizmet tipi bilyalı ve çubuklu değirmenler; yüksek verim ve uzun ömür için sağlam gövde yapısı.',
    features: ['Bilyalı / çubuklu tip', 'Aşınmaya dayanıklı astar', 'İsteğe göre kapasite'],
  },
  {
    slug: 'kiricilar',
    kind: 'kirici',
    name: 'Kırıcılar',
    summary:
      'Birincil ve ikincil kırma kademeleri için çeneli ve darbeli kırıcılar; sert cevherlerde yüksek kırma oranı.',
    features: ['Çeneli ve darbeli modeller', 'Değiştirilebilir aşınma parçaları', 'Kolay bakım'],
  },
  {
    slug: 'elekler',
    kind: 'elek',
    name: 'Elekler',
    summary:
      'Malzemenin boyutlarına göre sınıflandırılması için tek ve çok katlı titreşimli elekler.',
    features: ['Tek / çok katlı tabla', 'Farklı göz açıklıkları', 'Titreşim izolasyonlu yaylar'],
  },
  {
    slug: 'konveyor-bantlar',
    kind: 'konveyor',
    name: 'Konveyör Bantlar',
    summary:
      'Tesis içi malzeme taşıma için istenen uzunluk, genişlik ve eğimde imal edilen bantlı konveyör sistemleri.',
    features: ['İstenen ölçüde imalat', 'Sabit ve hareketli tipler', 'Tahrik ve gerdirme üniteleri'],
  },
  {
    slug: 'konveyor-bant-makarasi',
    kind: 'makara',
    name: 'Konveyör Bant Makarası',
    summary:
      'Konveyör bantlar için taşıyıcı, dönüş ve darbe makaraları; yedek parça olarak imalatı yapılır.',
    features: ['Yedek parça imalatı', 'Taşıyıcı / dönüş / darbe makarası', 'Sızdırmaz rulman yatakları'],
  },
]

/* ——— ANASAYFA İÇERİKLERİ ——— */

export const FOUNDED_YEAR = 1963

export type HomeStat = { icon: 'experience' | 'globe' | 'factory' | 'certificate'; value: number; suffix?: string; label: string }

/**
 * Güven bandı sayaçları.
 * DİKKAT: "ülke", "tesis" ve "sertifika" değerleri ÖRNEKTİR — yayına almadan önce gerçek rakamlarla değiştirin.
 */
export const homeStats: HomeStat[] = [
  { icon: 'experience', value: new Date().getFullYear() - FOUNDED_YEAR, suffix: '+', label: 'Yıllık Tecrübe' },
  { icon: 'globe', value: 10, suffix: '+', label: 'İhracat Yapılan Ülke' },
  { icon: 'factory', value: 250, suffix: '+', label: 'Çalışan Makine / Tesis' },
  { icon: 'certificate', value: 2, label: 'Kalite Sertifikası (ISO / CE)' },
]

export type ServiceItem = { icon: 'design' | 'install' | 'maintenance' | 'parts'; title: string; text: string }

export const homeServices: ServiceItem[] = [
  {
    icon: 'design',
    title: 'Özel Tasarım & Fason İmalat',
    text: 'Tesisinizin kapasitesine ve sahadaki koşullara göre projelendirme, teknik çizim ve talaşlı imalat.',
  },
  {
    icon: 'install',
    title: 'Kurulum & Devreye Alma',
    text: 'Makinelerin sahada montajı, hizalanması, test çalıştırmaları ve operatör bilgilendirmesi.',
  },
  {
    icon: 'maintenance',
    title: 'Periyodik Bakım',
    text: 'Planlı bakım programlarıyla duruş sürelerini azaltır, makinelerinizin ömrünü uzatırız.',
  },
  {
    icon: 'parts',
    title: 'Yedek Parça Tedariği',
    text: 'Konveyör bant makarası, aşınma parçaları ve özel ölçü yedek parçaların hızlı imalatı.',
  },
]

/** Hizmet verilen sektörler (madencilik ağırlıklı) */
export const sectors = [
  'Krom Madenciliği',
  'Metalik Madenler',
  'Taş Ocakları & Agrega',
  'Mermer & Doğal Taş',
  'Çimento & Kireç',
  'Enerji & Kömür',
]

export type Reference = { name: string; suffix: string }

/** Referanslar sayfasında gösterilen firmalar */
export const references: Reference[] = [
  { name: 'Dedeman', suffix: 'Madencilik' },
  { name: 'Global', suffix: 'Madencilik' },
  { name: 'Gümüştaş', suffix: 'Madencilik A.Ş.' },
  { name: 'CVK Group', suffix: 'Madencilik' },
  { name: 'Akmetal', suffix: 'Madencilik' },
  { name: 'Pozitif', suffix: 'Maden' },
  { name: 'Ergün', suffix: 'Madencilik' },
  { name: 'Gün', suffix: 'Madencilik' },
  { name: 'Plamako', suffix: 'Madencilik' },
  { name: 'Plakrom', suffix: 'Madencilik' },
  { name: 'Mar-Me', suffix: 'Madencilik' },
  { name: 'Adana', suffix: 'Madencilik' },
  { name: 'Nacioğulları', suffix: 'Madencilik' },
  { name: 'Koyuncu', suffix: 'Madencilik' },
  { name: 'Şanlı', suffix: 'Madencilik' },
  { name: 'Salda Krom', suffix: 'Madencilik' },
  { name: 'Aksu', suffix: 'Madencilik' },
]

export const productSections = [
  { id: 'genel-bakis', label: 'Genel Bakış' },
  { id: 'teknik-ozellikler', label: 'Teknik Özellikler' },
  { id: 'urun-aciklamasi', label: 'Ürün Açıklaması' },
  { id: 'fotograf-galerisi', label: 'Galeri' },
  { id: 'video', label: 'Video' },
  { id: 'kataloglar', label: 'Kataloglar' },
] as const

export const product = {
  title: 'Vakum Membran Presi',
  category: 'Hidrolik Presler',
  summary:
    'Termoplastik folyo ve ağaç kaplamaların oymalı veya düz yüzeyli panellere yapıştırılması için geliştirilmiş, PLC kontrollü çok fonksiyonlu pres.',
  catalogHref: '#kataloglar',
  facts: [
    { label: 'Kategori', value: 'Hidrolik Presler' },
    { label: 'Çalışma Modu', value: 'Vakum / Membran / Vakum-Membran' },
    { label: 'Kontrol Sistemi', value: 'PLC + Dokunmatik Ekran' },
    { label: 'Tepsi Yapısı', value: 'Tek (istek üzerine çift)' },
  ] satisfies ProductFact[],
}

export const overview = [
  'Termoplastik folyo ve ağaç kaplamaların oymalı veya düz yüzeyli panellere yapıştırılmasını gerçekleştirir. Vakum, membran ve vakum-membran pres olarak farklı fonksiyonlarda çalıştırılabilir.',
  'Standart olarak tek, istek üzerine çift tepsili olarak üretilir. Tepsi hareketleri el ile yapılır; baskı sırasındaki işletim döngüsü otomatik olarak gerçekleşir.',
]

export const features = [
  'Vakum, membran ve vakum-membran çalışma modları',
  'Çok fonksiyonlu PLC ile otomatik işletim döngüsü',
  'Hafızaya alınabilen çalışma programları',
  'Dokunmatik ekran ile kolay kullanım',
  'Membranlı / membransız çalışma seçimi için tek tuş',
  'Gerektiğinde takılıp çıkarılabilen kauçuk-silikon membran',
]

export const usageAreas = [
  'Mobilya kapakları',
  'Oymalı paneller',
  'Düz yüzeyli paneller',
  'Mat PVC folyo kaplama',
  'Doğal ağaç kaplama',
]

export const technicalSpecs: SpecRow[] = [
  { label: 'Model', value: '—' },
  { label: 'Çalışma Alanı', value: 'Bilgi için iletişime geçiniz' },
  { label: 'Presleme Gücü', value: 'Bilgi için iletişime geçiniz' },
  { label: 'Maksimum Çalışma Basıncı', value: 'Bilgi için iletişime geçiniz' },
  { label: 'Elektrik Gücü', value: 'Bilgi için iletişime geçiniz' },
  { label: 'Ölçüler (G x U x Y)', value: '—' },
  { label: 'Ağırlık', value: '—' },
  { label: 'Kontrol Sistemi', value: 'PLC + Dokunmatik Ekran' },
]

export const descriptionSections: DescriptionSection[] = [
  {
    id: 'aciklama-urun-hakkinda',
    title: 'Ürün Hakkında',
    paragraphs: [
      'Bu makine standart olarak tek, istek üzerine çift tepsili olarak üretilmektedir. Tepsi hareketleri el ile yapılır; baskı sırasındaki işletim döngüsü ise otomatik olarak gerçekleşir.',
      'Mat PVC folyo ve doğal ağaç kaplama kapak işleri için tasarlanan bu modelde, üst plakada bulunan kauçuk-silikon membran gerektiğinde takılıp çıkarılabilir.',
      'Yardımcı hava bölmesi sayesinde membranlı ve membransız çalışmalar arasındaki geçiş, makine üzerindeki tek bir tuş ile yapılabilir.',
    ],
  },
  {
    id: 'aciklama-teknik-ozellikler',
    title: 'Teknik Özellikler',
    paragraphs: [
      'Çalışma alanı, presleme gücü, çalışma basıncı ve elektrik gücü gibi teknik değerler model ve opsiyonel donanımlara göre farklılık gösterir.',
      'Güncel teknik veriler için teknik özellikler tablosunu inceleyebilir veya satış ekibimizden ürün kataloğunu talep edebilirsiniz.',
    ],
  },
  {
    id: 'aciklama-kullanim-alanlari',
    title: 'Kullanım Alanları',
    paragraphs: [
      'Vakum membran presi, mobilya ve dekorasyon sektöründe panel yüzeylerinin folyo veya ağaç kaplama ile kaplanması amacıyla kullanılır.',
    ],
    list: usageAreas,
  },
  {
    id: 'aciklama-avantajlar',
    title: 'Avantajlar',
    paragraphs: ['Uygulama örnekleri ve detaylı avantaj bilgileri bu alana eklenecektir.'],
    list: [
      'Tek makinede üç farklı çalışma modu',
      'Tek tuşla membranlı / membransız geçiş',
      'Hafızaya alınan programlarla tekrarlanabilir üretim',
      'Kolay takılıp çıkarılabilen membran yapısı',
    ],
  },
]

export const galleryImages: GalleryImage[] = [
  { src: '/images/press-main.png', alt: 'Vakum Membran Presi genel görünüm' },
  { src: '/images/gallery-1.png', alt: 'Isıtma plakası ve silikon membran detayı' },
  { src: '/images/gallery-2.png', alt: 'Dokunmatik ekranlı PLC kontrol paneli' },
  { src: '/images/gallery-3.png', alt: 'Üretim ortamında vakum membran presi' },
  { src: '/images/hero-bg.png', alt: 'Üretim tesisi görünümü' },
]

export const video = {
  title: 'Vakum Membran Presi - Tanıtım Videosu',
  poster: '/images/gallery-3.png',
}

export const catalogs = [
  { title: 'Vakum Membran Presi Ürün Kataloğu', format: 'PDF', size: '—', href: '#' },
  { title: 'Teknik Veri Föyü', format: 'PDF', size: '—', href: '#' },
]

export const relatedProducts = [
  { name: 'Çok Katlı Sıcak Pres', image: '/images/product-hot-press.png', href: '#' },
  { name: 'Hidrolik Soğuk Pres', image: '/images/product-cold-press.png', href: '#' },
  { name: 'Çift Tepsili Membran Pres', image: '/images/product-membrane-double.png', href: '#' },
]
