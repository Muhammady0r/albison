import React from "react";

const Footer = () => {
  return (
    <div className="bg-black -mt-40" id="first-section">
      <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11983.653695846024!2d69.24607430717799!3d41.332495926230926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6cbd7e49a1%3A0xf23c3817c486d743!2sAmity%20University%20Tashkent!5e0!3m2!1sru!2s!4v1703454570270!5m2!1sru!2s"
            width="600"
            height="450"
            loading="lazy"
            className="w-full rounded-xl"
          ></iframe>
        </div>
        <div className="flex justify-center gap-2 pt-20 pb-20">
          <a
            className="footer-icons csicon"
            target="_blank"
            href="https://youtube.com/@albisonuz"
          >
            <img
              alt="instagram"
              width="35"
              height="35"
              src="https://www.albison.uz/_next/static/media/youtube.45167709.svg"
            />
          </a>
          <a
            className="footer-icons csicon"
            target="_blank"
            href="https://t.me/albisonuz"
          >
            <img
              alt="twitter"
              width="35"
              height="35"
              src="https://www.albison.uz/_next/static/media/telegram.c3d959e6.svg"
            />
          </a>
          <a
            className="footer-icons csicon"
            target="_blank"
            href="https://instagram.com/albisonuz"
          >
            <img
              alt="instagram"
              width="35"
              height="35"
              src="https://www.albison.uz/_next/static/media/instagram.a8e221fa.svg"
            />
          </a>
          <a
            className="footer-icons csicon"
            target="_blank"
            href="https://www.linkedin.com/company/albisonuz"
          >
            <img
              alt="instagram"
              width="35"
              height="35"
              src="https://www.albison.uz/_next/static/media/linkedin.3fa0733e.svg"
            />
          </a>
          <a className="footer-icons csicon" href="tel:+998901122757">
            <img
              alt="phone"
              width="35"
              height="35"
              src="https://www.albison.uz/_next/static/media/phone.c3ce974d.svg"
            />
          </a>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-white/70">
            <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8 text-white/70">
              <div>
                <h3 className="text-center md:text-start text-offwhite text-lg">
                  *Ma`lumotlar ochiq resurslarga asoslangan
                </h3>
              </div>
              <div className="flex justify-center md:justify-end">
                <a href="/">
                  <h3 className="text-offwhite pr-6">Albison Academy®️ 2023</h3>
                </a>
                <a href="/honor">
                  <h3 className="text-offwhite pl-6 border-solid border-l border-white/70">
                    Sharaf Kodeksii
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
