import { ArrowDown, Users, Award, Gift, Zap } from "lucide-react"

export default function SystemDiagram() {
  return (
    <div className="relative py-8 px-4">
      <div className="grid grid-cols-1 gap-8 max-w-lg mx-auto">
        {/* Top Node */}
        <div className="bg-purple-100 p-4 rounded-lg border-2 border-purple-500 text-center relative z-10">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            UPLINE
          </div>
          <Users className="h-12 w-12 mx-auto mb-2 text-purple-600" />
          <h4 className="font-bold text-lg">Upline Senior</h4>
          <p className="text-sm text-gray-600">Membantu pertumbuhan jaringan Anda</p>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="relative">
            <ArrowDown className="h-8 w-8 text-purple-500" />
            <div className="absolute -left-32 top-0 bg-purple-100 px-3 py-1 rounded-lg text-sm border border-purple-300">
              <span className="font-semibold">AUTO Spill Over</span>
            </div>
          </div>
        </div>

        {/* Middle Node */}
        <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-500 text-center relative z-10">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            ANDA
          </div>
          <Award className="h-12 w-12 mx-auto mb-2 text-blue-600" />
          <h4 className="font-bold text-lg">Anda</h4>
          <p className="text-sm text-gray-600">Mendapatkan downline tanpa harus mencari sendiri</p>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="relative">
            <ArrowDown className="h-8 w-8 text-blue-500" />
            <div className="absolute -right-32 top-0 bg-blue-100 px-3 py-1 rounded-lg text-sm border border-blue-300">
              <span className="font-semibold">Bonus & Reward</span>
            </div>
          </div>
        </div>

        {/* Bottom Node */}
        <div className="bg-green-100 p-4 rounded-lg border-2 border-green-500 text-center relative z-10">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            DOWNLINE
          </div>
          <Gift className="h-12 w-12 mx-auto mb-2 text-green-600" />
          <h4 className="font-bold text-lg">Downline Anda</h4>
          <p className="text-sm text-gray-600">Menghasilkan omset untuk Anda</p>
        </div>

        {/* Side Benefits */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-200 shadow-sm">
            <h4 className="font-bold text-purple-700 mb-2">Keuntungan Sistem AUTO Spill Over:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Pertumbuhan jaringan lebih cepat</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Potensi penghasilan lebih besar</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Tidak perlu bekerja sendirian</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Dukungan penuh dari upline</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
