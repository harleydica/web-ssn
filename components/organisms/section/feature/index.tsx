import Container from "components/layouts/Container"
import SectionArticle from "components/molecules/SectionArticle"
import Feature from "components/molecules/Feature"
import { SiPagespeedinsights } from "react-icons/si"
import { Tb24Hours } from "react-icons/tb"
import { BsHeadset } from "react-icons/bs"

const FeatureSection = () => {
  return (
    <section className="py-[100px] bg-radiantGradient" id="feature" >
      <Container>
        <div className="flex flex-col gap-20 items-center">
          <SectionArticle
            badge="NGGAK HARUS SIH SEBENERNYA"
            title="Kenapa Harus Pakai Chat N’ Rechat?"
            description="Sebenernya yang bagus itu sih WhatsApp loh, mending pake WhatsApp aja deh. Yaudah berikut ini adalah fitur-fitur WhatsApp."
            textAlign="center"
            className="max-w-[500px]"
            data-aos="zoom-in-up"
          />
          <div className="w-full flex flex-col gap-[30px] md:grid md:grid-cols-3">
            <Feature
              illustration={<SiPagespeedinsights color="gray" size="100" />}
              title="Kecepatan Stabil"
              description="Kami memberikan layananan internet yang stabil dan cocok untuk kebutuhan harian anda."
              data-aos="fade-up"
            />
            <Feature
              illustration={<Tb24Hours color="gray" size="100" />}
              title="Aktif setiap saat"
              description="Kami berusaha menghadirkan akses internet yang selalu online dan siap dipakai setiap saat."
              data-aos="fade-up"
            />
            <Feature
              illustration={<BsHeadset color="gray" size="100" />}
              title="Support 24/7"
              description="Dukungan teknis handal yang siap membantu untuk menjaga kualitas dari akses internet yang kami berikan."
              data-aos="fade-up"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FeatureSection
