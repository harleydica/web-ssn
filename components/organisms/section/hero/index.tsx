import Button from "components/atoms/Button"
import Container from "components/layouts/Container"
import Statistic from "components/molecules/Statistic"
import SvgFitToParent from "components/molecules/SvgFitToParent"
import useScrollToSection from "hooks/useScrollToSection"
import {
  SvgArrowRightCircleIcon,
  SvgDownloadIcon,
  SvgUserIcon,
} from "svg/component/icon"
import { SvgHeroSectionIllustration } from "svg/component/illustration"
import {
  SvgCnnLogo,
  SvgForbesLogo,
  SvgGoogleLogo,
  SvgTheNewyorkTimeLogo,
  SvgTirtoLogo,
} from "svg/component/logo"

const HeroSection = () => {
  const scrollToSection = useScrollToSection()
  return (
    <section
      className="w-full bg-gradient-to-b from-[#EEF2FF] to-[rgba(238,242,255,0)] pt-16 lg:pt-24"
      id="hero"
    >
      <Container>
        <div
          className={`flex flex-col gap-12 lg:gap-0 lg:flex-row items-center`}
        >
          <aside className="w-full lg:w-1/2" data-aos="fade-down-right">
            <article className="flex flex-col gap-4">
              <span className="text-primary text-sm font-semibold font-sourceSansPro">
                PT Sintesa Sinegri Nusantara
              </span>
              <h2 className="text-4xl font-normal text-dark">
              Produk Internet Cepat dan Murah untuk Anda
              </h2>
              <p className="text-lg text-dark/[60%] font-sourceSansPro">
              Rasakan Kecepatan Tanpa Gangguan dan Konektivitas Tanpa Batas dengan KAMI: Bebaskan Kekuatan Internet Secepat Kilat!
              </p>
            </article>
            <div className="flex items-center gap-2 md:gap-4 mt-8 flex-wrap">
              <Button
                endIcon={<SvgArrowRightCircleIcon className="text-xl" />}
                onClick={() => {
                  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
                }}
              >
                Beli Sekarang
              </Button>
              <Button variant="soft" onClick={() => scrollToSection("feature")}>
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-6 sm:gap-10 mt-16 flex-wrap"> 
              <Statistic
                icon={<SvgUserIcon />}
                label={"TOTAL USERS"}
                value={"1,590"}
              />
            </div>
          </aside>
          <aside className="w-full lg:w-1/2 overflow-hidden" data-aos="fade-up-left">
            <SvgFitToParent aspectRatio={1.1}>
              <SvgHeroSectionIllustration />
            </SvgFitToParent>
          </aside>
        </div>
        <div className="flex items-center justify-center gap-10 flex-wrap text-3xl md:text-4xl px-6 py-14 bg-primary/[5%] rounded-[15px] mt-[75px]" data-aos="zoom-in-up">
          <SvgCnnLogo />
          <SvgTirtoLogo />
          <SvgForbesLogo />
          <SvgGoogleLogo />
          <SvgTheNewyorkTimeLogo />
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
