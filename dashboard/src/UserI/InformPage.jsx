import React from 'react'
import CountUp from './countUp'

const InformPage = () => {
    const Infor = [
        { head: "Produk", total: 100, test: "Total item terdaftar" },
        { head: "Brand", total: 100, test: "Mitra brand aktif" },
        { head: "Vendor", total: 100, test: "Vendor terverifikasi" },
        { head: "Pelanggan", total: 100, test: "Transaksi bulan ini" },
    ]

    return (
        <div>
            <section className="flex lg:justify-center justify-start">
                <article className="grid gap-10 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-slate-200 lg:p-4">
                    {Infor.map((data) => (
                        <div
                            key={data.head}
                            className="lg:px-12 first:lg:pl-0 last:lg:pr-0"
                        >
                            <div className="row-span-2 grid h-40 items-center">
                                <div>
                                    <h2 className="font-bold text-xs uppercase tracking-[0.15em] text-slate-900 font-inter">
                                        {data.head}
                                    </h2>
                                    <div className="mt-3 flex items-baseline gap-1">
                                        <span className="text-6xl font-black text-slate-900 font-inter tracking-tight">
                                            <CountUp target={data.total} duration={2000} />
                                        </span>
                                        <span className="text-2xl font-black text-blue-600">+</span>
                                    </div>
                                    <p className="mt-2 h-0.5 w-8 bg-blue-600" />
                                    <p className="mt-3 text-sm text-slate-500 font-inter">
                                        {data.test}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </article>
            </section>
        </div>
    )
}

export default InformPage