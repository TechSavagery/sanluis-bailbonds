import AboutOne from "@/components/section/about/aboutOne";
import Feedback from "@/components/section/feedback";
import Gallery from "@/components/section/gallery";
import BannerTwo from "@/components/section/heroes/bannerTwo";
import ProjectsSlider from "@/components/section/projectsSlider";
import BlogSlider from "@/components/section/blogSlider";
import ShopSlider from "@/components/section/shopSlider";
import ServicesSlider from "@/components/section/servicesSlider";
import Testimonial from "@/components/section/testimonial";
import Counter from "@/components/ui/counter";
import VideoPortfolio from "@/components/section/videoPortfolio";
import { blogData } from "@/lib/fackData/blogData";
import { productData } from "@/lib/fackData/productData";
import { teamData } from "@/lib/fackData/teamData";
import SectionTitle from "@/components/ui/sectionTitle";
import TeamCardOne from "@/components/ui/cards/teamCardOne";
import { cardSlideAnimation } from "@/lib/utils";

export const metadata = {
  title: "San Luis Bail Bonds",
  description:
    "San Luis Bail Bonds provides fast, reliable 24/7 bail bond services in San Luis Obispo County. Discreet, compassionate support to get you or your loved one home quickly.",
};
const Home2 = () => {
  return (
    <>
      <BannerTwo />
      {/* <AboutOne /> */}
      {/* <Counter /> */}
      {/* <Gallery /> */}
      {/*Will keep this one for a process infographic */}
      {/* <ServicesSlider /> */}
      {/*Will keep this one for a agents infographic */}
      {/* <section className="pt-20">
        <div className="container-fluid ">
          <SectionTitle
            sectionName={"Team"}
            sectionTitle={"Architects of Architronix"}
            sectionDesc={
              "Where Imagination Takes Flight, and Excellence Blossoms"
            }
            button_text={"All Architects"}
            link={"/team"}
          />
        </div>
        <div className="container lg:pt-[340px] 2sm:pt-20 pt-14">
          <div className="grid lg:grid-cols-3 2sm:grid-cols-2 gap-7">
            {teamData
              .slice(0, 3)
              .map(({ id, img, name, position, social_link }) => (
                <TeamCardOne
                  key={id}
                  img={img}
                  name={name}
                  position={position}
                  social_link={social_link}
                  prantCalss={"team-card"}
                  cardVariants={cardSlideAnimation()}
                />
              ))}
          </div>
        </div>
      </section> */}
      {/* <VideoPortfolio /> */}
      {/* <ProjectsSlider /> */}
      {/*Will keep this one for a reviews infographic */}
      {/* <Testimonial /> */}
      {/* <ShopSlider data={productData.slice(0, 5)} /> */}
      {/* Will keep this one for blogs */}
      {/* <section className="pt-20">
        <div className="container-fluid">
          <SectionTitle
            sectionName={"Blog"}
            sectionTitle={"Design Insights & Inspiration"}
            sectionDesc={"Unveil the Secrets to Transforming Spaces"}
          />
        </div>
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <BlogSlider data={blogData.slice(0, 4)} />
        </div>
      </section> */}
      {/* -------- blog slider end */}
      <Feedback />
    </>
  );
};

export default Home2;
