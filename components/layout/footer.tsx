"use client";


export function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: ["ChatAI", "APIs & SDKs"],
    },
    {
      title: "Company",
      links: ["About", "Teams"],
    },
    {
      title: "Developers",
      links: ["Contributing", "Documentation"],
    },
  ];

  return (
    <div className="relative mt-96">
      <div className="min-w-[1007px] min-h-[469px] text-white pt-24 bg-shock-orange absolute left-1/2 -translate-x-1/2 bottom-0">
        <div className="font-pp-supply-sans flex gap-32 justify-center items-center">
          {footerLinks.map((link, index) => (
            <ul key={index} className="flex flex-col items-center">
              <li className="text-base font-regular mb-4">{link.title}</li>
              {link.links.map((link, index) => (
                <li key={index} className="text-[13px] underline font-thin">
                  {link}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-10">
          <p className="font-pp-neue-montreal text-[128px] text-center">Humanbase</p>
        </div>
      </div>
      <div className="w-full h-[293px] bg-shock-orange"></div>
    </div>
  );
}
