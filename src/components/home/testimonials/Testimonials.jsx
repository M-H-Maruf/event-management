/* eslint-disable react/no-unescaped-entities */
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Testimonials = () => {
  return (
    <div
      id="Testimonials"
      className="max-w-xl h-fit flex justify-between items-center flex-col py-20 px-14"
    >
      <div className="">
        <h1
          data-aos="fade-right"
          className="font-teko font-bold text-event-text text-4xl aos-init aos-animate md:col-span-2 col-span-1"
        >
          TESTIMONIALS
        </h1>{" "}
        <h2
          data-aos="fade-left"
          className="font-teko tracking-tighter text-xl font-semibold pt-4 mb-8"
        >
          Don't Just Take Our Words For It. See What Our Past Customers Had To
          Say About It.
        </h2>
      </div>{" "}
      <Tabs>
        <TabList>
          <Tab>
            <h2 className="font-bold tracking-tighter font-orbitron">John</h2>
          </Tab>
          <Tab>
            <h2 className="font-bold tracking-tighter font-orbitron">Jane</h2>
          </Tab>
          <Tab>
            <h2 className="font-bold tracking-tighter font-orbitron">Sarah</h2>
          </Tab>
          <Tab>
            <h2 className="font-bold tracking-tighter font-orbitron">David</h2>
          </Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-justify h-48" data-aos="flip-up">
            "Exceptional service and top-notch quality! Our project was handled
            with utmost professionalism and delivered ahead of schedule. I
            highly recommend this company for their expertise and dedication to
            client satisfaction and excellence!" ---John Doe, CEO, Tech
            Innovators Inc.
          </h2>
        </TabPanel>
        <TabPanel>
          <h2 className="text-justify h-48" data-aos="flip-up">
            "Working with this company has been a game-changer for our business.
            Their innovative solutions and attention to detail have
            significantly boosted our productivity. We look forward to many more
            successful collaborations!" ---Jane Smith, Marketing Director,
            Bright Ideas Co.
          </h2>
        </TabPanel>
        <TabPanel>
          <h2 className="text-justify h-48" data-aos="flip-up">
            "Incredible expertise coupled with outstanding customer service!
            This company transformed our vision into reality. Their team's
            commitment to excellence is truly commendable. We're thrilled with
            the results!" ---Sarah Johnson, Creative Director, Visionary Designs
            Studio
          </h2>
        </TabPanel>
        <TabPanel>
          <h2 className="text-justify h-48" data-aos="flip-up">
            "Choosing this company was the best decision we made for our
            project. Their attention to detail and proactive communication set
            them apart. The end result exceeded our expectations. We're looking
            forward to future collaborations!" ---David Lee, COO, Quantum
            Technologies
          </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Testimonials;
