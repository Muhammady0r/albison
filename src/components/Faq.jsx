import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg overflow-hidden max-sm:relative max-sm:-bottom-20">
      <h3 className="text-xl font-normal text-white text-center mb-6">KBS</h3>
      <h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">
        Ko'p beriladigan <br /> savollar
      </h2>
      <Accordion type="multiple" className="w-full px-4 pt-16">
        <AccordionItem
          value="item-1"
          className={
            "mx-auto w-full max-w-5xl rounded-2xl bg-background py-8 px-6 mb-5"
          }
        >
          <AccordionTrigger
            className={
              "flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium pr-6 hover:no-underline"
            }
          >
            1. Grant kurslar haqiqatdan grant asosidami ?
          </AccordionTrigger>
          <AccordionContent
            className={
              "px-4 pt-4 pb-2 text-base text-black font-normal opacity-50"
            }
          >
            Ha, hammaga grant beriladi.Lekin darslarni sababsiz qoldirgan yoki
            uyga vazifa vaqtida bajarilmagan holatda talaba grantini yuqotadi, 3
            martadan ortiq dars qoldirilsa yoki uyga vazifa bajarilmasa kursdan
            chetlashtiriladi.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className={
            "mx-auto w-full max-w-5xl rounded-2xl bg-background py-8 px-6 mb-5"
          }
        >
          <AccordionTrigger
            className={
              "flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium pr-6 hover:no-underline"
            }
          >
            2. Nimaga yosh chegarasi aynan 18 dan 28 yoshgacha ?
          </AccordionTrigger>
          <AccordionContent
            className={
              "px-4 pt-4 pb-2 text-base text-black font-normal opacity-50"
            }
          >
            Bizda yosh chegarasi mavjud. Grant kursga qabul qilishimiz uchun eng
            kamida 18 yoshda bo'lishingiz kerak. 28 yoshdan kattalar ko'p
            hollarda talablarimizga mos ravishda kuniga 5-7 soatgacha bo'sh vaqt
            ajrata olishmaydi.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className={
            "mx-auto w-full max-w-5xl rounded-2xl bg-background py-8 px-6 mb-5"
          }
        >
          <AccordionTrigger
            className={
              "flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium pr-6 hover:no-underline"
            }
          >
            3. Farzandim 18 yoshdan kichik, dasturlashga qiziqishi yuqori.
            Sizlarda o'qisa bo'lmaydimi ?
          </AccordionTrigger>
          <AccordionContent
            className={
              "px-4 pt-4 pb-2 text-base text-black font-normal opacity-50"
            }
          >
            Dasturlashni o'rganishda ingliz tilini bilish va kuchli mantiqiy
            fikrlashga ega bo'lish kerak. Agar farzandingizni ingliz tilini
            bilishi va mantiqiy fikrlashi yuqori darajada bo'lsa kurslarimizga
            qabul qilishimiz mumkin
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className={
            "mx-auto w-full max-w-5xl rounded-2xl bg-background py-8 px-6 mb-5"
          }
        >
          <AccordionTrigger
            className={
              "flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium pr-6 hover:no-underline"
            }
          >
            4. Frontend yoki boshqa kurslarni tugatganman nima qilsam bo'ladi ?
          </AccordionTrigger>
          <AccordionContent
            className={
              "px-4 pt-4 pb-2 text-base text-black font-normal opacity-50"
            }
          >
            Biror bir kursni 100% to'liq tugatib ( masalan frontend bo'lsa JS
            advanced biror bir framework ) + gitda kamida ikkita loyihangiz
            bo'lsa ish uchun suhbatga chaqiramiz. Lekin chala yarim bitirgan
            bo'lsangiz Frontend kursni boshidan boshlab o'rgatamiz.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className={
            "mx-auto w-full max-w-5xl rounded-2xl bg-background py-8 px-6 mb-5"
          }
        >
          <AccordionTrigger
            className={
              "flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium pr-6 hover:no-underline"
            }
          >
            5. Frontendni o'rganmasdan ( Backend, mobile, Suniy intelekt,
            Python, Flutter ....) ni o'rgansam bo'ladimi ?
          </AccordionTrigger>
          <AccordionContent
            className={
              "px-4 pt-4 pb-2 text-base text-black font-normal opacity-50"
            }
          >
            Bo'ladi faqat bizda emas. Bizda IT bo'yicha barcha kurslar mavjud
            lekin faqat Frontendni to'liq tugatgandan so'ng boshqa kurslarga
            o'tishingiz mumkin. Ko'p yilik tajribamizga tayanib shu uslubda
            dasturchilarni tayyorlaymiz. Internet, DB, API va shu kabi
            boshlang'ich fundamental bilimlarsiz IT-ni o'rganishni maslahat
            bermaymiz.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-6"
          className={
            "mx-auto w-full max-w-5xl rounded-2xl bg-background py-8 px-6 mb-5"
          }
        >
          <AccordionTrigger
            className={
              "flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium pr-6 hover:no-underline"
            }
          >
            6. 3 oyda Frontendni tugatib bo'ladimi ?
          </AccordionTrigger>
          <AccordionContent
            className={
              "px-4 pt-4 pb-2 text-base text-black font-normal opacity-50"
            }
          >
            Biz Germaniya va Amerikaning IT instruktorlari tomonidan tuzilgan
            kurslar bo'yicha tayyorlaymiz. Tajribamizdan kelib chiqqan holda
            aytadigan bo'lsak, ingliz tilini bilsangiz va kuniga 5-7 soat vaqt
            sarflasangiz nasib bo'lsa bemalol o'rgansa bo'ladi.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-7"
          className={
            "mx-auto w-full max-w-5xl rounded-2xl bg-background py-8 px-6 mb-5"
          }
        >
          <AccordionTrigger
            className={
              "flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium pr-6 hover:no-underline"
            }
          >
            7. Grant kurs bo'lsa sizlarga ishlab berishim kerakmi ?
          </AccordionTrigger>
          <AccordionContent
            className={
              "px-4 pt-4 pb-2 text-base text-black font-normal opacity-50"
            }
          >
            Sizda hech qanaqa ishlab berish majburiyati bo'lmaydi. Albison
            jamoasiga mos kelsangiz sizni jamoamizda olib qolamiz yoki boshqa IT
            kompaniyalarga ishga kirishingizda ko'maklashamiz. Undan tashqari
            Albison Academy volontyorlari safiga qo'shilishingiz mumkin.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-8"
          className={
            "mx-auto w-full max-w-5xl rounded-2xl bg-background py-8 px-6 mb-5"
          }
        >
          <AccordionTrigger
            className={
              "flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium pr-6 hover:no-underline"
            }
          >
            8. iTransition va iTechArt kompaniyalarini sizlarga nima aloqasi bor
            ?
          </AccordionTrigger>
          <AccordionContent
            className={
              "px-4 pt-4 pb-2 text-base text-black font-normal opacity-50"
            }
          >
            Xalqaro tajriba almashish maqsadida o'z shogirdlarimizni IT- gigant
            kompaniyalariga ham tayyorlaymiz. Bizning IT- markazimizni bitirgan
            yoshlar hozirda ushbu kompaniyalarda ishlab kelmoqda. Endilikda
            barcha bitiruvchilarimiz iTransition, Exadel va iTechArt talablari
            bo'yicha tayyorlanmoqda.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-9"
          className={
            "mx-auto w-full max-w-5xl rounded-2xl bg-background py-8 px-6 mb-5"
          }
        >
          <AccordionTrigger
            className={
              "flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium pr-6 hover:no-underline"
            }
          >
            9. Grant kurslardan sizlarga nima foyda ?
          </AccordionTrigger>
          <AccordionContent
            className={
              "px-4 pt-4 pb-2 text-base text-black font-normal opacity-50"
            }
          >
            Albison Akademyasining asosiy maqsadi foyda ko'rish emas, balki
            global IT kompaniyalarda ishlay oladiga dasturchilarni tayyorlash va
            o'zidan keyingi avlodga ham foydali bilimlarini beminnat ulashadigan
            hamjamiyat yaratish .
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-10"
          className={
            "mx-auto w-full max-w-5xl rounded-2xl bg-background py-8 px-6 mb-5"
          }
        >
          <AccordionTrigger
            className={
              "flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium pr-6 hover:no-underline"
            }
          >
            10. Dasturchiman sizlarga qanday yordam berishim mumkin ?
          </AccordionTrigger>
          <AccordionContent
            className={
              "px-4 pt-4 pb-2 text-base text-black font-normal opacity-50"
            }
          >
            Agar sizda dars berishga qiziqish bo'lsa va jamoamizda volontyorlik
            qilmoqchi bo'lsangiz - biz bilan birgalikda ishlashingiz va jamoamiz
            bilan o'z bilim ko'nikmalaringizni oshirishingiz mumkin.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
