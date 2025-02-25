
const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Partners Section */}
      <section className="mb-16">
        <h2 className="text-center text-2xl font-semibold mb-8">Nos Partenaires</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {[
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oKtiFDxcvz3TRGHHnYNUplJqet2VGQ.png",
              alt: "AI Garage",
              width: 120,
            },
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oKtiFDxcvz3TRGHHnYNUplJqet2VGQ.png",
              alt: "AI Factory",
              width: 120,
            },
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oKtiFDxcvz3TRGHHnYNUplJqet2VGQ.png",
              alt: "University Logo",
              width: 120,
            },
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oKtiFDxcvz3TRGHHnYNUplJqet2VGQ.png",
              alt: "CGFT",
              width: 120,
            },
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oKtiFDxcvz3TRGHHnYNUplJqet2VGQ.png",
              alt: "GIZ",
              width: 120,
            },
          ].map((partner, index) => (
            <div key={index} className="w-[120px]">
              <img
                src={partner.src || "/placeholder.svg"}
                alt={partner.alt}
                width={partner.width}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* What is ATIA Section */}
      <section className="text-center mb-16">
        <h1 className="text-3xl font-bold mb-6">C&apos;est Quoi l&apos;ATIA</h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          L&apos;Association Tunisienne pour l&apos;Intelligence Artificielle, ATIA, est une association à but non
          lucratif fondée en 2005 par Prof. Khaled GHEDIRA.
        </p>
      </section>

      {/* Brief Section */}
      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Bref, L&apos;ATIA</h2>
          <p className="text-gray-600">
            Elle est issue des deux premières structures de recherche dans le domaine de l&apos;Intelligence
            Artificielle (IA) en Tunisie qui ont été également fondées par Prof. Khaled GHEDIRA à savoir : l&apos;unité
            de recherche URIASIS (IA et Systèmes d&apos;Informations) devenue par la suite le laboratoire de recherche
            SOIE pour Stratégies d&apos;Optimisation et Informatique intelligentE comprenant plus d&apos;une centaine de
            chercheurs universitaires spécialistes en IA.
          </p>
        </div>
        <div className="flex justify-center items-start">
          <div className="bg-[#F7931E] rounded-lg p-6 text-white text-center max-w-sm">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oKtiFDxcvz3TRGHHnYNUplJqet2VGQ.png"
                alt="Prof. Khaled Ghédira"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Pr. Khaled Ghédira</h3>
            <p className="text-sm">Fondateur de l&apos;ATIA</p>
            <p className="text-sm">Président d&apos;honneur</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="flex gap-8">
          <div className="bg-[#F7931E] text-white p-6 rounded-lg">
            <span className="block text-4xl font-bold">300</span>
            <span className="text-sm">Thèses de doctorat</span>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <span className="block text-4xl font-bold">1500</span>
            <span className="text-sm">Articles Scientifiques</span>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Le Rôle de l&apos;association</h2>
          <p className="text-gray-600">
            Depuis sa création, l&apos;ATIA a contribué à la soutenance de plus de 300 thèses de doctorat et publié
            environ 1500 articles scientifiques dans divers ouvrages, conférences, et revues. Elle a aussi organisé une
            cinquantaine de conférences, workshops, écoles de formation et rencontres thématiques autour de l&apos;IA et
            ce, aux échelles nationale et internationale.
          </p>
        </div>
      </section>
    </div>
  )
};

export default AboutPage;