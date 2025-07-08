import Link from "next/link";
import Logo from "@/assets/icons/logo";
import SocialMediaList from "./ui/socialMediaList";
import img from "@/assets/images/sanluis-bailbonds-logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" container-fluid  mx-auto ">
      <div className=" bg-secondary ">
        <div className="container">
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center pt-[100px] pb-20">
            <div>
              <Link href={""} className="text-primary-foreground">
                <Image src={img} loading="lazy" width={150} height={20} />
              </Link>
              <h5 className="xl:text-2xl text-xl font-semibold text-primary-foreground leading-160 pt-2.5 pb-3">
                Real People. Real Help.
              </h5>
              {/* <SocialMediaList /> */}
            </div>
            <div className="mt-12 lg:mt-0 flex gap-x-10">
              <span className="h-[198px] w-[1px] bg-primary block my-2.5"></span>
              <div>
                <h5 className="text-2xl font-extrabold block text-primary-foreground leading-160 ">
                  Office:
                </h5>
                <span className="w-[99px] h-[1px] bg-primary block my-2.5"></span>
                <Link
                  href={"https://maps.app.goo.gl/pRzKgM8Cr8LNS4Vt9"}
                  className="text-lg block text-primary-foreground hover-underline"
                >
                  <div className="mt-[18px]">
                    <p className="text-lg text-primary-foreground">
                      297 Santa Rosa St, San Luis Obispo,{" "}
                    </p>
                    <p className="text-lg  text-primary-foreground">
                      CA 93405, USA{" "}
                    </p>
                  </div>
                </Link>
                <div className="mt-[17px]">
                  <Link
                    href={"tel:8055448888"}
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Phone: <span> (805) 544-8888</span>
                  </Link>
                  <Link
                    href={"mailto:hello@architronix.com"}
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Email: <span>agents@sanluisbailbonds.com</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 flex gap-x-10">
              <span className="h-[198px] w-[1px] bg-primary block my-2.5"></span>
              <div>
                <h5 className="text-2xl font-extrabold inline-block text-primary-foreground leading-160 ">
                  San Luis County Jail:
                </h5>
                <span className="w-[99px] h-[1px] bg-primary block my-2.5"></span>

                <Link
                    href={"https://maps.app.goo.gl/XvYVFpsHBHre3ufA9"}
                    className="text-lg block text-primary-foreground hover-underline"
                >
                  <div className="mt-[18px]">
                    <p className="text-lg text-primary-foreground">
                      1585 Kansas Ave, San Luis Obispo,{" "}
                    </p>
                    <p className="text-lg  text-primary-foreground">
                      CA 93405, USA{" "}
                    </p>
                  </div>
                </Link>
                <div className="mt-[17px]">
                  <Link
                    href={"tel:8057814600"}
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Phone: <span> (805) 781-4600</span>
                  </Link>
                  <Link
                    href={
                      "https://www.slocounty.ca.gov/departments/sheriff-coroner/jail-information"
                    }
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Website: <span>SLO County Jail</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-pritext-primary-foreground" />
          <div className="py-8 lg:flex justify-between items-center">
            <span className="text-sm text-primary-foreground block">
              Engineered By <Link href={""}>Tech Savagery</Link>{" "}
            </span>
            <span className="text-sm text-primary-foreground block mt-3 lg:mt-0">
              ©2025, San Luis Bail Bonds, All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
