import Container from "components/layouts/Container"
import { SvgDownloadSectionIllustration } from "svg/component/illustration"

const DownloadSection = () => {
  return (
    <section className="py-[100px]" id="download">
      <Container>
        <div className="bg-primary w-full px-6 lg:px-20 py-6 lg:py-0 rounded-[10px] md:rounded-[20px] flex flex-row items-center justify-between">
          <aside className="w-full lg:w-1/2 flex flex-col gap-[45px]" data-aos="fade-right">
          </aside>
          <aside className="hidden lg:block" data-aos="fade-up">
            <SvgDownloadSectionIllustration className="text-[540px]" />
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default DownloadSection
