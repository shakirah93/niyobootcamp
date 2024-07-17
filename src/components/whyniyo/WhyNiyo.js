import List from "../list/List";
import "./WhyNiyo.css";
import scholarship from "../../images/scholarship.png";
import counselling from "../../images/counselling.png";
import childcare from "../../images/childcare.png";
import employment from "../../images/employment.png";
import empowerment from "../../images/empowerment.png";
import review from "../../images/review.png";
import rewards from "../../images/rewards.png";
import roles from "../../images/roles.png";
import careerSupport from "../../images/career_support.png";
import talents from "../../images/talents.png";
import upskill from "../../images/upskill.png";

const arrayList = [
  {
    srcKey: scholarship,
    altKey: "Scholarship icon",
    titleKey: "Scholarships",
    detailsKey:
      "This means that you will never have to worry about paying a penny to learn a new skill. Our partners have ensured that you are able to upskill at the comfort of your home with no cost to you.",
  }, // this represents scholarship
  {
    srcKey: counselling,
    altKey: "Counselling icon",
    titleKey: "Free Counselling Sessions",
    detailsKey:
      "Every student has access to a number of wellbeing and counselling sessions with our partners at frontline therapists.",
  }, // this represents counselling list
  {
    srcKey: childcare,
    altKey: "Childcare icon",
    titleKey: "Childcare Support",
    detailsKey:
      "Every mum on our bootcamps is eligible to apply to receive up to £250 in childcare vouchers as a way of supporting you whilst learning.",
  },
  {
    srcKey: review,
    altKey: "Reviews icon",
    titleKey: "4.75 / 5 Average Reviews",
    detailsKey:
      "We are focused on ensuring every student has the best experience our bootcamps have to offer.",
  },
  {
    srcKey: employment,
    altKey: "Employment icon",
    titleKey: "75% Employment Rate",
    detailsKey:
      "This is from our 2020 outcomes. Our students have been able to go on to work at some awesome organisations from junior to senior levels.",
  },
  {
    srcKey: upskill,
    altKey: "Upskill icon",
    titleKey: "560 people Upskilled",
    detailsKey:
      "Since 2020, we have upskilled 560 to start a career in tech and progress into more senior roles in tech in companies like Northrop Grumman, Zappi, KPMG and many more.",
  },
  {
    srcKey: careerSupport,
    altKey: "Career support icon",
    titleKey: "Dedicated Career Support from Day One",
    detailsKey:
      "You will have Hannah, our employability and career coach here to support you from your first day. She will help you with your LinkedIn, CV and also interview coaching.",
  },
  {
    srcKey: roles,
    altKey: "Roles icon",
    titleKey: "Exclusive Access to Open Roles to All Our Hiring Partners",
    detailsKey: "Exclusive access to open roles to all our hiring partners.",
  },
  {
    srcKey: rewards,
    altKey: "Rewards icon",
    titleKey: "Cool Rewards",
    detailsKey:
      "We like to reward our students during really important milestones. All our rewards come with an element of surprise.",
  },
  {
    srcKey: empowerment,
    altKey: "Empowerment icon",
    titleKey: "Empowerment Evenings and Events",
    detailsKey:
      "Free access to empowerment workshops and events by men and women who are excelling in their careers and businesses.",
  },
  {
    srcKey: talents,
    altKey: "Talents icon",
    titleKey: "7000+ Community of talents",
    detailsKey:
      "We’ve grown an organic community of 7000 people who are passionate about tech and the intersections of it with other industries.",
  },
];

function WhyNiyo() {
  return (
    <section id="why-niyo">
      <p class="why-text">Why Niyo Bootcamp</p>
      <h2>
        Bespoke all around <br /> <span>Support</span>
      </h2>
      <div className="lists-wrapper">
        {arrayList.map((list) => (
          <List
            key={list.titleKey}
            srcProps={list.srcKey}
            altProps={list.altKey}
            title={list.titleKey}
            details={list.detailsKey}
          />
        ))}
      </div>
    </section>
  );
}

export default WhyNiyo;
