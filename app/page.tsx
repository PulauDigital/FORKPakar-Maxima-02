import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check, Phone, Shield, Star, Users, Gift, Zap, BarChart, Award, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import WhatsAppButton from "@/components/whatsapp-button"
import ImageCarousel from "@/components/image-carousel"
import FAQSection from "@/components/faq-section"
import RegistrationForm from "@/components/registration-form"

export default function Home() {
  // Testimonial data
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pengusaha",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Berkat MAXIMA Plan, penghasilan saya meningkat 300% dalam 6 bulan. Sistem AUTO Spill Over benar-benar membantu pertumbuhan jaringan saya!",
    },
    {
      name: "Siti Rahayu",
      role: "Ibu Rumah Tangga",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Awalnya saya ragu, tapi setelah bergabung dengan MAXIMA Plan, saya bisa menghasilkan Rp 5 juta per bulan hanya dengan bekerja paruh waktu.",
    },
    {
      name: "Ahmad Hidayat",
      role: "Karyawan Swasta",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "MAXIMA Plan mengubah hidup saya. Dalam 1 tahun, saya sudah bisa membeli mobil baru dan merenovasi rumah dari penghasilan bisnis ini.",
    },
  ]

  // Product testimonials
  const productTestimonials = [
    {
      quote: "Setelah rutin mengonsumsi Milagros, masalah pencernaan saya membaik dan energi saya meningkat drastis!",
      name: "Dewi S.",
    },
    {
      quote: "Kulit saya terlihat lebih cerah dan lembap sejak menggunakan produk skincare dari MAXIMA.",
      name: "Rini W.",
    },
  ]

  // Certification images
  const certificationImages = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Sertifikat BPOM",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Sertifikat Halal MUI",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Hasil Uji Klinis",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Sertifikat ISO 9001",
    },
  ]

  // FAQ data
  const faqs = [
    {
      question: "Apa itu MAXIMA Plan?",
      answer:
        "MAXIMA Plan adalah peluang bisnis eksklusif dengan sistem Affiliate Franchise Hybrid yang menawarkan potensi penghasilan tanpa batas melalui sistem reward yang transparan dan bonus besar dengan struktur yang mudah diikuti.",
    },
    {
      question: "Berapa modal awal yang dibutuhkan untuk bergabung?",
      answer:
        "Modal awal untuk bergabung dengan MAXIMA Plan sangat terjangkau dan disesuaikan dengan paket yang Anda pilih. Kami menawarkan beberapa pilihan paket dengan keuntungan yang berbeda-beda.",
    },
    {
      question: "Bagaimana cara kerja sistem AUTO Spill Over?",
      answer:
        "Sistem AUTO Spill Over bekerja dengan cara mendistribusikan downline dari upline yang lebih senior kepada Anda. Ini memastikan Anda tidak perlu bekerja sendirian dalam membangun jaringan dan mendapatkan omset.",
    },
    {
      question: "Apakah saya perlu memiliki pengalaman dalam bisnis jaringan?",
      answer:
        "Tidak, Anda tidak perlu memiliki pengalaman sebelumnya. MAXIMA Plan menyediakan pelatihan dan mentoring lengkap untuk membantu Anda memulai dan mengembangkan bisnis Anda.",
    },
    {
      question: "Bagaimana sistem pembayaran bonus di MAXIMA Plan?",
      answer:
        "Bonus dibayarkan langsung ke rekening Anda secara tunai, tanpa sistem poin yang rumit. Anda akan menerima Bonus Sponsor sebesar Rp 300.000 setiap kali mengajak orang bergabung dan Bonus Level Rp 500.000 untuk setiap omset yang tercapai.",
    },
    {
      question: "Apakah ada kewajiban tutup poin bulanan?",
      answer:
        "Tidak, MAXIMA Plan tidak mengharuskan Anda untuk melakukan pembelanjaan bulanan hanya untuk memenuhi target poin. Sistem kami dirancang untuk adil dan menguntungkan semua pihak.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Pakar Maxima</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#why-maxima" className="text-sm font-medium hover:underline underline-offset-4">
              Kenapa MAXIMA
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:underline underline-offset-4">
              Keunggulan
            </Link>
            <Link href="#products" className="text-sm font-medium hover:underline underline-offset-4">
              Produk
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimoni
            </Link>
            <Link href="#system" className="text-sm font-medium hover:underline underline-offset-4">
              Sistem
            </Link>
            <Link href="#register" className="text-sm font-medium hover:underline underline-offset-4">
              Daftar
            </Link>
          </nav>
          <Button asChild>
            <Link href="#register">Bergabung Sekarang</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-hero">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gradient">
                    Saatnya Ubah Hidup Anda
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Bergabung dengan MAXIMA Plan dan Raih Kesuksesan Finansial Sekarang!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#register">
                      Bergabung Sekarang <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#why-maxima">Pelajari Lebih Lanjut</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="MAXIMA Plan Business Opportunity"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="why-maxima" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Kenapa MAXIMA?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Peluang Bisnis yang Mengubah Hidup
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  MAXIMA Plan adalah peluang bisnis eksklusif dengan sistem reward yang transparan dan potensi
                  penghasilan tanpa batas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  icon: <BarChart className="h-10 w-10 text-primary" />,
                  title: "Potensi Penghasilan Tanpa Batas",
                  description: "Sistem reward yang transparan dan bonus besar dengan struktur yang mudah diikuti.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-primary" />,
                  title: "Investasi yang Menguntungkan",
                  description: "Modal awal terjangkau dengan potensi keuntungan tinggi dan risiko rendah.",
                },
                {
                  icon: <Users className="h-10 w-10 text-primary" />,
                  title: "Sistem Duplikasi Terbukti",
                  description: "Membangun tim solid dan menggandakan penghasilan dengan cara sistematis.",
                },
                {
                  icon: <Star className="h-10 w-10 text-primary" />,
                  title: "Dukungan Penuh",
                  description: "Mentoring dan training berkelanjutan untuk memastikan kesuksesan Anda.",
                },
              ].map((feature, index) => (
                <Card key={index} className="border-none shadow-none">
                  <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                    <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-section">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Poin Unggulan
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Keunggulan MAXIMA Plan</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Sistem bonus dan reward yang menguntungkan untuk memaksimalkan potensi penghasilan Anda
                </p>
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <Card className="overflow-hidden border-purple-300 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-full bg-purple-100">
                        <Gift className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold">Bonus Sponsor</h3>
                    </div>
                    <p className="text-3xl font-bold text-purple-600 mb-2">Rp 300.000</p>
                    <p className="text-muted-foreground">Setiap kali Anda mengajak orang untuk bergabung</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-blue-300 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-full bg-blue-100">
                        <BarChart className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold">Bonus Level</h3>
                    </div>
                    <p className="text-3xl font-bold text-blue-600 mb-2">Rp 500.000</p>
                    <p className="text-muted-foreground">Untuk setiap omset yang tercapai, tanpa batas kedalaman</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-green-300 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-full bg-green-100">
                        <Award className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold">Reward</h3>
                    </div>
                    <p className="text-3xl font-bold text-green-600 mb-2">Hingga Rp 2.4 Miliar</p>
                    <p className="text-muted-foreground">
                      Bagi mereka yang mencapai target tertentu, dengan reward yang semakin besar sesuai pencapaian Anda
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-purple-300 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-full bg-purple-100">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold">Komisi Pairing</h3>
                    </div>
                    <p className="text-3xl font-bold text-purple-600 mb-2">Rp 100.000</p>
                    <p className="text-muted-foreground">
                      Untuk setiap pasangan mitra baru di kaki kiri dan kanan dalam jaringan Anda
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-blue-300 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-full bg-blue-100">
                        <Zap className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold">Komisi Matching</h3>
                    </div>
                    <p className="text-3xl font-bold text-blue-600 mb-2">Rp 50.000</p>
                    <p className="text-muted-foreground">
                      Bonus tambahan dari komisi pairing yang diperoleh downline Anda hingga 10 level
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Bagaimana MAXIMA Berbeda?</h3>
                <ul className="space-y-4">
                  {[
                    "Sistem Pembayaran yang Jelas dan Adil: Setiap usaha Anda akan dihargai dengan bonus yang cepat cair dan reward yang menguntungkan.",
                    "Pendekatan Bisnis yang Modern: Kami menggunakan strategi bisnis terbaru yang efisien dan mudah diduplikasi.",
                    "Digitalisasi Lengkap & Transparan: Proses registrasi dan transaksi dilakukan secara digital, realtime, dan 100% transparan.",
                    "Bonus Dibayar Cash: Semua bonus dibayarkan tunai langsung ke rekening Anda, tanpa sistem poin yang ribet.",
                    "Tanpa Tutup Poin Produk: Tidak ada lagi kewajiban belanja produk tiap bulan hanya untuk tutup poin.",
                    "Mentoring Langsung dari Praktisi Berpengalaman: Dibimbing langsung oleh mentor sukses yang sudah membangun jaringan besar.",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button size="lg" asChild>
                    <Link href="#register">Bergabung Sekarang</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Produk Berkualitas
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Produk Premium MAXIMA</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Produk kesehatan berkelas internasional yang mendukung gaya hidup sehat dan berkualitas tinggi
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card className="overflow-hidden">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    fill
                    alt="Milagros Detox Water"
                    className="object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Milagros Detox Water</h3>
                  <p className="text-muted-foreground mb-4">
                    Air Detox dengan manfaat luar biasa yang menjadi andalan dalam gaya hidup sehat. Produk legendaris
                    yang telah terbukti kualitasnya.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Membantu proses detoksifikasi tubuh",
                      "Kaya akan mineral alami",
                      "Membantu menjaga kesehatan secara menyeluruh",
                      "Produk unggulan dengan kualitas internasional",
                      "Punya ratusan ribu testimoni dari konsumen yang merasakan manfaat nyata",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Product testimonial */}
                  <div className="mt-6 bg-purple-50 p-4 rounded-lg border border-purple-100">
                    <div className="flex items-start gap-2">
                      <Quote className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm italic text-gray-700">{productTestimonials[0].quote}</p>
                        <p className="text-xs font-medium text-purple-700 mt-2">- {productTestimonials[0].name}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    fill
                    alt="Produk Premium Lainnya"
                    className="object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Produk Premium Lainnya</h3>
                  <p className="text-muted-foreground mb-4">Rangkaian produk suplemen kesehatan dan skincare</p>
                  <ul className="space-y-2">
                    {[
                      "Produk suplemen kesehatan dengan standar internasional",
                      "Formulasi khusus untuk hasil optimal",
                      "Bahan-bahan premium berkualitas tinggi",
                      "Mendukung gaya hidup sehat dan berkualitas",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Product testimonial */}
                  <div className="mt-6 bg-purple-50 p-4 rounded-lg border border-purple-100">
                    <div className="flex items-start gap-2">
                      <Quote className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm italic text-gray-700">{productTestimonials[1].quote}</p>
                        <p className="text-xs font-medium text-purple-700 mt-2">- {productTestimonials[1].name}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Certification Carousel */}
            <div className="mt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold">Legalitas Produk</h3>
                <p className="text-muted-foreground mt-2"></p>
              </div>
              <div className="max-w-3xl mx-auto">
                <ImageCarousel images={certificationImages} />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-section">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Kisah Sukses
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Testimoni Mitra MAXIMA Plan</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Dengarkan pengalaman mereka yang telah bergabung dan sukses bersama MAXIMA Plan
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <Quote className="h-8 w-8 text-purple-300 mb-2" />
                      <p className="italic text-gray-700 mb-4">{testimonial.quote}</p>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Success Stories */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold">Cerita Sukses Mitra MAXIMA</h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 border-purple-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          alt="Foto Mitra Sukses"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-purple-800">
                          Dari Karyawan Biasa Menjadi Pengusaha Sukses
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          "Saya dulu hanya karyawan dengan gaji UMR. Setelah bergabung dengan MAXIMA Plan, dalam 8 bulan
                          saya sudah bisa mengundurkan diri dan fokus menjalankan bisnis ini. Kini penghasilan saya 5x
                          lipat dari gaji sebelumnya."
                        </p>
                        <p className="text-xs font-medium text-purple-700 mt-2">- Hendra Wijaya, Bandung</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 border-blue-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          alt="Foto Mitra Sukses"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-blue-800">Membangun Bisnis Sambil Mengurus Keluarga</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          "Sebagai ibu rumah tangga, MAXIMA Plan memberikan saya fleksibilitas untuk menghasilkan sambil
                          tetap mengurus keluarga. Berkat sistem AUTO Spill Over, jaringan saya berkembang bahkan saat
                          saya sedang fokus pada keluarga."
                        </p>
                        <p className="text-xs font-medium text-blue-700 mt-2">- Anita Sari, Jakarta</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="system" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Sistem Unik
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Konsep AUTO Spill Over yang Revolusioner
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Dengan sistem AUTO Spill Over, Anda dijamin 100% pasti mendapat mitra dan omset. Sistem ini memastikan
                  Anda tidak akan pernah merasa sendirian dalam bisnis ini.
                </p>
              </div>
            </div>

            {/* System Description */}
            <div className="mb-12 max-w-3xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-100">
              <p className="text-lg">
                Sistem AUTO Spill Over memastikan pertumbuhan jaringan Anda dengan cara yang efektif dan efisien. Upline
                senior akan membantu Anda mendapatkan downline, sehingga Anda tidak perlu memulai dari nol dan dapat
                lebih cepat mengembangkan bisnis Anda.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Keunggulan Sistem AUTO Spill Over</h3>
                <ul className="space-y-4">
                  {[
                    "Downline akan di-spill over dari upline yang lebih senior",
                    "Kesempatan lebih besar untuk mendapatkan mitra tanpa harus bekerja keras sendirian",
                    "Jaminan mendapatkan omset melalui sistem yang terbukti",
                    "Bukan bisnis MLM biasa, melainkan bisnis dengan konsep Affiliate Franchise Hybrid",
                    "Lebih simple, cepat, dan efisien untuk menghasilkan profit",
                    "Balik modal lebih cepat dengan sistem yang terstruktur",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button size="lg" asChild>
                    <Link href="#register">Bergabung Sekarang</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Pertanyaan Umum</h3>
                <FAQSection faqs={faqs} />
              </div>
            </div>
          </div>
        </section>

        <section id="register" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Mulai Sekarang
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Siap Memulai Perjalanan Anda?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Isi Formulir di Bawah Ini dan Mulai Perjalanan Anda Menuju Kesuksesan Bersama MAXIMA!
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-md mt-10">
              <Card>
                <CardContent className="pt-6">
                  <RegistrationForm />
                </CardContent>
              </Card>

              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  Atau hubungi kami langsung melalui WhatsApp untuk informasi lebih lanjut
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 border-2 border-primary mt-4"
                  asChild
                >
                  <Link href="https://wa.me/6282260882389">
                    <Phone className="mr-2 h-4 w-4 text-primary" /> Hubungi Kami di WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Pakar Maxima</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Jalan Hidup Baru Anda Dimulai di Sini: Bergabung dengan MAXIMA Plan
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <p className="text-sm font-medium">Navigasi Cepat</p>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#why-maxima" className="hover:underline">
                Kenapa MAXIMA
              </Link>
              <Link href="#benefits" className="hover:underline">
                Keunggulan
              </Link>
              <Link href="#products" className="hover:underline">
                Produk
              </Link>
              <Link href="#testimonials" className="hover:underline">
                Testimoni
              </Link>
              <Link href="#system" className="hover:underline">
                Sistem
              </Link>
              <Link href="#register" className="hover:underline">
                Daftar
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <p className="text-sm font-medium">Kontak</p>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="https://wa.me/6282260882389" className="hover:underline">
                WhatsApp: +62 822-6088-2389
              </Link>
              <Link href="mailto:info@pakarmaxima.com" className="hover:underline">
                Email: info@pakarmaxima.my.id
              </Link>
            </nav>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-between gap-4 border-t py-6 md:h-16 md:flex-row md:py-0">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Pakar Maxima. Hak Cipta Dilindungi.
          </p>
        </div>
      </footer>
      <WhatsAppButton phoneNumber="6282260882389" />
    </div>
  )
}
