import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

export default function InfoAbout() {
  let tabs = [
    {
      id: "about-me",
      label: "About me",
      content: (
        <p>I'm <span className="text-warning">Alvaro Fuentes</span>, a Cuban entrepreneur deeply passionate about technology and web development. My tech journey began at 15 {"(i've 19 years old)"}, and I've since dedicated myself to learning and gaining certifications in programming, cybersecurity, and user interface design. I firmly believe in technology's power to bring positive change and enjoy collaborating on open-source projects. I'm always open to connecting with fellow tech enthusiasts.</p>
      )
    }
  ];

  return (
    <div className="flex max-w-4xl flex-col justify-center relative">
      <Tabs aria-label="Dynamic tabs" items={tabs} size="md" color="primary">
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>
                {item.content}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </div>  
  );
}
