import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import imgAbout from '../../assets/img-about.jpg';

export default function InfoAbout() {
  let tabs = [
    {
      id: "about-me",
      label: "About me",
      content: (
        <p>I&apos;m <span className="text-warning">Alvaro Fuentes</span>, a Cuban entrepreneur deeply passionate about technology and web development. My tech journey began at 15 {"(i've 19 years old)"}, and I&apos;ve since dedicated myself to learning and gaining certifications in programming, cybersecurity, and user interface design. I firmly believe in technology`s power to bring positive change and enjoy collaborating on open-source projects. I&apos;m always open to connecting with fellow tech enthusiasts.</p>
      )
    }
  ];

  return (
    <>
      <div className="z-10 min-w-[300px] hidden md:flex md:justify-center justify-start">
          <img
              width={300}
              className="rounded-lg border-1 min-w-[300px]"
              alt="img about-me"
              src={imgAbout}
          />
      </div>
      <div className="flex max-w-4xl flex-col justify-center relative">
        <Tabs aria-label="Dynamic tabs" items={tabs} size="md">
          {(item) => (
            <Tab key={item.id} title={item.label} className="px-3 py-1 font-body font-medium">
              <Card>
                <CardBody className="p-4">
                  {item.content}
                </CardBody>
              </Card>  
            </Tab>
          )}
        </Tabs>
      </div>  
    </>
  );
}
